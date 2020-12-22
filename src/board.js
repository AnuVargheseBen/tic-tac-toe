import React, { Component } from "react";
import Square from "./square";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

class Board extends Component {
  constructor() {
    super();
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.gameState[i]}
        index={i}
        handleUpdate={this.props.handleStateUpdate}
      />
    );
  }
  render() {
    const status = "NEW PLAYER:X";
    return (
      <div>
        <div className="status">
          {status}
          <Grid item xs={3}>
            <Button variant="contained" onClick={this.props.handleReset}>
              Reset
            </Button>
          </Grid>
        </div>

        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
