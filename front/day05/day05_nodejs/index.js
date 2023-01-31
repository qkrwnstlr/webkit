const express = require('express');
const app = express();

var carList = [];

// public을 외부에서도 접근할 수 있도록 static 설정
app.use(express.static('public'));

app.get('/car/input', (req, res) => {
	/*var name = req.query.name;
	var price = req.query.price;
	var company = req.query.company;
	var year = req.query.year;
	console.log(name, price, company, year);
	res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
	res.end(`${name}, ${price}, ${company}, ${year}`); // 문자열만 전송*/
	req.query.no = carList.length + 1;
	carList.push(req.query);
	res.send(carList); // obeject 전송
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000!');
});

