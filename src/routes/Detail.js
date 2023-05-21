import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [movie, setMovie] = useState("");
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    console.log(json.data.movie);
  };
  useEffect(() => {
    getMovie();
  });
  return (
    <div>
      <img src={movie.large_cover_image} alt={movie.title} />
      <h1>{movie.title}</h1>
      <span>{movie.year}</span>
      <div>Rating: {movie.rating}</div>
      <p>{movie.description_full}</p>
      <ul>
        {movie.genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
    </div>
  );
}

export default Detail;
