// src/components/Board.jsx
import React from "react";
import "../../styles/score4/board.css";

export default function Board({ board, onMove, gameOver }) {
  return (
    <div className="board">
      {board.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((cell, colIndex) => (
            <div
              className={`cell ${cell ? cell : ""}`}
              key={colIndex}
              onClick={() => !gameOver && onMove(colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
