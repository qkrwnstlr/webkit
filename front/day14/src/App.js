import { useState } from "react";
import Hello from "./comp_ex/Hello";
import Car from "./comp_ex/Car";
import Fish from "./comp_ex/Fish";

function App() {
  // state 선언
  const [carBrand] = useState("KIA");
  const [carName] = useState("K7");
  const [userName, setUserName] = useState("World"); // setState 함수가 실행될때 해당 useState가 선언된 곧 전체가 리랜더링됨
  const [fishes, setFishes] = useState(["오징어", "명태", "꼴뚜기"]);
  return (
    <div>
      {/* 컴포넌트 생성, 속성 = props, 자바스크립트 변수, 함수는 {}로 감싸야함 */}
      <Car brand={carBrand} name={carName}></Car>
      {/* 함수를 넘길때는 무조건 useCallback으로 감싸야 한다. */}
      <Hello name={userName} onClick={(name) => setUserName(name)}></Hello>
      {/* ... : 전개 연산자, 배열, 객체의 내부를 열어 재낌 */}
      <Fish fishes={fishes} onClick={(fish) => setFishes([...fishes, fish])}></Fish>
    </div>
  );
}

export default App;