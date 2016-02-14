/**
 * A simple ExpressJS server app
 */

'use strict';

var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var server = http.createServer(app);

var __dirname = 'src';
app.use(express.static(__dirname));
app.all('/*', function(req, res, next) {
    // Just send the index.html for other files to support HTML5Mode
    res.sendFile('index.html', { root: __dirname });
});

server.listen(8001);
server.on('listening', function() {
    console.log('Express server started on port %s at %s', server.address().port);
});
