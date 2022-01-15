FROM node:16.3.0-alpine

WORKDIR /var/www/blog-admin

COPY ./ /var/www/blog-admin

RUN yarn install
RUN yarn build

ENV NODE_ENV production

CMD [ "yarn", "start" ]
