FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
# Cambiamos npm ci --only=production por npm install:
RUN npm install --only=production

COPY . .

USER node

EXPOSE 3000
CMD ["node", "index.js"]