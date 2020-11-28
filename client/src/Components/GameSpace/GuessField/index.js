import React, { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { chooseWord, makeGuess } from "../../../actions/wordsActions";
import { addWin, addLoss } from "../../../actions/scoreActions";
import {
  pauseGame,
  unPauseGame,
  setGameOver,
} from "../../../actions/gameStatusActions";

function GuessField() {
  const dispatch = useDispatch();

  const words = useSelector((state) => state.words.words);
  const hidden = useSelector((state) => state.words.hidden);
  const correct = useSelector((state) => state.words.correct);
  const incorrect = useSelector((state) => state.words.incorrect);
  const wordArray = useSelector((state) => state.words.wordArray);
  const gamePaused = useSelector((state) => state.gameStatus.paused);

  const [inputValue, setInputValue] = useState("");
  const [gameMessage, setGameMessage] = useState("");

  // Helper function for checking if the guess is a letter
  function isLetter(potentialLetter) {
    return potentialLetter.toLowerCase() !== potentialLetter.toUpperCase();
  }

  // Helper function for checking if a letter has been previously guessed
  function hasNotBeenGuessed(potentialGuess) {
    var hasIncorrect = incorrect.indexOf(potentialGuess);
    var hasCorrect = correct.indexOf(potentialGuess);
    return hasCorrect === -1 && hasIncorrect === -1;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setGameMessage("");
    // Uses isLetter to determine a valid guess
    if (isLetter(inputValue) && hasNotBeenGuessed(inputValue)) {
      dispatch(makeGuess(inputValue));
      // Uses hasNotBeenGuessed to check if guess is contained in state arrays already
    } else if (!hasNotBeenGuessed(inputValue)) {
      setGameMessage("Letter has already been guessed!");
      // Letter fails if it is not a letter
    } else if (!isLetter(inputValue)) {
      setGameMessage("Letters only, please!");
    }
    setInputValue("");
  }

  function handleClick() {
    if (words.length) {
      dispatch(chooseWord(Math.floor(Math.random() * words.length)));
      setGameMessage("");
      dispatch(unPauseGame());
    } else {
      dispatch(setGameOver());
      setGameMessage("No more words remaining!");
    }
  }

  useEffect(() => {
    // Checks if arrays are identical, causing a win
    if (JSON.stringify(hidden) === JSON.stringify(wordArray)) {
      setGameMessage("You win!!");
      dispatch(pauseGame());
      dispatch(addWin());
      // Checks length of incorrect array to decide a loss
    } else if (incorrect.length === 6) {
      setGameMessage("You lose!");
      dispatch(pauseGame());
      dispatch(addLoss());
    }
  }, [setGameMessage, dispatch, hidden, wordArray, incorrect]);

  return (
    <div className="guess-field">
      <h4>{hidden.join(" ")}</h4>
      {gameMessage.length ? <h4>{gameMessage}</h4> : null}
      {gamePaused ? (
        <div>
          <button className="btn btn-success" onClick={handleClick}>
            Click to Play Again
          </button>
        </div>
      ) : (
        <div className="text-center">
          <h4>Make a Guess:</h4>
          <form onSubmit={handleSubmit}>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              maxLength="1"
            />
            <br />
            <br />
            <button className="btn btn-primary" type="submit">
              Submit Guess
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default GuessField;
