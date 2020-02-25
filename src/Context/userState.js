import React, { useReducer } from "react";
import axios from "axios";
import UserContext from "./userContext";
import userReducer from "./userReducer";
import { REGISTER_SUCCESS, REGISTER_FAIL } from "./types";

const UserState = props => {
  const initialState = {
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(userReducer, initialState);

  const register = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post("/api/v1/users", formData, config);

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.response.data.msg
      });
    }
  };

  return (
    <UserContext.Provider
      value={{
        loading: state.loading,
        user: state.user,
        error: state.error,
        register
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserState;
