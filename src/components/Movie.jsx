import { useState } from "react";

const Movie = () => {
	const [movie, setMovie] = useState([
    {
      id: 1,
      title: "Spiderman dekat di rumah",
      rating: 10,
    },
    {
      id: 2,
      title: "Spiderman jauh di rumah",
      rating: 11,
    }
  ]);

	const handleClick = () => {
		setMovie(movie.map((dataMovie) => dataMovie.id === 1 ? {...dataMovie, title: "Superman dekat di rumah"} : dataMovie))
	};

 
	return (
		<div>
			<div>
        {
          movie.map((dataMovie, index) => (
            <div key={index}>
              <p>{dataMovie.title}</p>
              <span>{dataMovie.rating}</span>
            </div>
          ))
        }
      </div>
			<button onClick={handleClick}>Change Movie</button>
		</div>
	);
};

export default Movie;
