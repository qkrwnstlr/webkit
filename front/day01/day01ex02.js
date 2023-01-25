// id 속성이 clickBtn인 요소의 DOM, id가 같은 요소는 하나 뿐이다, 다양한 요소가 같은 id를 공유하고 싶으면 class를 사용하여야 한다.
var clickBtn = document.getElementById("clickBtn");
// DOM이 선택되었는지 확인
console.log(clickBtn);
console.dir(clickBtn);
// 선택된 DOM 요소에 이벤트 핸들러 걸기
clickBtn.onclick = function(event) {
	console.log(event);
	document.bgColor = "yellow";
	document.title = "Hello";
};
// 함수도 객체로 매핑할 수 있는 요소이다