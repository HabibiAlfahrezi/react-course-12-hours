
const Cart = ({ items }) => {
	console.log(items.length);

	return (
		<div>
			<h1>Cart 🛒</h1>
			{items.length > 0 && (
				<div>
					<h2>You have {items.length} items on your cart</h2>
					<p>List of the items is : </p>
					<div>
						{items.map((dataItems) => (
							<>
								<hr />
								<h4>Items Name: {dataItems.name}</h4>
								<span>Price : {dataItems.price}</span>
								<p>Quantity : {dataItems.quantity}</p>
								<hr />
							</>
						))}
					</div>
				</div>
			)}

			{(items.length === 0 || items.length === null) && (
				<div>
					<h2>Item kamu tidak ada cik</h2>
				</div>
			)}
		</div>
	);
};

export default Cart;
