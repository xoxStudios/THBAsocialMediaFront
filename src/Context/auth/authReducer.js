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

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        user: action.payload
      };
    case REGISTER_SUCCESS:
      return {};
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        ...action.payload
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem("User Data");
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        error: action.payload,
        user: null
      };
    case QUERY_RELATION_SUCCES:
    case QUERY_RELATION_FAIL:
    default:
      return state;
  }
};
