import React from "react";

const Product = ({name, price}) => {
	return (
		<div>
			<h4>Product</h4>
            <h2>Name : {name} </h2>
            <p>Price : {Number(price).toLocaleString("en-US")}</p>
		</div>
	);
};

export default Product;
