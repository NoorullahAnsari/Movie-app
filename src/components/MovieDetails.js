import useFetch from "./useFetch";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function MovieDetails() {
  const { id } = useParams();
  const {
    data: movie,
    error,
    isPending,
  } = useFetch("http://localhost:3002/movies/" + id);
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch("http://localhost:3002/movies/" + id, {
      method: "DELETE",
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div className="card1">
      {isPending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {movie && (
        <div className="card2">
          <h1 className="mName">{movie.name}</h1>
          <div className="vgenre">{movie.genre}</div>
          <div className="vdirector">Directed by: {movie.director}</div>
          <div className="vreleased">Relesed year:{movie.released}</div>
          <button className="card-button" onClick={handleDelete}>
            Delete
          </button>

          <Link to={`/update/${movie.id}`} className="card-button">
            {" "}
            Update
          </Link>
        </div>
      )}
    </div>
  );
}

export default MovieDetails;
