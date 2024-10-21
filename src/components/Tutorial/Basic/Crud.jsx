import { useState } from "react";

const Card = () => {
	const [friend, setFriend] = useState(["Royan", "Sarman", "Sobri"]);

	const addFriend = () => setFriend((dataTeman) => [...dataTeman, "Arif"]);
	const removeFriend = () =>
		setFriend(friend.filter((dataTeman) => dataTeman !== "Sobri"));
	const updateOneFriend = () => {
		setFriend(
			friend.map((dataFriend) =>
				dataFriend === "Royan" ? "Royan Ganteng" : dataFriend
			)
		);
	};
	return (
		<>
			<ul>
				{friend.map((dataSekarang) => {
					return <li key={Math.random()}>{dataSekarang}</li>;
				})}
			</ul>

			<button onClick={addFriend}>Add Friend</button>
			<button onClick={removeFriend}>Remove Friend</button>
			<button onClick={updateOneFriend}>Update One Friend</button>
		</>
	);
};

export default Card;
