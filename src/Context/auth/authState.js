import React, { useReducer } from "react";
import axios from "axios";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import setAuthToken from "../../Utils/setAuthToken";
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  QUERY_RELATION_SUCCES,
  QUERY_RELATION_FAIL
} from "../types";

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem("token"),
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load User
  const loadUser = async () => {
    setAuthToken(localStorage.token);

    try {
      const res = await axios.get("http://localhost:8080/api/auth/user");

      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (err) {
      dispatch({ type: err });
    }
  };

  // Register User
  const register = async (formData, user_id) => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/register",
        formData,
        config
      );

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err
      });
    }

    window.location.reload();
  };

  const queryRelationGroupUser = async user_id => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };
    try {
      const res = await axios.post(
        "http://localhost:8080/api/groups/user/relations",
        user_id,
        config
      );

      dispatch({
        type: QUERY_RELATION_SUCCES,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: QUERY_RELATION_FAIL,
        payload: err
      });
    }
  };

  // Login User
  const login = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        formData,
        config
      );

      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data
      });

      loadUser();
    } catch (err) {
      dispatch({
        type: LOGIN_FAIL,
        payload: err
      });
    }
  };

  // Logout
  const logout = () => {
    dispatch({ type: LOGOUT });
    window.location.reload();
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        user: state.user,
        register,
        loadUser,
        login,
        logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
