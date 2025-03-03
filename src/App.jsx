import "./App.css";
import FetchMovies from "./replicas/MovieDisplay/FetchMovies";

import MovieShowcase from "./replicas/MovieDisplay/MovieShowcase";

function App() {
  return (
    <>
      <MovieShowcase />
      <FetchMovies />
    </>
  );
}

export default App;
