export const OPEN_DIALOG = "OPEN_DIALOG";
export const CLOSE_DIALOG = "CLOSE_DIALOG";
export const CLEAR_TODO = "CLEAR_TODO";
export const START_ADD_TODO = "START_ADD_TODO";
export const SUCCESS_ADD_TODO = "SUCCESS_ADD_TODO";
export const START_GET_TODO = "START_GET_TODO";
export const SUCCESS_GET_TODO = "SUCCESS_GET_TODO";
export const START_COMPLETE_TODO = "START_COMPLETE_TODO";
export const SUCCESS_COMPLETE_TODO = "SUCCESS_COMPLETE_TODO";
export const ERROR_ENDPOINT_TODO = "ERROR_ENDPOINT_TODO";
export const UPDATE_ADDED_PROP = "UPDATE_ADDED_PROP";
export const START_DELETE_TODO = "START_DELETE_TODO";
export const SUCCESS_DELETE_TODO = "SUCCESS_DELETE_TODO";
export const CLEAR_MESSAGE = "CLEAR_MESSAGE";

export const openDialog = (payload) => ({
  type: OPEN_DIALOG,
  payload,
});

export const closeDialog = (payload) => ({
  type: CLOSE_DIALOG,
  ...payload,
});

export const clearTodo = (payload) => ({
  type: CLEAR_TODO,
  payload,
});

export const startAddTodo = (payload) => ({
  type: START_ADD_TODO,
  ...payload,
});

export const successAddTodo = (payload) => ({
  type: SUCCESS_ADD_TODO,
  payload,
});

export const errorEndpointTodo = (payload) => ({
  type: ERROR_ENDPOINT_TODO,
  ...payload,
});

export const startGetTodo = (payload) => ({
  type: START_GET_TODO,
  ...payload,
});

export const successGetTodo = (payload) => ({
  type: SUCCESS_GET_TODO,
  payload,
});

export const startCompleteTodo = (payload) => ({
  type: START_COMPLETE_TODO,
  ...payload,
});

export const successCompleteTodo = (payload) => ({
  type: SUCCESS_COMPLETE_TODO,
  payload,
});

export const updateAddedProp = (payload) => ({
  type: UPDATE_ADDED_PROP,
  ...payload,
});

export const startDeleteTodo = (payload) => ({
  type: START_DELETE_TODO,
  ...payload,
});

export const successDeleteTodo = (payload) => ({
  type: SUCCESS_DELETE_TODO,
  payload,
});

export const clearMessage = (payload) => ({
  type: CLEAR_MESSAGE,
  ...payload,
});
