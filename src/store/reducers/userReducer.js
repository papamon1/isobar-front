import axios from "axios";
import {
  LOGIN_STARTED,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  GET_USER_LIST_STARTED,
  GET_USER_LIST_SUCCESS,
  GET_USER_LIST_FAILURE,
} from "../actions/actionTypes";

// define initial state of user
const initialState = {
  userList: null,
  user: null,
  loading: false,
  error: null,
};

// update store based on type and payload and return the state
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST_STARTED:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_LIST_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        userList: data,
        loading: false,
      };
    case GET_USER_LIST_FAILURE:
      const { error } = action.payload;
      return {
        ...state,
        error,
      };
    case LOGIN_STARTED:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      const { userData } = action.payload;
      return {
        ...state,
        user: userData,
        loading: false,
      };
    case LOGIN_FAILURE:
      const { errorLogin } = action.payload;
      return {
        ...state,
        error: errorLogin,
      };
    default:
      return state;
  }
};

export default userReducer;
