import { useState } from 'react';
import Board from './components/Board';
import Status from './components/Status';
import './styles/game.css';

/* All possible winning combinations (row, col, diagonal) */
const WINNING_LINES = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // center column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonal ↘
  [2, 4, 6], // diagonal ↙
];

/**
 * Checks every winning combination and returns
 * { winner: 'X'|'O', line: [i,j,k] } or null.
 */
function calculateWinner(squares) {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return { winner: squares[a], line };
    }
  }
  return null;
}

function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  /* Derived state */
  const result = calculateWinner(squares);
  const winner = result ? result.winner : null;
  const winningLine = result ? result.line : null;
  const isDraw = !winner && squares.every((sq) => sq !== null);
  const gameOver = !!winner || isDraw;
  const currentPlayer = xIsNext ? 'X' : 'O';

  /** Handle a square click */
  function handleSquareClick(index) {
    // Ignore clicks on filled squares or if game is over
    if (squares[index] || gameOver) return;

    const next = squares.slice();
    next[index] = currentPlayer;
    setSquares(next);
    setXIsNext(!xIsNext);
  }

  /** Reset the entire game */
  function handleReset() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <div className="game">
      <h1 className="game-title">Tic Tac Toe</h1>
      <p className="game-subtitle">Two-player • React + Vite</p>

      <Status winner={winner} isDraw={isDraw} current={currentPlayer} />

      <Board
        squares={squares}
        onSquareClick={handleSquareClick}
        winningLine={winningLine}
        gameOver={gameOver}
      />

      <button className="reset-btn" onClick={handleReset}>
        Reset Game
      </button>

      <p className="game-footer">
        Built with React &amp; Vite ⚡
      </p>
    </div>
  );
}

export default App;
