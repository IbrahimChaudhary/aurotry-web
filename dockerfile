# Use the latest Node.js version
FROM node:20 AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy the entire project and build
COPY . .
RUN npm run build

# Production stage with the 20 Node.js
FROM node:20

WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app ./

# Expose the Next.js port
EXPOSE 3000

# Run the app
CMD ["npm", "run", "start"]
