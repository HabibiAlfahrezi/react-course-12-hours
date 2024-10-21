import { useState } from "react";
import "./index.css";
const Testimonial = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const testimonials = [
		{
			quote:
				"This product has completely transformed my business. Highly recommended!",
			author: "John Doe",
		},
		{
			quote:
				"Amazing experience! The customer service was exceptional, and the quality exceeded my expectations.",
			author: "Jane Smith",
		},
		{
			quote:
				"I’ve never felt more satisfied with a purchase. Absolutely worth every penny!",
			author: "Emily Johnson",
		},
		{
			quote:
				"Great product, great service. I will definitely be coming back for more!",
			author: "Michael Brown",
		},
		{
			quote:
				"A fantastic solution for my needs. The support team is quick to respond and very helpful.",
			author: "Sarah Davis",
		},
		{
			quote:
				"The results were beyond my expectations. I would recommend this to anyone looking for quality.",
			author: "David Wilson",
		},
		{
			quote:
				"Top-notch service and an incredible product. I couldn’t be happier!",
			author: "Sophia Martinez",
		},
		{
			quote:
				"This is hands down the best purchase I’ve made this year. Worth every dollar!",
			author: "James Anderson",
		},
		{
			quote:
				"Superb quality and a seamless experience from start to finish. I’m extremely satisfied.",
			author: "Isabella Thomas",
		},
		{
			quote:
				"I was hesitant at first, but this product proved to be a game changer for my workflow.",
			author: "Christopher Lee",
		},
	];

	const handlePrevClick = () => {
		setCurrentIndex(
			(currentIndex + testimonials.length - 1) % testimonials.length
		);
	};
	const handleNextClick = () => {
		setCurrentIndex((currentIndex + 1) % testimonials.length);
	};
	return (
		<div className="testimonials">
			<div className="testimonials-quote">
				{testimonials[currentIndex].quote}
			</div>

			<div className="testimonials-author">
				- {testimonials[currentIndex].author}
			</div>

			<div className="testimonials-nav">
				<button onClick={handlePrevClick}>Prev</button>
				<button onClick={handleNextClick}>Next</button>
			</div>
		</div>
	);
};

export default Testimonial;
