import * as actionTypes from "../reducers/ActionTypes";

export const userInfo = (info) => async (dispatch) => {
  dispatch({ type: actionTypes.SET_USER_INFO, payload: info });
};
