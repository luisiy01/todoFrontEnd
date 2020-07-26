import { COMPLETE_LIST } from "../actions/dashboard";

const defaultState = {
  completeList: false,
};

function reducer(state = defaultState, { type, payload }) {
  switch (type) {
    case COMPLETE_LIST: {
      return {
        ...state,
        completeList: payload,
      };
    }
    default:
      return state;
  }
}

export default reducer;
