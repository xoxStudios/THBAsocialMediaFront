import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../Context/auth/authContext";
import logo from "../../media/image/logo/BubbleLogoGroß.png"

const Login = props => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "Invalid Credentials") {
      console.log(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const { email, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (email === "" || password === "") {
      console.log("Please fill in all fields", "danger");
    } else {
      login({
        email,
        password
      });
    }
  };

  return (
    <div className="content-wrapper">
        <img className="login-logo" src={logo} alt="logo"/>
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
              placeholder="E-Mail"
            />
          </div>
          <div className="form-group">
            <input
              id="password"
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              required
              placeholder="Password"
            />
          </div>
          <input
            type="submit"
            value="Sign Up"
            className="btn btn-block btn-primary"
          />
        </form>
      </div>
      <button className="btn btn-link btn-secondary"style={{marginTop:"2rem"}} >
          Sign In
        </button>
    </div>
  );
};

export default Login;
