import React, { useState, useEffect } from "react";

import GuessField from "./GuessField";
import ScoreBoard from "./ScoreBoard";
import HangingMan from "./HangingMan";
import Missed from "./Missed";

import { useDispatch, useSelector } from "react-redux";
import { getWords, chooseWord } from "../../actions/wordsActions";
import { unPauseGame } from "../../actions/gameStatusActions";

function GameSpace() {
  const dispatch = useDispatch();
  useEffect(() => {
    async function getTheWordsUsingDispatch() {
      await dispatch(getWords());
    }
    getTheWordsUsingDispatch();
  }, [dispatch]);

  const words = useSelector((state) => state.words.words);
  const gameOver = useSelector((state) => state.gameStatus.gameOver);

  const [gameStarted, setGameStarted] = useState(false);

  function handleClick() {
    dispatch(chooseWord(Math.floor(Math.random() * words.length)));
    setGameStarted(true);
    dispatch(unPauseGame());
  }

  return (
    <div className="text-center">
      <h1 className="header">React/Redux Hangman</h1>
      <p> A state managed game of hangman </p>
      {gameOver ? (
        <div>
          <h3>"Gameover, man! Gameover!"</h3>
          <p>
            You've exhausted all the words in the database! Thanks for playing.
          </p>
        </div>
      ) : (
        <div>
          {gameStarted ? (
            <div>
              <ScoreBoard />
              <HangingMan />
              <Missed />
              <GuessField />
            </div>
          ) : (
            <button className="btn btn-success" onClick={handleClick}>
              Click to begin
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default GameSpace;
