const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.send('<h1>Hello World!</h1><p>This is an example app</p>');
});

app.get('/profile', (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	res.end('<h1>프로필 페이지</h1><p>이름: 박준식</p><p>Birthdate: 1999년 12월 15일</p>');
});

app.get('/car', (req, res) => {
	let name = req.query.name;
	let year = req.query.year;
	console.log(name, year);
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	res.end(`<h1>자동차 목록 페이지</h1><p>기종: ${name}</p><p>연식: ${year} 년식</p>`);
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});