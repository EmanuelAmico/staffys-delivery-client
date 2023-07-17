FROM node:lts-alpine
WORKDIR /app
COPY package.json /app
RUN ["npm", "install"]
COPY . /app
RUN ["npm", "run", "build"]
CMD ["npm", "start"]
EXPOSE 3000
