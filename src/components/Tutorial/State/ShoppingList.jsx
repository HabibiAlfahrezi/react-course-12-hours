import { useState } from "react";

const ShoppingList = () => {
	const [shoppingItem, setShoppingItem] = useState([]);
	const [form, setForm] = useState({
		name: "",
		quantity: "",
	});

	console.log(shoppingItem);
	return (
		<div>
			<p>Cart List</p>

			{shoppingItem.map((cart, index) => {
				return (
					<div key={index}>
						<h2>{cart.name}</h2>
						<p>{cart.quantity}</p>
					</div>
				);
			})}

			<form
				onSubmit={(e) => {
					e.preventDefault();

					const data = {
						name: form.name,
						quantity: form.quantity,
					};

					setShoppingItem((cart) => [...cart, data]);
				}}
			>
				<div>
					<input
						type="text"
						placeholder="name"
						value={form.name}
						onChange={(e) => setForm({ ...form, name: e.target.value })}
					/>
				</div>
				<div>
					<input
						type="text"
						placeholder="quantity"
						value={form.age}
						onChange={(e) => setForm({ ...form, quantity: e.target.value })}
					/>
				</div>
				<br />
				<button type="Submit">Submit</button>
			</form>
		</div>
	);
};

export default ShoppingList;
