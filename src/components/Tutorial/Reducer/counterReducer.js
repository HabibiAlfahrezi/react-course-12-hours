const initialState = { count: 0 };

const reducer = (state, action) => {
	switch (action.type) {
		case "increment":
			return { ...state, count: state.count + action.number };
		case "decrement":
			return { ...state, count: state.count - action.number };

		default:
			break;
	}
};

export {initialState, reducer}
