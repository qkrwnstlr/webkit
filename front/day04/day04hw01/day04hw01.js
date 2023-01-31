const express = require('express');

const app = express();

app.get('/', (req, res) => {
	let subject = req.query.subject;
	let writer = req.query.writer;
	let content = req.query.content;
	console.log(subject, writer, content);
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	res.end(`<h1>새로운 글</h1><p>submit: ${subject}</p><p>writer: ${writer}</p><p>content: ${content}</p>`);
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});