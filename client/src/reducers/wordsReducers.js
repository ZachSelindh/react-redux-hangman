import { GET_WORDS, CHOOSE_WORD, MAKE_GUESS } from "../actions/types";

const initialState = {
  words: [],
  word: "",
  wordArray: [],
  hidden: [],
  guess: "",
  guessed: [],
  correct: [],
  incorrect: [],
};

function wordsReducers(state = initialState, action) {
  switch (action.type) {
    case GET_WORDS:
      return {
        ...state,
        words: action.payload,
      };
    case CHOOSE_WORD:
      const foundWord = state.words[action.payload];
      const arrOfWord = foundWord.split("");
      const hiddenWordArr = [];
      arrOfWord.forEach((letter) => hiddenWordArr.push("_"));
      const newArray = state.words.filter((word) => {
        return word !== foundWord;
      });
      return {
        ...state,
        word: foundWord,
        words: newArray,
        wordArray: arrOfWord,
        hidden: hiddenWordArr,
        guess: "",
        guessed: [],
        correct: [],
        incorrect: [],
      };
    case MAKE_GUESS:
      const copyOfWordArray = state.wordArray;
      const indexOfGuess = copyOfWordArray.indexOf(action.payload);
      const copyOfHiddenArray = state.hidden;
      copyOfWordArray.forEach((letter, index) => {
        if (letter === action.payload) {
          copyOfHiddenArray.splice(index, 1, letter);
        }
      });
      function getWordContains(letter, correctState) {
        if (indexOfGuess !== -1) {
          return [...correctState, letter];
        } else {
          return [...correctState];
        }
      }
      function getWordDoesNotContain(letter, incorrectState) {
        if (indexOfGuess !== -1) {
          return [...incorrectState];
        } else {
          return [...incorrectState, letter];
        }
      }
      return {
        ...state,
        guess: action.payload,
        guessed: [...state.guessed, action.payload],
        hidden: [...copyOfHiddenArray],
        correct: getWordContains(action.payload, state.correct),
        incorrect: getWordDoesNotContain(action.payload, state.incorrect),
      };
    default:
      return state;
  }
}

export default wordsReducers;
