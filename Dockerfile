FROM node:24.3.0-bookworm-slim as node

WORKDIR /app

COPY package*.json ./

RUN npm install && npm cache clean --force

COPY . ./

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]