import { useSelector } from 'react-redux';

function StateView() {
  const count = useSelector((state) => {
    return state.countReducer.count;
  });
  const age = useSelector((state) => {
    return state.ageReducer.age; 
  });

  return (
    <>
      <p>count : {count}</p>
      <p>age : {age}</p>
    </>
  )
}

export default StateView;