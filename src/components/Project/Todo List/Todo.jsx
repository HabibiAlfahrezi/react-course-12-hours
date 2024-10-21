import { useState } from "react";
import "./index.css";
import {v4 as uuidv4} from 'uuid'
const Todo = () => {
	const [todo, setTodo] = useState([]);
	const [input, setInput] = useState("");

	const handleSubmit = () => {
		setTodo((prevTodo) => [...prevTodo, {text : input, id: uuidv4()}]);
    setInput("")
	};

  const removeTodo = (id) => {
    setTodo((prevTodo) => prevTodo.filter((todoData) => todoData.id !== id ))
  }
	return (
		<div className="container">
			<div>
				<input
					type="text"
					placeholder="New Todo"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>

				<button onClick={handleSubmit}>Submit</button>
			</div>
			<ul className="todos-list">
				{todo.map((todoData, index) => (
					<li className="todo" key={index}>
						<span>{todoData.text}</span>
            <button className="close" onClick={() => removeTodo(todoData.id)}>X</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Todo;
