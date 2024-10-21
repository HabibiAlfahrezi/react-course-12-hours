import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
const Meals = () => {
	const [items, setItems] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await axios
				.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
				.catch((error) => {
					console.log(error);
				});
			console.log(response.data.meals);
			setItems(response.data.meals);
		};
		fetchData();
	}, []);

	const itemList = items.map(({ idMeal, strMeal, strMealThumb }) => {
		return (
			<section className="card" key={idMeal}>
				<img src={strMealThumb} alt={strMeal} />
				<section className="content">
					<p>{strMeal}</p>
					<p>#{idMeal}</p>
				</section>
			</section>
		);
	});
	return <div className="items-container">{itemList}</div>;
};

export default Meals;