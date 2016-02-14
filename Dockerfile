FROM node:5.5.0

RUN npm install gulp -g
RUN npm install -g mocha
RUN mkdir /src

WORKDIR /src
ADD /gulp /gulp
ADD /src /src/src
ADD /app /src/app
ADD /typings /src/typings
ADD /index.html /src/index.html
ADD package.json /src/package.json
ADD typings.json /src/typings.json
ADD bs-config.json /src/bs-config.json

RUN npm install

ADD gulpfile.js /src/gulpfile.js
ADD config.json /src/config.json

EXPOSE 8001

CMD npm start
