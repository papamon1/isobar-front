import {
  logoutSuccess,
  loginStarted,
  loginSuccess,
  loginFailure,
  getUserListStarted,
  getUserListSuccess,
  getUserListFailure,
} from "../actions/userActions";
import axios from "../../customAxios";

export const login = (values) => (dispatch, getState) => {
  dispatch(loginStarted());
  //sorry for the hardcoeded url :_)
  axios
    .post("https://isobar-backend.herokuapp.com/api/v1/users/login", {
      email: values.email,
      password: values.password,
    })
    .then((res, err) => {
      localStorage.setItem("isobar-token", res.data.token);
      return dispatch(loginSuccess(res.data));
    })
    .catch((err) => {
      return dispatch(loginFailure("Email or password incorrect"));
    });
};
export const logout = () => (dispatch, getState) => {
  localStorage.removeItem("isobar-token");
  return dispatch(logoutSuccess());
};
export const getMe = () => (dispatch, getState) => {
  axios
    .get("https://isobar-backend.herokuapp.com/api/v1/users/me")
    .then((res, err) => {
      return dispatch(loginSuccess(res.data.users));
    })
    .catch((err) => {
      localStorage.removeItem("isobar-token");
      return dispatch(logoutSuccess());
    });
};
export const checkUser = () => (dispatch, getState) => {
  const token = localStorage.getItem("isobar-token");
  if (token) {
    dispatch(getMe());
  }
};
export const getUserList = (values) => (dispatch, getState) => {
  console.log(values);
  dispatch(getUserListStarted());
  //sorry for the hardcoeded url :_)
  axios
    .get("https://isobar-backend.herokuapp.com/api/v1/users/")
    .then((res, err) => {
      console.log(res);
      return dispatch(getUserListSuccess(res.data.users));
    })
    .catch((err) => {
      return dispatch(getUserListFailure());
    });
};
