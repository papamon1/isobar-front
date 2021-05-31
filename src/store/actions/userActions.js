import {
  LOGOUT_SUCCESS,
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_LIST_STARTED,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILURE,
} from "./actionTypes";

// logout - started
export const logoutSuccess = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
// login - started
export const loginStarted = () => {
  return {
    type: LOGIN_STARTED,
  };
};

// login - success
export const loginSuccess = (data) => {
  return {
    type: LOGIN_SUCCESS,
    payload: {
      userData: data,
    },
  };
};

// login - failure
export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    payload: {
      errorLogin: error,
    },
  };
};
// to get the list of users - started
export const getUserListStarted = () => {
  return {
    type: GET_USER_LIST_STARTED,
  };
};

// to get the list of users - success
export const getUserListSuccess = (data) => {
  return {
    type: GET_USER_LIST_SUCCESS,
    payload: {
      data,
    },
  };
};

// to get the list of users - failure
export const getUserListFailure = (error) => {
  return {
    type: GET_USER_LIST_FAILURE,
    payload: {
      error,
    },
  };
};
