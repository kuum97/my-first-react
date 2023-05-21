import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail() {
  const [movie, setMovie] = useState(null);
  const { id } = useParams();

  const getMovie = async () => {
    try {
      const response = await fetch(
        `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
      );
      const json = await response.json();
      if (json.status === "ok") {
        setMovie(json.data.movie);
        console.log(json.data.movie);
      } else {
        console.error("Invalid API response:", json);
      }
    } catch (error) {
      console.error("Error fetching movie:", error);
    }
  };

  useEffect(() => {
    getMovie();
  });

  if (!movie) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.container}>
      <img
        className={styles.movie_cover}
        src={movie.large_cover_image}
        alt={movie.title}
      />
      <div className={styles.movie_detail}>
        <h1>{movie.title}</h1>
        <span>Year : {movie.year}</span>
        <span>Rating : {movie.rating}</span>
        <p>
          {movie.description_full > 1500
            ? `${movie.description_full.slice(0, 1500)}...`
            : movie.description_full}
        </p>
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Detail;
