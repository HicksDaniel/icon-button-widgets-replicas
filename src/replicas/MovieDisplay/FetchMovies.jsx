export default function FetchMovies() {
  const fetchTheFuckingMovie = async () => {
    const url =
      "https://api.themoviedb.org/3/search/multi?query=John+Wick&include_adult=false&language-en-US&region-US&page=1&media_type=movie&with_runtime.gte=60";

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0M2Y5NjdmNzFhY2M0ZmQ0OTRlOWUwYmFjYjZhNmI4NCIsIm5iZiI6MTc0MDgzODk0Ny4yNjcsInN1YiI6IjY3YzMxODIzYjU0OTBhZDVhNzNmNjE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._mPLDxg07Lqf98DK4IL6mcYu_jThvCBGcUGhZqVSUoA",
      },
    };

    fetch(url, options)
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.error(err));
  };
  return (
    <div onClick={() => fetchTheFuckingMovie("Indiana Jones")}>FetchMovies</div>
  );
}
