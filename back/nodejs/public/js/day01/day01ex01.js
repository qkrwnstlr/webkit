console.log("hello world!");

function task(fullfilled, rejected) {
	console.log("task started");
	setTimeout(function () {
		console.log("task finished");
		// fullfilled("실행 결과 값");
		rejected("에러 값");
	}, 1000);
}

function fullfilled(result) {
	console.log("fullfilled >>> ", result);
}

function rejected(error) {
	console.log("rejected >>> ", error);
}

new Promise(task).then(fullfilled, rejected);