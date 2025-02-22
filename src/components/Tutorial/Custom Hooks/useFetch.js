import { useEffect, useState } from "react";

const useFetch = (endPoint) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch(endPoint)
			.then((response) => response.json())
			.then((data) => setData(data));
	});

    return [data]
};

export default useFetch;
