// JavaScript source code
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Tyoe': 'text/html' });
    res.end('Hello World!');
}).listen(8080);

exports.myDateTime = function () { return Date(); };