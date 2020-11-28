import { GET_WORDS, CHOOSE_WORD, MAKE_GUESS } from "./types";

export const getWords = () => async (dispatch) => {
  dispatch({
    type: GET_WORDS,
    payload: ["react", "bootstrap", "redux", "javascript"],
  });
};

export const chooseWord = (index) => (dispatch) => {
  dispatch({
    type: CHOOSE_WORD,
    payload: index,
  });
};

export const makeGuess = (letter) => (dispatch) => {
  dispatch({
    type: MAKE_GUESS,
    payload: letter,
  });
};
