import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function UpdateMovie() {
  const { id } = useParams();
  const { data: movie } = useFetch("http://localhost:3002/movies/" + id);

  const [name, setMname] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [released, setReleased] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (movie) {
      setMname(movie.name);
      setGenre(movie.genre);
      setDirector(movie.director);
      setReleased(movie.released);
    }
  }, [movie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const movie = { name, genre, director, released };
    fetch("http://localhost:3002/movies/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(movie),
    })
      .then((res) => {
        res.json();
      })
      .then(navigate("/"));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      {movie && (
        <div>
          <h1 className="heading">Update movie</h1>
          <form onSubmit={handleSubmit}>
            <lable>Movie name:</lable>
            <input
              className="inputbox"
              type="text"
              defaultValue={movie.name}
              onChange={(e) => setMname(e.target.value)}
            />
            <br />
            <lable>Genre:</lable>
            <input
              className="inputbox"
              type="text"
              defaultValue={movie.genre}
              onChange={(e) => setGenre(e.target.value)}
            />
            <br />
            <lable>Director:</lable>
            <input
              className="inputbox"
              type="text"
              defaultValue={movie.Directortor}
              onChange={(e) => setDirector(e.target.value)}
            />
            <br />
            <lable>Released year:</lable>
            <input
              className="inputbox"
              type="number"
              defaultValue={movie.released}
              onChange={(e) => setReleased(e.target.value)}
            />

            <br />
            <button className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Update
            </button>
            <Link to={`/movies/${movie.id}`}>Back</Link>
          </form>
        </div>
      )}
    </div>
  );
}
