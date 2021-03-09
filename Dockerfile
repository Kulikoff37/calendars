FROM node:14-alpine as angular-app
ARG NODE_ENV=development
ENV NODE_ENV="${NODE_ENV}"
WORKDIR /app
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --$NODE_ENV --silent
COPY . .
RUN npm run build