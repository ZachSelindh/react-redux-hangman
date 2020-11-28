import React from "react";

import { useSelector } from "react-redux";

function Missed() {
  const incorrect = useSelector((state) => state.words.incorrect);
  return (
    <div>
      <h5>
        <span> Missed: {incorrect.join(" ")}</span>
      </h5>
    </div>
  );
}

export default Missed;
