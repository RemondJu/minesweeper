import logo from './minesweeper.png';
import './App.css';
import Game from './Game';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          MINESWEEPER
        </p>
      </header>
      <Game />
    </div>
  );
}

export default App;
