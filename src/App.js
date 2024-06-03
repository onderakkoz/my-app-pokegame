import Pokegame from "./Pokegame";
import "./Pokecard";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Pokemon Go Card Game</h1>
      <Pokegame />
      <button className="btn">Designed by Önder AKKÖZ</button>
      {/* <h1 className="design">Designed by Önder AKKÖZ</h1> */}
    </div>
  );
}

export default App;
