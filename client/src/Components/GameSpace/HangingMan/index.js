import React from "react";
import { useSelector } from "react-redux";

import "./style.css";

function HangingMan() {
  const incorrect = useSelector((state) => state.words.incorrect);

  const numberForImageChange = incorrect.length;

  return (
    <div>
      <img
        className="hangingman"
        alt="Hangman"
        src={require(`../../../assets/images/hangman${
          numberForImageChange > 6 ? 6 : numberForImageChange
        }.png`)}
      />
    </div>
  );
}

export default HangingMan;
