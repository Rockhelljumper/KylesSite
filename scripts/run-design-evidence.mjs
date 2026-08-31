import { spawn } from "node:child_process";

const command = process.platform === "win32" ? "npx.cmd" : "npx";
const child = spawn(command, ["playwright", "test", "e2e/design-evidence.spec.ts"], {
  stdio: "inherit",
  env: { ...process.env, CAPTURE_DESIGN_EVIDENCE: "true" },
  shell: process.platform === "win32",
});

child.on("exit", (code) => process.exit(code ?? 1));
