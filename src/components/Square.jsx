/**
 * Square — A single cell on the Tic Tac Toe board.
 *
 * Props:
 *  - value       : 'X' | 'O' | null
 *  - onClick     : callback when the square is clicked
 *  - isWinner    : boolean — is this square part of the winning line?
 *  - isDisabled  : boolean — prevent clicks (game over or already filled)
 */
function Square({ value, onClick, isWinner, isDisabled }) {
  const classes = [
    'square',
    value ? 'square-filled' : '',
    isWinner ? 'square-winner' : '',
    isDisabled ? 'square-disabled' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classes} onClick={onClick} disabled={isDisabled} aria-label={value || 'empty'}>
      {value && (
        <span className={`square-mark mark-${value.toLowerCase()}`}>
          {value}
        </span>
      )}
    </button>
  );
}

export default Square;
