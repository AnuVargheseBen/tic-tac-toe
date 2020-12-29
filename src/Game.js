import React, { useState, useEffect } from "react";
import Board from "./board";
import "./style.css";
import Winner from "./winner";

function Game(props) {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [gameEnd, isgameEnd] = useState(false);
  const [winner, isWinner] = useState("");
  const [isSystemTurn, setIsSystemTurn] = useState(false);

  useEffect(() => {
    setWinner();
    if (isSystemTurn) {
      handleSystemMove();
    }
  }, [isSystemTurn]);

  function handleStateUpdate(index, value) {
    if (gameEnd) return;
    const newBoard = [...board];
    newBoard[index] = value;
    setBoard(newBoard);

    setIsSystemTurn(true);
  }

  function handleReset() {
    setBoard([]);
    isWinner("");
    isgameEnd(false);
  }

  function handleSystemMove() {
    if (gameEnd) return;
    const boardArray = [...board];
    const random = Math.floor(Math.random() * boardArray.length);
    for (let i = random; i < boardArray.length + random; i++) {
      const index = i % boardArray.length;
      if (boardArray[index] !== "X" && boardArray[index] !== "O") {
        boardArray[index] = "O";
        break;
      }
    }

    setBoard(boardArray);

    setIsSystemTurn(false);
  }

  function setWinner() {
    const winner = calculateWinner(board);

    return {
      winner: isWinner(winner),
      gameEnd: isgameEnd(!!winner),
    };
  }

  function calculateWinner(board) {
    // const board = [...board];
    console.log({ board });
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
  }

  return (
    <div className="game" style={{ width: "100%" }}>
      <div
        className="game-board"
        style={{ marginLeft: "auto", marginRight: "auto" }}
      >
        <Board
          gameState={board}
          handleStateUpdate={handleStateUpdate}
          handleReset={handleReset}
        />
        <Winner handleWinner={winner} />
      </div>
    </div>
  );
}

export default Game;
