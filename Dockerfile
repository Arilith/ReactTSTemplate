FROM node:lts-alpine AS builder
# Add a work directory
WORKDIR /app
# Cache and Install dependencies
COPY package.json .

RUN npm i ts-node typescript vite -g 
RUN yarn
# Copy app files
COPY . .

# Test the app
RUN yarn test

# Build the app
RUN yarn build

# Bundle static assets with nginx
FROM nginx:1.21.0-alpine as production
ENV NODE_ENV production
# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html
# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Expose port
EXPOSE 80
# Start nginx
CMD ["nginx", "-g", "daemon off;"]
