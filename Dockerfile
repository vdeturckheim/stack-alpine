FROM node:14-alpine

RUN apk add python3 make g++ python
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run configure
RUN npm run build

CMD ["node", "index.js"]
