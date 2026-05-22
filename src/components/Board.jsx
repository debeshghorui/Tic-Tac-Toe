import Square from './Square';

/**
 * Board — Renders the 3×3 grid of Square components.
 *
 * Props:
 *  - squares       : array of 9 values ('X' | 'O' | null)
 *  - onSquareClick : callback(index) when a square is clicked
 *  - winningLine   : array of 3 indices that form the winning line, or null
 *  - gameOver      : boolean — whether the game has ended
 */
function Board({ squares, onSquareClick, winningLine, gameOver }) {
  return (
    <div className="board-wrapper">
      <div className="board">
        {squares.map((value, index) => {
          const isWinner = winningLine ? winningLine.includes(index) : false;
          const isDisabled = gameOver || value !== null;

          return (
            <Square
              key={index}
              value={value}
              onClick={() => onSquareClick(index)}
              isWinner={isWinner}
              isDisabled={isDisabled}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Board;
