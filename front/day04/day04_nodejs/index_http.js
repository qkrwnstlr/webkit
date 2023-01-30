/*
	nodeJs : es6문법 + 기존 자바스크립트 문법
	실행 : node 파일명
*/

/* Node.js 튜토리얼 :  https://www.w3schools.com/nodejs/default.asp */
/* package.json 만들기 : mpn init -y */
/*
	모듈 설치하면 package.json의 dependencies에 추가됨
	express 모듈 설치 : npm install --save express 
	cors 모듈 설치 : npm i -S cors
*/

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello NodeJs World!'); // 없으면 무한 루프에 갇힘
});

server.listen(3000, () => {
	console.log("node server is running on port 3000");
}); // 포트번호 설정
