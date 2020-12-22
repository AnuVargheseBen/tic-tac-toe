import React from "react-dom";


function Square(props) {
  if (!props.value) {
    return (
      <div className="game-board-style">
        <button
          className="square"
          onClick={() => props.handleUpdate(props.index, "X")}
        >
          {props.value}
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <button className="square">{props.value}</button>
      </div>
    );
  }
}
export default Square;
