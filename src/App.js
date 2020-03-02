import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./Components/Auth/register";
import Login from "./Components/Auth/login";
import Home from "./Components/home";
import GroupsCreate from "./Components/groupsCreate";
import Groups from "./Components/groups";
import AuthState from "./Context/auth/authState";
import GroupState from "./Context/group/groupState";
import PrivateRoute from "./Components/routing/privateRoute";
import "./App.css";

const App = () => {
  return (
    <AuthState>
      <GroupState>
        <Router>
          <Fragment>
            <div className="container">
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <PrivateRoute exact path="/groups" component={Groups} />
                <PrivateRoute
                  exact
                  path="/createGroups"
                  component={GroupsCreate}
                />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </GroupState>
    </AuthState>
  );
};

export default App;
