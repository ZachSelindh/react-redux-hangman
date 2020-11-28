import { PAUSE_GAME, UNPAUSE_GAME, GAME_OVER } from "../actions/types";

const initialState = {
  paused: true,
  gameOver: false,
};

function gameStatusReducers(state = initialState, action) {
  switch (action.type) {
    case PAUSE_GAME:
      return {
        ...state,
        paused: true,
      };
    case UNPAUSE_GAME:
      return {
        ...state,
        paused: false,
      };
    case GAME_OVER:
      return {
        ...state,
        paused: true,
        gameOver: true,
      };
    default:
      return state;
  }
}

export default gameStatusReducers;
