import React, { useContext } from "react";
import Navbar from "../Components/Navigation/navbar";
import Footer from "../Components/Navigation/footer";
import AuthContext from "../Context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  const { logout } = authContext;

  return (
    <div>
      <Navbar />
      Landing <button onClick={logout}>LOGOUT</button> <Footer />
    </div>
  );
};

export default Home;
