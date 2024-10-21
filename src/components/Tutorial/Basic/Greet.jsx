
const Greet = () => {
	const userInfo = [
		{
			id: 1,
			username: "john_doe",
			email: "john.doe@example.com",
			location: "New York",
		},
		{
			id: 2,
			username: "jane_smith",
			email: "jane.smith@example.com",
			location: "Los Angeles",
		},
		{
			id: 3,
			username: "mike_jones",
			email: "mike.jones@example.com",
			location: "Chicago",
		},
		{
			id: 4,
			username: "susan_white",
			email: "susan.white@example.com",
			location: "Miami",
		},
		{
			id: 5,
			username: "david_brown",
			email: "david.brown@example.com",
			location: "Seattle",
		},
		{
			id: 6,
			username: "lisa_clark",
			email: "lisa.clark@example.com",
			location: "San Francisco",
		},
		{
			id: 7,
			username: "chris_adams",
			email: "chris.adams@example.com",
			location: "Austin",
		},
		{
			id: 8,
			username: "laura_wright",
			email: "laura.wright@example.com",
			location: "Denver",
		},
		{
			id: 9,
			username: "daniel_miller",
			email: "daniel.miller@example.com",
			location: "Boston",
		},
		{
			id: 10,
			username: "emma_wilson",
			email: "emma.wilson@example.com",
			location: "Portland",
		},
	];
	return (
		<div>
			{userInfo.map((dataUser) => (
				<div key={dataUser.id}>
					<h4>Username : {dataUser.username}</h4>
					<span>Email : {dataUser.email}</span>
					<p>Location : {dataUser.location}</p>
				</div>
			))}
		</div>
	);
};

export default Greet;
