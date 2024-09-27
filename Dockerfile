# build step
FROM node:16.20.0 as build
WORKDIR /app
COPY package.json ./

RUN apk add --update python make g++\
   && rm -rf /var/cache/apk/*

RUN npm install
COPY . ./
RUN npm run build

# release step
FROM nginx:1.21.5-alpine as release
COPY --from=build /app/build /usr/share/nginx/html/
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]