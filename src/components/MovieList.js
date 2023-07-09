import { Link } from "react-router-dom";

export default function MovieList({ movies }) {
  return (
    <div className="moviesList">
      {movies.map((movie) => (
        <div className="cards" key={movie.id}>
          <Link to={`/movies/${movie.id}`}>
            <div className="container">
              <h2 className="movieName"> {movie.name}</h2>
              <p className="genre"> Genre : {movie.genre}</p>
              <h4 className="director"> Director : {movie.director}</h4>
              <h4 className="released"> Year : {movie.released}</h4>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}
