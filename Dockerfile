FROM node:18-alpine
WORKDIR /app
COPY . ./public/
RUN npm install -g serve
CMD ["serve", "-s", "public"]
