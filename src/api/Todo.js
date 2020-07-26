import axios from "axios";
import config from "../config.json";
import {
  startAddTodo,
  successAddTodo,
  errorEndpointTodo,
  clearTodo,
  startGetTodo,
  successGetTodo,
  startCompleteTodo,
  successCompleteTodo,
  startDeleteTodo,
  successDeleteTodo,
} from "../redux/actions/todo";
import { userLogout } from "../redux/actions/user";

const url = config.endpoint;
const invalidToken = config.invalidTokenErrorMessage;
const missingJWT = config.missingJWTErrorMessage;

export const callAddToDo = (payload) => {
  return (dispatch) => {
    dispatch(startAddTodo());    
    return axios({
      headers: {
        "Content-Type": "application/json",
        "access-token": payload.authToken,
      },
      method: "post",
      url: `${url}tasks/add`,
      data: JSON.stringify({
        text: payload.toDo.todo,
        dueDate: payload.toDo.dueDate,
        user_id: payload.user_id,
      }),
    })
      .then((response) => {
        dispatch(successAddTodo(response.data.task));
      })
      .catch((err) => {
        if (err.response) {
          if (
            err.response.data.message === invalidToken ||
            err.response.data.message === missingJWT
          ) {
            dispatch(userLogout());
          }
          dispatch(errorEndpointTodo());
        } else {
          dispatch(errorEndpointTodo());
        }
        dispatch(clearTodo());
      });
  };
};

export const callGetToDo = (payload) => {
  return (dispatch) => {
    dispatch(startGetTodo());
    return axios({
      headers: {
        "access-token": payload ? payload : JSON.parse(localStorage.getItem("authToken")) || "",
      },
      method: "get",
      url: `${url}tasks/`,
    })
      .then((response) => {
        dispatch(successGetTodo(response.data.tasks));
      })
      .catch((err) => {
        if (err.response) {
          if (
            err.response.data.message === invalidToken ||
            err.response.data.message === missingJWT
          ) {
            dispatch(userLogout());
          }
          dispatch(errorEndpointTodo());
        } else {
          dispatch(errorEndpointTodo());
        }
        dispatch(clearTodo());
      });
  };
};

export const callCompleteToDo = (payload) => {
  return (dispatch) => {
    dispatch(startCompleteTodo());
    return axios({
      headers: {
        "access-token": payload.token ? payload.token : JSON.parse(localStorage.getItem("authToken")) || "",
      },
      method: "put",
      url: `${url}tasks/complete/${payload._id}`,
    })
      .then((response) => {
        dispatch(successCompleteTodo(response.data.tasks));
        dispatch(callGetToDo());
      })
      .catch((err) => {
        if (err.response) {
          if (
            err.response.data.message === invalidToken ||
            err.response.data.message === missingJWT
          ) {
            dispatch(userLogout());
          }
          dispatch(errorEndpointTodo());
        } else {
          dispatch(errorEndpointTodo());
        }
        dispatch(clearTodo());
      });
  };
};

export const callDeleteToDo = (payload) => {
  return (dispatch) => {
    dispatch(startDeleteTodo());
    return axios({
      headers: {
        "access-token": payload.token ? payload.token : JSON.parse(localStorage.getItem("authToken")) || "",
      },
      method: "delete",
      url: `${url}tasks/delete/${payload._id}`,
    })
      .then((response) => {
        dispatch(successDeleteTodo());
        dispatch(callGetToDo());
      })
      .catch((err) => {
        if (err.response) {
          if (
            err.response.data.message === invalidToken ||
            err.response.data.message === missingJWT
          ) {
            dispatch(userLogout());
          }
          dispatch(errorEndpointTodo());
        } else {
          dispatch(errorEndpointTodo());
        }
        dispatch(clearTodo());
      });
  };
};
