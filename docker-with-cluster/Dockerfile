FROM node

# set a directory for the app
WORKDIR /usr/src/app

# copy all the files to the container
COPY . .

RUN npm install 

EXPOSE 3000

CMD ["node", "./src/index.js"]