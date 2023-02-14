const http = require("http");
const express = require("express");
const app = express();
const cors = require("cors");
// npm i -S formidable
const formidable = require('formidable');
const fs = require("fs");

// 크롤링
const axios = require('axios');
// cheerio를 이용한 DOM셀렉터
const cheerio = require('cheerio');
// axios 한글 깨짐 해결 하는 모듈
const iconv = require('iconv-lite');

// app.set("key", "value")  - setAttribute 용도로 사용
// app.get("key");  - getAttribute의 용도로 사용
// app.get("path", 콜백함수)  - 서버의 doGet 역할
// app.post("path", 콜백함수)  - 서버의 doPost 역할
app.set("port", 5000);

app.set("view engine", "ejs");
app.set("views", __dirname + "/template");

app.use(cors());
app.use(express.static(__dirname + "/public"));
// express의 bodyParser 미들웨어 설정 - POST요청 방식에서 파라미터를 받기 위해.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const sleep = (ms) => {
	return new Promise(resolve=>{
			setTimeout(resolve,ms)
	})
}

app.get("/", (req, res) => {
	res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
	res.write("<h1>Hello world</h1>");
	res.end();
});

// 목록
var carList = [];
for (var i = 0; i < 10; i++) {
	carList.push({ no: i + 10, name: "car name " + i, price: (1 + i) * 1000, year: 2008 + i, company: "company" + i });
}
let no = 10;
// GET 요청 처리 - SELECT 기능
app.get("/car", (req, res) => {
	console.log("GET - /car");
	res.send(carList);
});

// POST 요청 처리 - INSERT 기능
// post요청에서 파라미터를 받기위해서는 body-parser 미들웨어 필요.
// 테스트는 Post Man으로 하면 된다.
app.post("/car", (req, res) => {
	console.log("POST - /car");
	let carObj = req.body;
	carObj.no = no++;
	carList.push(carObj);
	res.send(carList);
});

// 수정기능
app.post("/car/modify", (req, res) => {
	console.log("POST - /car/modify")

	res.send(carList);
});

// 삭제기능
app.post("/car/delete", (req, res) => {
	console.log("POST - /car/delete")

	res.send(carList);
});

app.post("/saram/input", (req, res) => {
	var form = new formidable.IncomingForm();
	form.parse(req, function (err, fields, files) {
		console.log(">>>>>> (1) ", fields);
	});

	form.on("end", function () {
		console.log(">>>>>> (2) ");
		console.log("파일 갯수 : ", this.openedFiles.length);
		for (var i = 0; i < this.openedFiles.length; i++) {
			let file = this.openedFiles[i];
			//console.dir(file);
			var oldpath = file.filepath;
			var newpath = 'C:/Users/User/upload/' + file.originalFilename;
			fs.rename(oldpath, newpath, function (err) {
				if (err) throw err;
				res.writeHead(200, { "Content-Type": "text/html; charset=UTF-8" });
				res.write("<h2>upload file received!</h2>");
				res.end();
			});
		}
	});
});

app.get("/axios_get", function (req, res) {
	let getUrlVal = "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=105";
	axios.get(getUrlVal, {}, { withCredentials: true }).then((response) => {
		res.send(response.data);
	});
});

app.get('/axios_test2', (req, res) => {
	// Promise - 콜백 헬에 빠지는것을 방지(흐름제어) - 메소드체인.then([콜백])
	// Async - 리스트 형식으로 한다. [콜백, 콜백, 콜백 ...]
	let getUrlVal = "https://news.naver.com/main/main.naver?mode=LSD&mid=shm&sid1=100";
	axios.get(getUrlVal, {responseType:"arraybuffer"}).then(async(response) => {
			const htmlContent = response.data;
			let htmlCMD = iconv.decode(htmlContent,"EUC-KR").toString();
			// cheerio를 이용한 DOM셀렉터
			const $ = cheerio.load(htmlCMD);
			let cluster = $("div.list_body div.cluser a");
			console.log(cluster);
			// //#main_content > div > div._persist > div:nth-child(1) > div:nth-child(4) > div.cluster_body > ul > li:nth-child(1) > div.cluster_thumb > div > a > img
			// let imgData = $('ul > li > div.cluster_thumb > div > a > img');
			// for(var i=0, cnt=0, cnt=0; i<10; i++) {
			// 		let imgUrl = imgData[i].attribs.src
			// 		//console.log(imgUrl.split('?')[0]);
			// 		let imgDataUrl = imgUrl.split('?')[0];
			// 		//console.log(imgDataUrl);
			// 		axios.get(imgDataUrl, {responseType: 'arraybuffer'}).then( (imgRes)=>{
			// 				//console.log(imgRes.data);
			// 				fs.writeFile("./download/"+cnt+".jpg", imgRes.data, (err, data1)=>{
			// 						console.log(">>> 다운로드 완료 " + cnt++);
			// 				});
			// 		});
			// 		await sleep(100);
			// }
	});
	res.end();
});


// http와 express의 결합 - 같은 port를 공유한다.
const server = http.createServer(app);
server.listen(app.get("port"), () => {
	console.log("서버 실행 중 - http://localhost:" + app.get("port"));
});
