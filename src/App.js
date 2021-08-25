import GlobalStyle from "./Global.style";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/header";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/contact" exact component={HomePage} />
          <Route path="/blogs" exact component={HomePage} />
          <Route path="/portfolio" exact component={HomePage} />
          <Route path="/about" exact component={HomePage} />
          <Route path="/" exact component={HomePage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
