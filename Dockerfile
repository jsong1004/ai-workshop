# Build stage for frontend
FROM node:20-alpine AS frontend-builder

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy frontend source
COPY . .

# Build frontend
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including devDependencies) for tsx
RUN npm install

# Copy built frontend from builder stage
COPY --from=frontend-builder /app/dist ./dist

# Copy server source
COPY server ./server

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /app
USER appuser

# Expose the port the app runs on
EXPOSE ${PORT:-8080}

# Set environment variables
ENV NODE_ENV=production

# Start the server with tsx
CMD ["npx", "tsx", "server/index.ts"] 