
FROM node:16.4.2 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
COPY . ./
RUN yarn build

FROM nginx:1.21-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
EXPOSE 9080
CMD ["nginx", "-g", "daemon off;"]
