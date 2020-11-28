import { combineReducers } from "redux";
import wordsReducers from "../reducers/wordsReducers";
import scoreReducers from "../reducers/scoreReducers";
import gameStatusReducers from "../reducers/gameStatusReducers";

export default combineReducers({
  words: wordsReducers,
  score: scoreReducers,
  gameStatus: gameStatusReducers,
});
