# build step
FROM node:18.20.4 AS build
WORKDIR /app
COPY package.json ./

# Install python/pip
RUN apt-get install python3 -y

RUN npm install
COPY . ./
RUN npm run build

# release step
FROM nginx:1.21.5-alpine AS release
COPY --from=build /app/build /usr/share/nginx/html/
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]