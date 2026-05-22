/**
 * Status — Displays the current game state message.
 *
 * Props:
 *  - winner   : 'X' | 'O' | null
 *  - isDraw   : boolean
 *  - current  : 'X' | 'O'  (whose turn it is)
 */
function Status({ winner, isDraw, current }) {
  let message;
  let statusClass = 'status';
  let icon = '';

  if (winner) {
    message = `Winner: ${winner}`;
    statusClass += ' status-winner';
    icon = '🎉';
  } else if (isDraw) {
    message = "It's a Draw!";
    statusClass += ' status-draw';
    icon = '🤝';
  } else {
    message = `Current Turn: ${current}`;
    statusClass += ' status-playing';
    icon = current === 'X' ? '✕' : '◯';
  }

  return (
    <div className={statusClass} role="status" aria-live="polite">
      <span className="status-icon">{icon}</span>
      {message}
    </div>
  );
}

export default Status;
