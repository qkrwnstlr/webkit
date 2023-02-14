import { useState } from "react";

function Fish(props) {
	const [tempFish, setTempFish] = useState(""); // 초기화 안되어있으면 input.value에 넣고 onChange에서 변경되면 undefined 에러 발생함
	return (
		// <></> 빈 태그는 아무 의미 없고 그냥 묶어주기만 함, react에서 return은 항상 하나만 할수 있기에 묶어야 할 필요가 있음
		<>
			<ul>{props.fishes.map((fish, index) => { return <li key={index}>{fish}</li> })}</ul>
			<input id="name" value={tempFish} onChange={(e) => setTempFish(e.target.value)}></input> <br />
			<button onClick={() => { props.onClick(tempFish); setTempFish(""); }}>물고기 추가</button>
		</>
	);
}

export default Fish;