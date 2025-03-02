import { useState } from "react";
import { MovieList } from "./MovieDataBase";
import FeaturedFilm from "./FeaturedFilm";
import MovieSideNav from "./MovieSideNav";
import "./MovieShowcase.css";

export default function MovieShowcase() {
  const [currentMovie, setCurrentMovie] = useState(MovieList[0]);

  const handleClick = (movie) => {
    console.log(currentMovie.image);
    setCurrentMovie(...movie);
  };

  return (
    <>
      <div className="tablet-showcase-container">
        <div
          className="background-container"
          style={{
            backgroundImage: `url(${currentMovie.image})`,
          }}
        >
          <MovieSideNav />
          <FeaturedFilm
            currentMovie={currentMovie}
            onClick={(x) => handleClick(x)}
          />
        </div>
      </div>
    </>
  );
}
