import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers/userReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const reducers = combineReducers({
  users: userReducer,
});

export default createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunk))
);
