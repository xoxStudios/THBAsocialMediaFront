import React, { useContext, useState, useEffect } from "react";
import Navbar from "../Components/Navigation/navbar";
import Footer from "../Components/Navigation/footer";
import AuthContext from "../Context/auth/authContext";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Home = props => {
  const authContext = useContext(AuthContext);
  const { logout, loadUser, user, loading } = authContext;
  const [userData, setUserData] = useState(0);

  useEffect(() => {
    if (user === null) {
      console.log("No User Data");
    } else {
      setUserData(user);
      const localUserData = JSON.stringify(user);
      localStorage.setItem("User Data", localUserData);
    }
  }, [user]);

  return user === null ? (
    <div>
      <Navbar />
      <div>Spinner</div>
      <Footer />
    </div>
  ) : user.groups.length < 1 ? (
    <Router>
      <div>
        <Navbar />
        Du bist noch keiner Bubble beigetreten Suche nach Bubbles{" "}
        <Link to="/user/groups" style={{ textDecoration: "none" }}>
          <button
            className="btn btn-link btn-secondary"
            style={{ marginTop: "2rem" }}
          >
            Search
          </button>
        </Link>
        Erstelle deine eigene Bubble
        <Link to="/groups/create" style={{ textDecoration: "none" }}>
          <button
            className="btn btn-link btn-secondary"
            style={{ marginTop: "2rem" }}
          >
            Erstellen
          </button>
        </Link>
        <button onClick={logout}>LOGOUT</button>
        <Footer />
      </div>
    </Router>
  ) : (
    <div>
      <Navbar />
      <button onClick={logout}>LOGOUT</button>
      <button onClick={loadUser}>LOAD</button>
      <Footer />
    </div>
  );
};

export default Home;
