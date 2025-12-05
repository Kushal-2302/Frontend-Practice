import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css"; // ensure styles are loaded
import React from "react";
import Square from "./components/Square";

/** Simple winner check — returns "X", "O" or null */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null)); // state to hold the values of the 9 squares
  const [xIsNext, setXIsNext] = useState(true); // track which player's turn it is

  const winner = calculateWinner(squares); // check if there's a winner
  const isDraw = !winner && squares.every((square) => square !== null); // check for draw

  function handleClick(i) {
    //
    if (squares[i] || winner || isDraw) return; // ignore click if square is filled or there's a winner

    const nextSquares = squares.slice(); // create a copy of the squares array
    nextSquares[i] = xIsNext ? "X" : "O"; // set the clicked square to 'X' or 'O'

    setSquares(nextSquares); // update state with the new squares array
    setXIsNext(!xIsNext); // toggle the player turn
  }

  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "It's a Draw!";
  } else {
    status = `Next: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="app">
      <h1>Tic-Tac-Toe</h1>

      <div className="status">{status}</div>

      {/* <div className="status">
        Next Player: {xIsNext ? "X" : "O"}
      </div> */}

      {/* Render a few Square components to see how they repeat */}
      <div className="grid-container">
        {squares.map(
          (
            value,
            index // iterate over the squares array
          ) => (
            <Square
              key={index} // unique key for each Square
              value={value} // pass the value to the Square component
              onClick={() => handleClick(index)} // pass the click handler
            />
          )
        )}
      </div>

      {/* NEW GAME button placed below the grid */}
      <div style={{ marginTop: 12 }}>
        <button
          onClick={() => {
            setSquares(Array(9).fill(null)); // reset squares
            setXIsNext(true); // reset to X's turn
          }}
        >
          New Game
        </button>
      </div>
    </div>
  );
}

export default App;
