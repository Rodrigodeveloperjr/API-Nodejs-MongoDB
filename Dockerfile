FROM node

ENV PORT=3000

EXPOSE 3000

WORKDIR /app

COPY [ "package.json", "yarn.lock" ] .

RUN yarn

COPY . .

USER node

CMD ["yarn", "start"]