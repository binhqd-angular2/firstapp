FROM node:4.2.4

RUN npm install gulp -g
RUN npm install -g mocha
RUN mkdir /src

WORKDIR /src
ADD /gulp /src/gulp
ADD /src /src/src
ADD package.json /src/package.json
RUN npm install

ENV NODE_ENV development 
ADD gulpfile.js /src/gulpfile.js
ADD config.json /src/config.json

EXPOSE 8001

CMD gulp serve
CMD node web/app.js
