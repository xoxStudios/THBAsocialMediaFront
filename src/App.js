import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Components/Auth/register";
import Login from "./Components/Auth/login";
import Home from "./Components/home";
import Navbar from "./Components/Navigation/navbar";
import Footer from "./Components/Navigation/footer";
import GroupsCreate from "./Components/groupsCreate";
import Groups from "./Components/groups";
import AuthState from "./Context/auth/authState";
import GroupState from "./Context/group/groupState";
import PrivateRoute from "./Components/routing/privateRoute";
import "./App.css";

const App = props => {
  return (
    <AuthState>
      <GroupState>
        <Router>
          <Fragment>
            <div className="container">
              <PrivateRoute component={Navbar} />
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/groups" component={Groups} />
                <PrivateRoute
                  exact
                  path="/groups/create"
                  component={GroupsCreate}
                />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
              <PrivateRoute component={Footer} />
            </div>
          </Fragment>
        </Router>
      </GroupState>
    </AuthState>
  );
};

export default App;
