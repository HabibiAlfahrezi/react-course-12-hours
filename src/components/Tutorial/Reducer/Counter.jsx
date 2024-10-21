import { useReducer, useState } from "react";
import { initialState, reducer } from "./counterReducer";

const Counter = () => {
	const [state, dispact] = useReducer(reducer, initialState);
	console.log(state.count);
	const [value, setValue] = useState("");

	return (
		<div>
			<button onClick={() => dispact({ type: "increment", number: value })}>+</button>
			<button onClick={() => dispact({ type: "decrement", number: value })}>+</button>
			<p>Counter : {state.count}</p>
			<div>
				<input
					type="text"
					value={value}
					onChange={(e) => setValue(Number(e.target.value))}
				/>
			</div>
		</div>
	);
};

export default Counter;
