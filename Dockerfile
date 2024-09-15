# Use the official Node.js image as the base
FROM node:16-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Expose the port the app runs on
EXPOSE 3000

# Start the application in development mode
CMD ["npm", "start"]
