import { useEffect, useRef, useState } from "react";

const Timer = () => {
	const [timer, setTimer] = useState(0);
	const elementRef = useRef();
	useEffect(() => {
		elementRef.current = setInterval(() => {
			setTimer((prevTime) => prevTime + 1);
		}, 1000);

        return () => {
            clearInterval(elementRef.current)
        }
	}, []);
	return (
		<div>
			<p ref={elementRef}>Time : {timer} second</p>
            <button onClick={() => clearInterval(elementRef.current)}>Stop Time</button>
		</div>
	);
};

export default Timer;
