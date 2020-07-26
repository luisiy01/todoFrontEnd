export const START_GET_USER = "START_GET_USER";
export const SUCCESS_GET_USER = "SUCCESS_GET_USER";
export const ERROR_GET_USER = "ERROR_GET_USER";
export const ERROR_ENDPOINT_USER = "ERROR_ENDPOINT_USER";
export const START_CREATE_USER = "START_CREATE_USER";
export const SUCCESS_CREATE_USER = "SUCCESS_CREATE_USER";
export const ERROR_CREATE_USER = "ERROR_CREATE_USER";
export const USER_LOGOUT = "USER_LOGOUT";

export const startGetUser = (payload) => ({
  type: START_GET_USER,
  ...payload,
});

export const successGetUser = (payload) => ({
  type: SUCCESS_GET_USER,
  payload,
});

export const errorGetUser = (payload) => ({
  type: ERROR_GET_USER,
  payload,
});

export const errorEndpointUser = (payload) => ({
  type: ERROR_ENDPOINT_USER,
  ...payload,
});

export const startCreateUser = (payload) => ({
  type: START_CREATE_USER,
  ...payload,
});

export const successCreateUser = (payload) => ({
  type: SUCCESS_CREATE_USER,
  ...payload,
});

export const errorCreateUser = (payload) => ({
  type: ERROR_CREATE_USER,
  payload,
});

export const userLogout = (payload) => ({
  type: USER_LOGOUT,
  payload,
});
