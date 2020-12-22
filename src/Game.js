import React from "react";
import Grid from "@material-ui/core/Grid";
import Board from "./board";
import "./style.css";
import Winner from "./winner";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = { board: Array(9).fill(null), winner: "", isGameEnd: false };
  }

  handleStateUpdate = (index, value) => {
    if(this.state.isGameEnd) return;
    const newBoard = [...this.state.board];
    newBoard[index] = value;
    this.setState({ board: newBoard }, this.handleSystemMove);
  };

  handleReset = () => {
    this.setState({ board: [] });
  };

  handleSystemMove = () => {
    const boardArray = [...this.state.board];
    for (let i = 0; i < boardArray.length; i++) {
      if (boardArray[i] !== "X" && boardArray[i] !== "O") {
        boardArray[i] = "O";
        break;
      }
    }
    this.setState({ board: boardArray },this.setWinner);
  };
  
  setWinner =()=>{
    const winner = this.calculateWinner();
    this.setState({winner,isGameEnd:!!winner})
  }
  calculateWinner = () => {
    const board = this.state.board;
    const winnerPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let winnerPattern of winnerPatterns) {
      if (
        board[winnerPattern[0]] === board[winnerPattern[1]] &&
        board[winnerPattern[1]] === board[winnerPattern[2]]
      ) {
        return board[winnerPattern[0]];
      }
    }
  };

  render() {
    return (
      <div className="game" style={{ width: "100%" }}>
        <div
          className="game-board"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <Board
            gameState={this.state.board}
            handleStateUpdate={this.handleStateUpdate}
            handleSystemMove={this.handleSystemMove}
            handleReset={this.handleReset}
          />
          <Winner
            handleWinner={this.state.winner}
            handleMouseClickDisable={this.handleMouseClickDisable}
          />
        </div>
      </div>
    );
  }
}
export default Game;
