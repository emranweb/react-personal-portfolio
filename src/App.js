import React, { useReducer } from "react";
import GlobalStyle from "./Global.style";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/header";
import PortfolioDetails from "./pages/PortfolioDetails";
import pro1 from "./assets/project-01.jpg";

export const PortfolioCon = React.createContext();

const data = [
  {
    id: 0,
    title: "Beauty Girl",
    thumb: pro1,
    details: {
      category: "Design",
      client: "Abc Cort",
      imageby: "Abc",
      info: "Aussies were developed on ranches in the western United States, and were seen as early as the 1800s. These pups are very focused, and need lots of attention, pawsitive reinforcement, and exercise. They can still be found working on the ranch, but also work as guide dogs, therapy dogs, drug detectors, and of course, man’s best friend. People often seek them out for their incredibly strong hunting abilities. They are excellent swimmers, too, so a nice lake or pool is A-OK! However, they do require regular exercise and would fit best with an active family.",
    },

    images: [pro1],
  },
];

const initialValue = data;

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
};

function App() {
  const [portolio, setPortfolio] = useReducer(reducer, initialValue);
  console.log(portolio);
  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route path="/contact" exact component={HomePage} />
          <Route path="/blogs" exact component={HomePage} />
          <Route
            path="/portfolio/:id"
            exact
            render={() => (
              <PortfolioCon.Provider value={{ count: setPortfolio }}>
                <PortfolioDetails />
              </PortfolioCon.Provider>
            )}
          />
          <Route path="/about" exact component={HomePage} />
          <Route
            path="/"
            exact
            render={() => (
              <PortfolioCon.Provider value={{ data: portolio }}>
                <HomePage />
              </PortfolioCon.Provider>
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
