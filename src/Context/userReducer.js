import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED } from "./types";

export default (state, action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: action.payload
      };
    case REGISTER_SUCCESS:
    case REGISTER_FAIL:
    default:
      return state;
  }
};
