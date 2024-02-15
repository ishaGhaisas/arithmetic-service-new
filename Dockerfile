# Use an official Node.js runtime as a parent image
FROM node:20.11.0

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js dependencies
RUN npm ci
# Copy the rest of the application code to the working directory
COPY . .

# Command to run the Node.js application
CMD npm start
