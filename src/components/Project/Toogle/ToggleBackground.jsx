import { useState } from "react";
import "./index.css";
const ToggleBackground = () => {
	const [backgroundColor, setBackgroundColor] = useState("white");
	const [textColor, setTextColor] = useState("#1b1b1b");
	const [buttonStyle, setbuttonStyle] = useState("white");

	const handleClick = () => {
		setBackgroundColor(backgroundColor === "white" ? "#1b1b1b" : "white");
		setTextColor(textColor === "#1b1b1b" ? "#ffa31a" : "#1b1b1b");
        setbuttonStyle(backgroundColor === "white" ? '#1b1b1b' : "white")
	};
	return (
		<div style={{ backgroundColor, color: textColor }}>
			<button
				onClick={handleClick}
				style={{
					buttonStyle,
					color: textColor,
					border: `2px solid ${textColor}`,
				}}
			>
				{backgroundColor == "#1b1b1b" ? "Black Theme" : "White Theme"}
			</button>

			<section className="content">
				<h1>
					Welcome To A <br />
					Real World...
				</h1>
			</section>
		</div>
	);
};

export default ToggleBackground;
