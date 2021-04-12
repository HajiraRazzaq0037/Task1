import { SET_USER_INFO } from "./ActionTypes";
// import { getItem, setItem } from "../../utils/functions";

const INITIAL_STATE = {
  userInfo: null,
};
const clubReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_INFO: {
      // setItem("userInfo", action.payload);
      return {
        ...state,
        userInfo: action.payload,
      };
    }
    default:
      return state;
  }
};

export default clubReducer;
