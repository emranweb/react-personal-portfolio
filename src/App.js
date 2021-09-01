import GlobalStyle from "./Global.style";
import { Button } from "./components/button";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <header className="App-header">
        <Button>Download CV</Button>
      </header>
    </div>
  );
}

export default App;
