import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddMovie() {
  const [name, setMname] = useState("");
  const [genre, setGenre] = useState("");
  const [director, setDirector] = useState("");
  const [released, setReleased] = useState("");
  const navigate = useNavigate();

  const movie = { name, genre, director, released };

  const handleSubmit = () => {
    fetch("http://localhost:3002/movies", {
      method: "POST",
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
      <h1 className="heading" style={{ color: "red" }}>
        Add a movie
      </h1>
      <div
        className="formDiv"
        style={{ backgroundColor: "lightblue", padding: "20px" }}
      >
        <form onSubmit={handleSubmit}>
          <lable>Movie name:</lable>
          <input
            className="inputbox"
            type="text"
            required
            value={name}
            onChange={(e) => setMname(e.target.value)}
          />
          <br />
          <lable>Genre:</lable>
          <br />
          <input
            className="inputbox"
            type="text"
            required
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
          />
          <br />
          <lable>Director:</lable>
          <br />
          <input
            className="inputbox"
            type="text"
            required
            value={director}
            onChange={(e) => setDirector(e.target.value)}
          />
          <br />
          <lable>Released year:</lable>
          <br />
          <input
            className="inputbox"
            type="text"
            required
            value={released}
            onChange={(e) => setReleased(e.target.value)}
          />
          <br />

          <button className="bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  focus:outline-none focus:shadow-outline">
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
