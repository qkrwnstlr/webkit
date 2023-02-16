import { useSelector, useDispatch } from 'react-redux';
import AgeType from './AgeType';

function AgeController() {
	const age = useSelector((state) => state.ageReducer.age);
	const dispatch = useDispatch((state) => {
		console.log(state);
		return state.ageReducer;
	});

	return (
		<fieldset>
			<h3>age Controller</h3>
			<input type="number" value={age} onChange={(e) => dispatch({ type: AgeType.CHANGE, age: e.target.value })}></input>
			<button onClick={() => {
				dispatch({ type: AgeType.PLUS });
			}}>증가</button>
			<button onClick={() => {
				dispatch({ type: AgeType.MINUS });
			}}>감소</button>
		</fieldset>
	);
}

export default AgeController;
