import React from "react";

import { useSelector } from "react-redux";

import "./style.css";

function ScoreBoard() {
  const wins = useSelector((state) => state.score.wins);
  const loss = useSelector((state) => state.score.loss);

  return (
    <div className="text-center row scoreboard">
      <div className="col-md-6">
        <h3>
          <span>
            <i className="fa fa-star" /> Wins: {wins}{" "}
          </span>
        </h3>
      </div>
      <div className="col-md-6">
        <h3>
          {" "}
          <span>
            <i className="fa fa-thumbs-down" /> Losses: {loss}
          </span>
        </h3>
      </div>
    </div>
  );
}

export default ScoreBoard;
