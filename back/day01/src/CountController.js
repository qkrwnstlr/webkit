import { useSelector, useDispatch } from 'react-redux';
import CountType from './CountType';

function CountController() {
	const count = useSelector((state) => state.countReducer.count);
	const dispatch = useDispatch();

	return (
		<fieldset>
			<h3>count Controller</h3>
			<input type="number" value={count} onChange={(e) => dispatch({ type: CountType.CHANGE, count: e.target.value })}></input>
			<button onClick={() => {
				dispatch({ type: CountType.PLUS });
			}}>증가</button>
			<button onClick={() => {
				dispatch({ type: CountType.MINUS });
			}}>감소</button>
		</fieldset>
	);
}

export default CountController;
