import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css"; // ensure styles are loaded
import React from "react";
import Square from "./components/Square";
import PlayerProfile from "./components/PlayerProfile";

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

  // ---------------- NEW: players state ----------------
  const [players, setPlayers] = useState([
    { id: "X", name: "Player X", wins: 0, losses: 0, draws: 0, matches: 0 },
    { id: "O", name: "Player O", wins: 0, losses: 0, draws: 0, matches: 0 },
  ]);

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

  // ------- Micro Step 7: function to update player stats -------
  function updatePlayerStats(result) {
    // result can be: "X", "O", or "draw"

    const newPlayers = [...players]; // shallow copy of array

    // Every finished match increments matches for both players
    newPlayers[0].matches += 1;
    newPlayers[1].matches += 1;

    if (result === "X") {
      newPlayers[0].wins += 1; // X wins
      newPlayers[1].losses += 1; // O loses
    } else if (result === "O") {
      newPlayers[1].wins += 1; // O wins
      newPlayers[0].losses += 1; // X loses
    } else if (result === "draw") {
      newPlayers[0].draws += 1;
      newPlayers[1].draws += 1;
    }

    setPlayers(newPlayers);
  }
  // ------- Micro Step 8: detect game end and update stats -------
  useEffect(() => {
    const result = calculateWinner(squares); // result = "X" or "O" or null

    if (result) {
      // someone won → update stats
      updatePlayerStats(result);
    } else {
      // no winner yet → check draw
      const isDraw = squares.every((sq) => sq !== null);
      if (isDraw) {
        updatePlayerStats("draw");
      }
    }
  }, [squares]);

  function resetPlayerStats() {
    setPlayers((prev) =>
      prev.map((p) => ({
        ...p,
        wins: 0,
        losses: 0,
        draws: 0,
        matches: 0,
      }))
    );
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

      {/* Player Profile */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          gap: "20px",
        }}
      >
        <PlayerProfile
          id={players[0].id}
          name={players[0].name}
          wins={players[0].wins}
          losses={players[0].losses}
          draws={players[0].draws}
          matches={players[0].matches}
        />

        {/* Center BOARD area (placeholder for now) */}
        <div>
          <h3 style={{ textAlign: "center", marginBottom: "10px" }}>Board</h3>
          <div>
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
          </div>
        </div>

        {/* Right Player */}
        <PlayerProfile
          id={players[1].id}
          name={players[1].name}
          wins={players[1].wins}
          losses={players[1].losses}
          draws={players[1].draws}
          matches={players[1].matches}
        />
      </div>

      {/* NEW GAME button placed below the grid */}
      <div
        style={{
          marginTop: 12,
          display: "flex",
          gap: 8,
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => {
            setSquares(Array(9).fill(null)); // reset squares
            setXIsNext(true); // reset to X's turn
          }}
        >
          New Game
        </button>

        <button onClick={resetPlayerStats}>Reset Scores</button>
      </div>
    </div>
  );
}

export default App;
