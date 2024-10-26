# Base image for Node.js
FROM node:14

# Set the working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React app
RUN npm run build

# Serve the React app using a simple HTTP server
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Expose the port
EXPOSE 3000