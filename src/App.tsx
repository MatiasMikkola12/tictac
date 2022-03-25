import Game from "./pages/Game";
import Start from "./pages/Start";
import Finished from "./pages/Finished";
import useTicTacToe from "./hooks/useTicTacToe"
export const App = () =>  {
  const game = useTicTacToe();
  return (
    <div className="App">
      { game.status === "new" && <Start handleStart={game.handleStart} /> }
      { game.status === "finished" && <Finished name={game.winner} handleRestart={game.handleRestart} /> }
      { game.status === "started" &&<Game board={game.board} handleClick={game.handleClick} /> }
    </div>
  );
}