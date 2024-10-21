import { useRef } from "react";

const FocusInput = () => {
	const elementRef = useRef();
	console.log(elementRef);

	const focusElement = () => {
		elementRef.current.focus();
	};
	return (
		<div>
			<input type="text" ref={elementRef} />
			<button onClick={() => focusElement()}>
				Focus & Write Habibi Alfahrezi
			</button>
		</div>
	);
};

export default FocusInput;
