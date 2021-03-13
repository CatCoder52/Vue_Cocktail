FROM node:lts-alpine as bugildstage
WORKDIR /usr/src/app
COPY package* ./
RUN apk update \
  && apk upgrade \
  && apk --no-cache add --virtual builds-deps build-base python \
  && npm ci \
  && apk del builds-deps build-base python \
  && rm -rf /var/cache/apk/* \
  && npm cache clean --force
COPY . .
RUN npm run build

FROM nginx:stable-alpine
COPY --from=bugildstage /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
