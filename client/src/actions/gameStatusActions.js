import { PAUSE_GAME, UNPAUSE_GAME, GAME_OVER } from "./types";

export const pauseGame = () => (dispatch) => {
  dispatch({
    type: PAUSE_GAME,
    payload: true,
  });
};

export const unPauseGame = () => (dispatch) => {
  dispatch({
    type: UNPAUSE_GAME,
    payload: true,
  });
};

export const setGameOver = () => (dispatch) => {
  dispatch({
    type: GAME_OVER,
    payload: true,
  });
};
