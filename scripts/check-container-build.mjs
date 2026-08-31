import { readFile } from "node:fs/promises";
import { resolve } from "node:path";

const dockerfile = await readFile(resolve(process.cwd(), "Dockerfile"), "utf8");
const failures = [];

for (const required of [
  "FROM node:20-alpine AS base",
  "RUN npm ci --include=dev",
  "COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./",
  "CMD [\"node\", \"server.js\"]",
]) {
  if (!dockerfile.includes(required)) failures.push(`Missing container build control: ${required}`);
}

for (const forbidden of [
  "node:18-alpine",
  "npm install --save-dev",
  "ENV NODE_ENV=production\n\nCOPY --from=deps",
]) {
  if (dockerfile.includes(forbidden)) failures.push(`Unsafe or non-reproducible Dockerfile pattern: ${forbidden}`);
}

if (failures.length > 0) {
  throw new Error(`Container build controls failed:\n- ${failures.join("\n- ")}`);
}

console.log("[container-build] Node 20, lockfile-only build dependencies, and standalone runtime verified.");
