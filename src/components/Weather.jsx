import React from "react";

const Weather = ({ suhu }) => {
	if (suhu <= 15) {
		return <h1>Its cold outside</h1>;
	} else if (suhu >= 15 && suhu <= 25) {
		return <h1>Its nice outside</h1>;
	} else {
        return <h1>Its hot outside</h1>
    }
};

export default Weather;
