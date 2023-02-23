const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
// process.env.PORT가 존제하면 그걸 쓰고 아니면 3000을 써라
app.set('port', process.env.PORT || 3000);

// ejs view engine(템플릿 엔진) 설정 -> res.render({filename})을 실행하면 prefix/{filename}.suffix를 렌더링함
app.set("views", __dirname + "/views"); // prefix, 경로
app.set('view engine', 'ejs'); // suffix, 확장자

// bodyParser 미들웨어 설정
// application/json
app.use(express.json());
// application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// 사용자 정의 미들웨어 : 일종의 필터
// * : 모든 요청에 대해 응답, default, * 대신 경로를 넣으면 해당 경로에 대한 요청에만 적용됨
app.use("*", (req, res, next) => {
	console.log(req.url);
	next(); // 미들웨어 실행 후 다음 동작 실행
});
app.use("/todoList", (req, res, next) => {
	console.log(req.method);
	next();
});

// static middleware : 특정 폴더의 파일들에 접근 가능
app.use(express.static(__dirname + "/public"));

// http와 express가 같은 포트를 사용할 수 있게 합쳐준다
const server = http.createServer(app);


// app.get('property') : property 속성을 가져온다.
server.listen(app.get('port'), () => {
	console.log('listening on port ' + app.get('port'));
});

// app.get('route', 'callback') : route 경로에 get 요청이 왔을때 callback을 실행한다.
app.get('/', (req, res) => {
	res.writeHead(200, { "content-type": "text/html, charset=utf-8" });
	res.write("<h1>HOME</h1>");
	res.end();
});

const carList = [
	{ no: 1, title: "SONATA", price: 3000, company: "HYUNDAI", year: 2022 },
	{ no: 2, title: "GRANDEUR", price: 4000, company: "HYUNDAI", year: 2019 },
	{ no: 3, title: "K9", price: 7000, company: "KIA", year: 2020 }
];

/** res.render
 * route/middleware 내부 레벨만 렌더링 가능
 * 전송은 자동으로 하고, 3번째 파라미터(callback)를 사용하여 에러등에 대한 이후 동작 지정 가능
 * 메일 전송 가능
 * res.render는 app.render를 기반으로 작동함
 **/
/** app.render
 * route 레벨도 렌더링 가능
 * callback에서 html만 반환 가능
 * 메일 전송 불가능
 **/
app.get('/car', (req, res) => {
	// res.render('car');
	let user = { userName: "홍길동" };
	req.app.render('car', { user, carList }, (err, html) => {
		if (err) console.log(err);
		res.end(html);
	});
})

let no = 0;
function todoItem(event) {
	return { no: ++no, event: event, isDone: false };
}

const todoList = [
	todoItem('밥먹기'),
	todoItem('잠자기'),
	todoItem('집가기'),
];

app.get('/todoList', (req, res) => {
	req.app.render('todoList', { todoList }, (err, result) => {
		if (err) { console.log(err); }
		res.end(result);
	});
});

app.post('/todoList', (req, res) => {
	todoList.push(todoItem(req.body.newTodoEvent));
	res.redirect("/todoList");
});

app.put('/todoList', (req, res) => {
	for (var i = 0; i < todoList.length; i++) {
		if (todoList[i].no == req.body.no) {
			todoList[i] = req.body;
		}
	}
	res.send("/todoList");
});

app.delete('/todoList', (req, res) => {
	for (var i = 0; i < todoList.length; i++) {
		if (todoList[i].no == req.body.no) {
			todoList.splice(i, 1);
			break;
		}
	}
	res.send("/todoList");
});