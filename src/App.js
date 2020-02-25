import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navigation/Navbar";
import Footer from "./Components/Navigation/Footer";
import Register from "./Components/Register";
import Landing from "./Components/Landing";
import UserState from "./Context/userState";
import "./App.css";

const App = () => {
  return (
    <UserState>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
            </Switch>
          </div>
          <Footer />
        </Fragment>
      </Router>
    </UserState>
  );
};

export default App;
