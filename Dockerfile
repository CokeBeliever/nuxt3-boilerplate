FROM node:18

WORKDIR /app
COPY . .

RUN npm config set registry https://registry.npmmirror.com
RUN npm install --force

EXPOSE 3001

CMD npm run pm2:prod
