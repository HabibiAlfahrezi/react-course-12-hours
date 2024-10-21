import Nav from "./Navigation/Nav";
import Product from "./Products/Product";
import Recommended from "./Recommended/Recommended";
import "./AdvanceFiltering.css";
import Sidebar from "./Sidebar/Sidebar";
import { useState } from "react";
import dataProduct from "./data/dataProduct";

const AdvanceFiltering = () => {
	const [selectedCategory, setSelectedCategory] = useState(null);

	const [query, setQuery] = useState("");

	const handleInputChange = (e) => {
		setQuery(e.target.value);
	};

	const filteredItems = dataProduct.filter((product) =>
		product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase() !== -1)
	);

	return (
		<>
			<Sidebar />
			<Nav />
			<Recommended />
			<Product />
		</>
	);
};

export default AdvanceFiltering;
