const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
// npm install --save formidable
// https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=scw0531&logNo=221159117976
const formidable = require('formidable'); // form-data 형식 통신(텍스트 외의 파일을 업로드)을 위한 모듈 
const fs = require('fs'); // 파일 입출력

// body-parser 설치 : npm install body-parser --save
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// app.set("key", "value")  - setAttribute 용도로 사용
// app.get("key");  - getAttribute의 용도로 사용
// app.get("path", 콜백함수)  - 서버의 doGet 역할
// app.post("path", 콜백함수)  - 서버의 doPost 역할
app.set("port", 3000);

app.set("view engine", "ejs");
app.set("views", __dirname + "/template");

app.use(cors());
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
	res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
	res.write("<h1>Hello world</h1>");
	res.end();
});

var carList = [];
for (var i = 0; i < 10; i++) {
	carList.push({ no: i, name: "car name" + i, price: 1000 * i + "만원", year: 2008 + i, company: "company" + i });
}

app.get("/car", (req, res) => {
	res.send(carList);
});

app.post("/car", (req, res) => {
	var newCar = req.body;
	newCar.no = carList.length;
	carList.push(newCar);
	res.send(carList);
});


// 수정기능
app.put("/car", (req, res) => {
	for (var i = 0; i < carList.length; i++) {
		if (carList[i].no == req.body["no"]) {
			carList[i] = req.body;
			console.log(carList[i]);
			break;
		}
	}
	res.send(carList);
});

// 삭제기능
app.delete("/car", (req, res) => {
	for (var i = 0; i < carList.length; i++) {
		if (carList[i].no == req.body["no"]) {
			carList = carList.filter(function (car) {
				return car.no != parseInt(req.body["no"]);
			});
			break;
		}
	}
	res.send(carList);
});


// http와 express의 결합 - 같은 port를 공유한다.
const server = http.createServer(app);
server.listen(app.get("port"), () => {
	console.log("서버 실행 중 - http://localhost:" + app.get("port"));
});