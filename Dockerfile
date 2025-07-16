FROM node:24.3.0-bookworm-slim as node

WORKDIR /app

COPY package*.json /app/

RUN npm install && npm cache clean --force

COPY . /app

EXPOSE 5173

CMD ["npm", "run", "dev"]