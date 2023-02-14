import { useState } from "react";

// 컴포넌트 선언
function Hello(props) {
	const [inputUserName, setInputUserName] = useState(props.name);
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <input id="name" onChange={(e) => setInputUserName(e.target.value)}></input> <br/>
			<button onClick={() => props.onClick(inputUserName)}>이름 바꾸기</button>
    </div>
  );
}

export default Hello;