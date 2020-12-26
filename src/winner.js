import React from "react";

function Winner({ handleWinner }) {
  if (!handleWinner) return null;

  return (
    <div>
      <h1> {handleWinner === "X" ? "You are the winner" : "You failed"} </h1>;
    </div>
  );
}

export default Winner;
