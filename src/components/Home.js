import useFetch from "./useFetch";
import MovieList from "./MovieList";
export default function Home() {
  const {
    data: movies,
    isPending,
    error,
  } = useFetch("http://localhost:3002/movies");
  return (
    <div className="homePage">
      <div className="heading" style={{ color: "darkred", paddingLeft: "30%" }}>
        WELCOME TO IN YOUR CINEMA
      </div>
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {movies && <MovieList movies={movies} />}
    </div>
  );
}
