import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../Context/auth/authContext";
import logo from "../../media/image/logo/BubbleLogoGroß.png";

const Register = props => {
  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }

    if (error === "User already exists") {
      console.log(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: ""
  });

  const { name, email, password, password2 } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      console.log("Please enter all fields", "danger");
    } else if (password !== password2) {
      console.log("Passwords do not match", "danger");
    } else {
      register({
        name,
        email,
        password
      });
    }
  };

  return (
    <div className="content-wrapper">
      <img className="login-logo" src={logo} alt="logo" />
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={onChange}
              required
              placeholder="Name"
            />
          </div>
          <div className="form-group">
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={onChange}
              required
              placeholder="Email Address"
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
              minLength="6"
              placeholder="Password"
            />
          </div>
          <div className="form-group">
            <input
              id="password2"
              type="password"
              name="password2"
              value={password2}
              onChange={onChange}
              required
              minLength="6"
              placeholder="Confirm Password"
            />
          </div>
          <input
            type="submit"
            value="Register"
            className="btn btn-primary btn-block"
          />
        </form>
      </div>
    </div>
  );
};

export default Register;
