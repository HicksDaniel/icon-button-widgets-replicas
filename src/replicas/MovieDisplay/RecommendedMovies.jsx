import { MovieList } from "./MovieDataBase";
import "./RecommendedMovies.css";

export default function RecommendedMovies({ onClick }) {
  const renderedList = MovieList.map((m, index) => {
    return (
      <div
        onClick={() => onClick([m])}
        key={index}
        className="recommended-movies-container"
        style={{
          backgroundImage: `url(${m.image})`,
          backgroundSize: "cover",
          backgroundPosition: "-28px",
        }}
      ></div>
    );
  });

  return renderedList;
}
