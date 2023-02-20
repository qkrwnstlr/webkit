const http = require('http');
const express = require('express');
const cors = require('cors');

const app = express();
// process.env.PORT가 존제하면 그걸 쓰고 아니면 3000을 써라
app.set('port', process.env.PORT || 3000);
// http와 express가 같은 포트를 사용할 수 있게 합쳐준다
const server = http.createServer(app);

// app.get('property') : property 속성을 가져온다.
server.listen(app.get('port'), () => {
	console.log('listening on port ' + app.get('port'));
});

// app.get('route', 'callback') : route 경로에 get 요청이 왔을때 callback을 실행한다.
app.get('/', (req, res) => {
	res.writeHead(200, {"content-type": "text/html, charset=utf-8"});
	res.write("<h1>HOME</h1>");
	res.end();
});