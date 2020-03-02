import React, { useContext } from "react";
import AuthContext from "../Context/auth/authContext";
import { Link } from "react-router-dom";

const Home = () => {
  const authContext = useContext(AuthContext);
  const { logout, user } = authContext;

  if (user === null) {
  } else {
    localStorage.setItem("User Data", JSON.stringify(user, ["name", "groups"]));
  }

  return user === null && !localStorage.getItem("User Data") ? (
    <div>
      <div>Spinner</div>
    </div>
  ) : JSON.parse(localStorage.getItem("User Data")).groups.length < 1 ? (
    <div className="main-content">
      <h2>
        Herzlich Willkommen {JSON.parse(localStorage.getItem("User Data")).name}
      </h2>
      <br />
      Du bist noch keiner Bubble beigetreten Suche nach Bubbles{" "}
      <Link to="/groups" style={{ textDecoration: "none" }}>
        <button
          className="btn btn-block btn-primary"
          style={{ margin: "1.5rem" }}
        >
          Search
        </button>
      </Link>
      Erstelle deine eigene Bubble
      <Link to="/createGroups" style={{ textDecoration: "none" }}>
        <button
          className="btn btn-block btn-primary"
          style={{ margin: "1.5rem" }}
        >
          Erstellen
        </button>
      </Link>
    </div>
  ) : (
    <div>
      <button onClick={logout}>LOGOUT</button>
    </div>
  );
};

export default Home;
