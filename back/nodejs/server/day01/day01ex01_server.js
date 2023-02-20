const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	res.writeHead(200, { "content-type": "text/html; charset=utf8" });
	if(req.url === "/") {
		res.write("<h2>Home</h2> <a href='/profile'>Profile</a>");
	} else if(req.url === "/profile" ) {
		res.write("<h2>Profile</h2> <a href='/'>Home</a>");
	}
	res.end();
});

server.listen(3000, () => {
	console.log('listening on port 3000');
});

server.on("request", (req, res) => {
	var data = fs.readFileSync("./package.josn", "utf8");
	console.log(data);
	res.end(data);
});