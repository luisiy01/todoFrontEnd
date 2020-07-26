import {
  OPEN_DIALOG,
  CLOSE_DIALOG,
  SUCCESS_ADD_TODO,
  START_ADD_TODO,
  ERROR_ENDPOINT_TODO,
  CLEAR_TODO,
  START_GET_TODO,
  SUCCESS_GET_TODO,
  START_COMPLETE_TODO,
  SUCCESS_COMPLETE_TODO,
  UPDATE_ADDED_PROP,
  START_DELETE_TODO,
  SUCCESS_DELETE_TODO,
  CLEAR_MESSAGE,
} from "../actions/todo";
import moment from "moment";

const emptyToDo = () => {
  return {
    todo: "",
    dueDate: moment().format("YYYY-MM-DD"),
  };
};

const defaultState = {
  showDialog: false,
  todoList: [],
  newTodo: emptyToDo(),
  isLoading: false,
  error: "",
  added: false,
  completed: false,
  deleted: false,
  get: false,
};

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case OPEN_DIALOG: {
      return {
        ...state,
        showDialog: true,
        newTodo: payload,
      };
    }
    case CLOSE_DIALOG: {
      return {
        ...state,
        showDialog: false,
        newTodo: {},
      };
    }
    case SUCCESS_ADD_TODO: {
      return {
        ...state,
        showDialog: false,
        isLoading: false,
        todoList: [...state.todoList, payload],
        newTodo: emptyToDo(),
        added: true,
      };
    }
    case START_ADD_TODO: {
      return {
        ...state,
        showDialog: false,
        isLoading: true,
        added: false,
      };
    }
    case ERROR_ENDPOINT_TODO: {
      return {
        ...state,
        isLoading: false,
        error: "There is a problem with the server",
      };
    }
    case CLEAR_TODO: {
      return {
        ...state,
        showDialog: false,
        todoList: [],
        newTodo: emptyToDo(),
        isLoading: false,
        error: "",
      };
    }
    case START_GET_TODO: {
      return {
        ...state,
        isLoading: true,
        get: false,
      };
    }
    case SUCCESS_GET_TODO: {
      return {
        ...state,
        isLoading: false,
        todoList: payload,
        get: true,
      };
    }
    case START_COMPLETE_TODO: {
      return {
        ...state,
        isLoading: true,
        completed: false,
      };
    }
    case SUCCESS_COMPLETE_TODO: {
      return {
        ...state,
        isLoading: false,
        completed: true,
      };
    }
    case UPDATE_ADDED_PROP: {
      return {
        ...state,
        added: false,
      };
    }
    case START_DELETE_TODO: {
      return {
        ...state,
        isLoading: true,
        deleted: false,
      };
    }
    case SUCCESS_DELETE_TODO: {
      return {
        ...state,
        isLoading: false,
        deleted: true,
      };
    }
    case CLEAR_MESSAGE: {
      return {
        ...state,
        deleted: false,
        added: false,
        completed: false,
      };
    }
    default:
      return state;
  }
}

export default reducer;
