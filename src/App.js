import "./App.css";
import header from "./components/header/header";
import Main from "./components/main/main";
import footer from "./components/footer/footer";
import data from "./data.json";

function App() {
  return (
    <div className="App">
      <Main data={data} />
      <footer></footer>
    </div>
  );
}

export default App;
