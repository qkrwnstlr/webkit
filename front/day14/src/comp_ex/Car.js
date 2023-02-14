// 구조 분해 할당 : 객체나 리스트의 요소를 바로 사용, 변수명으로만 매칭됨(없으면 undefinded)
function Car({ name, brand }) {
  return <h1>I am a {brand} {name}</h1>
}

export default Car;