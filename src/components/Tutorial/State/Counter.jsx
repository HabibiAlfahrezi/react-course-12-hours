import { useState } from "react";

const Counter = () => {
	const [counter, setCounter] = useState(0);

	const handleClick = () => {
		setCounter((prevCounter) => prevCounter + 1);
	};
	return (
		<div>
			<h4>Count : {counter}</h4>
			<button onClick={handleClick}>Increment</button>
		</div>
	);
};

export default Counter;
