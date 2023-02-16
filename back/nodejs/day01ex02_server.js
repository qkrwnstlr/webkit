const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	res.writeHead(200, { "content-type": "text/html; charset=utf8" });
	res.end();
});

server.listen(3000, () => {
	console.log('listening on port 3000');
});

server.on("request", (req, res) => {
	if(read.url === "/") {
		res.write("<h1>Home</h1>");
	}
	if(read.url === "/home") {
		
	}
});