import { CREATE_GROUP, GET_GROUP } from "../types";

export default (state, action) => {
  switch (action.type) {
    case CREATE_GROUP:
      return {
        ...state,
        groupGlobal: action.payload
      };
    case GET_GROUP:
      return {
        ...state,
        groups: action.payload
      };

    default:
      return state;
  }
};
