FROM node:20-slim


# Install dependencies needed for building TypeScript and working with node modules
# RUN apk add --no-cache \
#     bash \
#     libc6-compat \
#     python3 \
#     make \
#     g++ 

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or yarn.lock) first
COPY package*.json ./

# Install all dependencies including dev dependencies for TypeScript
RUN npm install

# Copy the TypeScript source code
COPY . .

# Compile the TypeScript code (optional, if you want to compile before running)
RUN npm run build

# Expose the port your app will run on
EXPOSE 3000

# Start the application with ts-node directly
CMD ["node", "dist/app.js"]