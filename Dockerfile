
FROM node:16.4.2 as build-deps
ARG PORT
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn
RUN echo $PORT
COPY . ./
RUN yarn build

FROM nginx:1.21-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
# EXPOSE $PORT
# CMD ["nginx", "-g", "daemon off;"]
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
