
FROM node:16.4.2 as build-deps
WORKDIR /usr/src/app
COPY package.json yarn.lock .yarnclean ./
RUN yarn install --production
COPY . ./
RUN yarn build

FROM nginx:1.21-alpine
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html
# ----Run on local----
# docker build -t image-name . 
# docker run -dp 3000:80 image-name
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]

# ----Run on Heroku----
COPY nginx.conf /etc/nginx/conf.d/default.conf
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
