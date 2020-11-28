import { ADD_WIN, ADD_LOSS } from "./types";

export const addWin = () => (dispatch) => {
  dispatch({
    type: ADD_WIN,
    payload: 1,
  });
};

export const addLoss = () => (dispatch) => {
  dispatch({
    type: ADD_LOSS,
    payload: 1,
  });
};
