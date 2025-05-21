FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copy both package files
COPY package.json package-lock.json* ./
COPY jsconfig.json tsconfig.json* ./

# Install all dependencies including dev dependencies
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app

# Copy dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/jsconfig.json ./jsconfig.json
COPY --from=deps /app/tsconfig.json ./tsconfig.json

# Copy all source files
COPY . .

# Create default environment variables if not provided
RUN if [ ! -f .env ]; then cp env.example .env || touch .env; fi

# Create temporary types directory to store reference files
RUN mkdir -p /tmp/types
RUN echo '/// <reference types="estree" />\n/// <reference types="json-schema" />' > /tmp/types/references.d.ts
RUN mkdir -p src/types
RUN cp /tmp/types/references.d.ts src/types/ || true

# Set the proper NODE_ENV for build
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

# Ensure TypeScript dependencies are installed
RUN npm install --save-dev typescript@5.1.6 @types/react@19.0.0 @types/node@20.10.0 @types/react-dom@19.0.0 @types/estree @types/json-schema

# Build the application
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"] 