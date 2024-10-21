import Accordian from "./components/Project/Accordian/Accordian";
import { accordionData } from "./data/content"
import "./components/Project/Accordian/index.css"
import {v4 as uuidv4} from "uuid"
const App = () => {
	return (
		<div className="accordian">
			{
				accordionData.map(({title, content}) => (
					<Accordian key={uuidv4} title={title} content={content}/>
				))
			}
		</div>
	);
};

export default App;
