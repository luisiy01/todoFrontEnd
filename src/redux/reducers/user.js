import {
  START_GET_USER,
  SUCCESS_GET_USER,
  ERROR_GET_USER,
  ERROR_ENDPOINT_USER,
  START_CREATE_USER,
  ERROR_CREATE_USER,
  SUCCESS_CREATE_USER,
  USER_LOGOUT,
} from "../actions/user";

const defaultState = {
  user: JSON.parse(localStorage.getItem("user")) || {},
  isLoading: false,
  error: "",
  authToken: JSON.parse(localStorage.getItem("authToken")) || "",
  created: false,
  isAuthUser: !!localStorage.getItem("user"),
  logOut: false,
  userLogOut: false,
};

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case START_GET_USER: {
      return {
        ...state,
        isLoading: true,
        error: "",
        user: {},
        authToken: "",
        logOut: false,
        userLogOut: false,
      };
    }
    case START_CREATE_USER: {
      return {
        ...state,
        isLoading: true,
        error: "",
        user: {},
        authToken: "",
        logOut: false,
      };
    }
    case SUCCESS_GET_USER: {
      localStorage.setItem("user", JSON.stringify(payload.user));
      localStorage.setItem("authToken", JSON.stringify(payload.authToken));
      return {
        ...state,
        user: payload.user,
        authToken: payload.authToken,
        isLoading: false,
        created: false,
        isAuthUser: true,
        logOut: false,
      };
    }
    case ERROR_GET_USER: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }
    case SUCCESS_CREATE_USER: {
      return {
        ...state,
        isLoading: false,
        created: true,
      };
    }
    case ERROR_CREATE_USER: {
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    }
    case ERROR_ENDPOINT_USER: {
      return {
        ...state,
        isLoading: false,
        error: "There is a problem with the conexion",
      };
    }
    case USER_LOGOUT: {
      localStorage.removeItem("user");
      localStorage.removeItem("authToken");
      return {
        ...state,
        user: {},
        isLoading: false,
        error: "",
        authToken: "",
        created: false,
        isAuthUser: false,
        logOut: true,
        userLogOut: payload ? payload : false,
      };
    }
    default:
      return state;
  }
}

export default reducer;
