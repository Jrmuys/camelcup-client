import { useState } from "react";

function Game() {
  const [gameState, setGameState] = useState<GameState>(initialGameState);

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={gameState.squares}
          onClick={(i) => {
            const squares = gameState.squares.slice();
            squares[i] = "X";
            setGameState({ ...gameState, squares });
          }}
        />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

export default Game;