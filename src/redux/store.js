import { createStore, combineReducers, applyMiddleware } from "redux";
import user from "./reducers/user";
import todo from "./reducers/todo";
import dashboard from "./reducers/dashboard";
import thunk from "redux-thunk";

const reducer = combineReducers({
  user,
  todo,
  dashboard,
});

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
