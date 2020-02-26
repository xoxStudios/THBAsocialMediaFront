import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/home";
import Register from "./Components/Auth/register";
import Login from "./Components/Auth/login";
import AuthState from "./Context/auth/authState";
import PrivateRoute from "./Components/routing/privateRoute";
import "./App.css";

const App = () => {
  return (
    <AuthState>
      <Router>
        <Fragment>
          
          <div className="container">
            <Switch>
              <PrivateRoute exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
            </Switch>
          </div>
          
        </Fragment>
      </Router>
    </AuthState>
  );
};

export default App;
