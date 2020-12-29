import React from "react";
import Square from "./square";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

function Board(props) {
  const status = "NEW PLAYER:X";
  console.log({props})
  function renderSquare(i) {
    return (
      <Square
        value={props.gameState[i]}
        index={i}
        handleUpdate={props.handleStateUpdate}
      />
    );
  }

  return (
    <div>
      <div className="status">
        {status}
        <Grid item xs={3}>
          <Button variant="contained" onClick={props.handleReset}>
            Reset
          </Button>
        </Grid>
      </div>

      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

export default Board;
