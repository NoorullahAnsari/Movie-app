import { Link } from "react-router-dom";
import logoImage from "../movieLogo.webp";

export default function Navbar() {
  return (
    <nav className="navbar">
      <img src={logoImage} alt="Logo" style={{ width: "90px" }} />
      <div className="links">
        <Link
          to="/"
          style={{
            color: "white",
            backgroundColor: "blue",
            borderRadius: "8px",
            padding: "7px 20px",
          }}
        >
          Home
        </Link>

        <Link
          to="/"
          style={{
            color: "white",
            backgroundColor: "green",
            borderRadius: "8px",
            padding: "7px 20px",
          }}
        >
          About
        </Link>

        <Link
          to="/add"
          style={{
            color: "white",
            backgroundColor: "#e65014",
            borderRadius: "8px",
          }}
        >
          Add Movie
        </Link>
        {/* <Link to='/notfound'>404</Link> */}
      </div>
    </nav>
  );
}
