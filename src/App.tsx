import Game from "./pages/Game";
import Start from "./pages/Start";
import Finished from "./pages/Finished";
import useTickTackToe from "./hooks/useTicTacToe";
const App = () => {
  const game = useTickTackToe();

  const displayGameState = () => {
    if (game.status === "created") {
      return <Start handleStart={game.handleStart} />;
    } else if (game.status === "finished") {
      return <Finished name={game.winner} handleRestart={game.handleRestart} />;
    } else {
      return <Game board={game.board} handleClick={game.handleClick} />;
    }
  };

  return <div className="App">{displayGameState()}</div>;
};
export default App;
