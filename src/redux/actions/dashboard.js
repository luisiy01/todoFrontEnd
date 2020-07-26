export const COMPLETE_LIST = "COMPLETE_LIST";

export const showCompleteList = (payload) => {
  return {
    type: COMPLETE_LIST,
    payload,
  };
};
