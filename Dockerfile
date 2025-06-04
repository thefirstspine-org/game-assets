FROM node:23

WORKDIR /rest

COPY . .

RUN npm ci
RUN npm run build

CMD ["node", "dist/main.js"]
