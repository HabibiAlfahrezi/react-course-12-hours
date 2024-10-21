import { useState } from "react";

const TodoList = () => {
	const [todoData, setTodoData] = useState([]);
	const [todo, setTodo] = useState({
		task: "",
		time: "",

	});
    
    
	const addData = (e) => {
		e.preventDefault();
        console.log("click");
        
		const data = {
			task: todo.task,
			time: todo.time,
		};
		setTodoData((prevTodoData) => ([...prevTodoData, data]));
	};
    console.log(todo.task, todo.time);
    
	return (
		<div>
			{todoData.length === 0 ? (
				<p>No Data</p>
			) : (
				todoData.map((todoData, index) => (
					<div key={index}>
						<p>{todoData.task}</p>
						<p>{todoData.time}</p>
					</div>
				))
			)}

			<form onSubmit={addData}>
				<div>
					<label htmlFor="task">Task</label>
					<input
						type="text"
						name=""
						id="task"
						value={todo.task}
						placeholder="Enter your task"
						onChange={(e) =>
							setTodo((prevTodoData) => ({
								...prevTodoData,
								task: e.target.value,
							}))
						}
					/>
				</div>
				<br />
				<br />
				<div>
					<label htmlFor="time">Time</label>
					<input
						type="text"
						name=""
						id="time"
						value={todo.time}
						placeholder="Enter your time"
						onChange={(e) =>
							setTodo((prevTodoData) => ({
								...prevTodoData,
								time: e.target.value,
							}))
						}
					/>
				</div>
				<br />
				<br />
			<button>Add Data</button>
			</form>
		</div>
	);
};

export default TodoList;
