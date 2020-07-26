import axios from "axios";
import config from "../config.json";
import {
  startGetUser,
  successGetUser,
  errorGetUser,
  errorEndpointUser,
  startCreateUser,
  successCreateUser,
  errorCreateUser,
} from "../redux/actions/user";

const url = config.endpoint;

export function callLoginUser(payload) {
  return (dispatch) => {
    dispatch(startGetUser());
    return axios({
        headers: {
          "Content-Type": "application/json",
        },
        method: "post",
        url: `${url}auth/user/login`,
        data: JSON.stringify(payload),
      })
      .then((response) => {
        dispatch(successGetUser(response.data));
      })
      .catch((err) => {
        if (err.response) {
          dispatch(errorGetUser(err.response.data.message));
        } else {
          dispatch(errorEndpointUser());
        }
      });
  };
}

export const callCreateUser = (payload) => {
  return (dispatch) => {
    dispatch(startCreateUser());
    return axios({
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      url: `${url}auth/user/register`,
      data: JSON.stringify(payload),
    })
      .then((response) => {
        dispatch(successCreateUser());
      })
      .catch((err) => {
        if (err.response) {
          dispatch(errorCreateUser(err.response.data.message));
        } else {
          dispatch(errorEndpointUser());
        }
      });
  };
};
