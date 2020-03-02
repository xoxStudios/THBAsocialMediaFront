import React, { useReducer } from "react";
import axios from "axios";
import GroupContext from "./groupContext";
import groupReducer from "./groupReducer";
import { CREATE_GROUP, GET_GROUP } from "../types";

const GroupState = props => {
  const initialState = {
    groupGlobal: null,
    groups: [],
    current: null,
    error: null
  };

  const [state, dispatch] = useReducer(groupReducer, initialState);

  const getGroup = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.get("http://localhost:8080/api/groups", config);

      dispatch({
        type: GET_GROUP,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        payload: err
      });
    }
  };

  const createGroup = async formData => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.post(
        "http://localhost:8080/api/groups",
        formData,
        config
      );

      dispatch({
        type: CREATE_GROUP,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        payload: err
      });
    }
  };

  return (
    <GroupContext.Provider
      value={{
        groupGlobal: state.groupGlobal,
        current: state.current,
        error: state.error,
        createGroup,
        getGroup
      }}
    >
      {props.children}
    </GroupContext.Provider>
  );
};

export default GroupState;
