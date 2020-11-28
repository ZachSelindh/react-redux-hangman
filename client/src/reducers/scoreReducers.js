import { ADD_WIN, ADD_LOSS } from "../actions/types";

const initialState = {
  wins: 0,
  loss: 0,
};

function wordsReducers(state = initialState, action) {
  switch (action.type) {
    case ADD_WIN:
      return {
        ...state,
        wins: state.wins + action.payload,
      };
    case ADD_LOSS:
      return {
        ...state,
        loss: state.loss + action.payload,
      };
    default:
      return state;
  }
}

export default wordsReducers;
