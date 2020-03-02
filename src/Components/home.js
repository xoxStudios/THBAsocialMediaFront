import React, { useContext } from "react";
import AuthContext from "../Context/auth/authContext";
import { Link } from "react-router-dom";

const Home = () => {
  const authContext = useContext(AuthContext);
  const { logout, user } = authContext;

  if (user === null) {
  } else {
    localStorage.setItem(
      "User Data",
      JSON.stringify(user, ["name", "groups", "_id"])
    );
  }

  return user === null && !localStorage.getItem("User Data") ? (
    <div>
      <div>Spinner</div>
    </div>
  ) : JSON.parse(localStorage.getItem("User Data")).groups.length < 1 ||
    JSON.parse(localStorage.getItem("User Data")) === undefined ? (
    <div className="main-content">
      <h2>
        Herzlich Willkommen {JSON.parse(localStorage.getItem("User Data")).name}
      </h2>
      <br />
      Du bist noch keiner Bubble beigetreten Suche nach Bubbles{" "}
      <Link to="/groups">
        <button
          className="btn btn-block btn-primary"
          style={{ margin: "1rem 0rem 2.5rem 0rem" }}
        >
          Search
        </button>
      </Link>
      oder erstelle eine Bubble
      <Link to="/groups/create">
        <button
          className="btn btn-block btn-primary"
          style={{ margin: "1rem 0rem 0rem 0rem" }}
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
