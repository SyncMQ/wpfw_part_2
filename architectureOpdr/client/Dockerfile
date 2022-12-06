FROM node:16-alpine

WORKDIR /app

COPY . .
RUN npm ci
CMD ["npm","run","prod"]

EXPOSE 5173


