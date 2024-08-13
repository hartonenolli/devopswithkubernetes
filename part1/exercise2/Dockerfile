FROM node:14

WORKDIR /usr/src/app

RUN node -v

COPY . .

EXPOSE ${PORT:-8000}

CMD ["node", "server.js"]