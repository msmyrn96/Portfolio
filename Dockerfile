# build step
FROM node:18.20.4-alpine3.20 AS build
WORKDIR /app
COPY package.json ./

# Install python/pip
ENV PYTHONUNBUFFERED=1
RUN apk add --update --no-cache python3 && ln -sf python3 /usr/bin/python
RUN python3 -m ensurepip
RUN pip3 install --no-cache --upgrade pip setuptools

RUN npm install
COPY . ./
RUN npm run build

# release step
FROM nginx:1.21.5-alpine AS release
COPY --from=build /app/build /usr/share/nginx/html/
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]