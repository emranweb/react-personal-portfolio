import React, { useReducer } from "react";
import GlobalStyle from "./Global.style";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/header";
import PortfolioDetails from "./pages/PortfolioDetails";
import portfolio_image1 from "./assets/portfolio-1.jpg";
import portfolio_image2 from "./assets/portfolio-2.jpg";
import portfolio_image3 from "./assets/portfolio-3.jpg";
import portfolio_image4 from "./assets/portfolio-4.jpg";
import Admin from "./pages/admin";
import SignIn from "./pages/SignIn";
import ProtectedRoute from "./components/projected";

export const PortfolioCon = React.createContext();
export const UserCon = React.createContext();

const data = [
  {
    id: 1,
    title: "Beauty Girl",
    thumb: portfolio_image1,
    details: {
      category: "Design",
      client: "Abc Cort",
      imageby: "Abc",
      info: "Aussies were developed on ranches in the western United States, and were seen as early as the 1800s. These pups are very focused, and need lots of attention, pawsitive reinforcement, and exercise. They can still be found working on the ranch, but also work as guide dogs, therapy dogs, drug detectors, and of course, man’s best friend. People often seek them out for their incredibly strong hunting abilities. They are excellent swimmers, too, so a nice lake or pool is A-OK! However, they do require regular exercise and would fit best with an active family.",
    },

    images: [portfolio_image1],
  },
  {
    id: 2,
    title: "Beauty Girl",
    thumb: portfolio_image2,
    details: {
      category: "Design",
      client: "Abc Cort",
      imageby: "Abc",
      info: "Aussies were developed on ranches in the western United States, and were seen as early as the 1800s. These pups are very focused, and need lots of attention, pawsitive reinforcement, and exercise. They can still be found working on the ranch, but also work as guide dogs, therapy dogs, drug detectors, and of course, man’s best friend. People often seek them out for their incredibly strong hunting abilities. They are excellent swimmers, too, so a nice lake or pool is A-OK! However, they do require regular exercise and would fit best with an active family.",
    },

    images: [portfolio_image2],
  },
  {
    id: 3,
    title: "Beauty Girl",
    thumb: portfolio_image3,
    details: {
      category: "Design",
      client: "Abc Cort",
      imageby: "Abc",
      info: "Aussies were developed on ranches in the western United States, and were seen as early as the 1800s. These pups are very focused, and need lots of attention, pawsitive reinforcement, and exercise. They can still be found working on the ranch, but also work as guide dogs, therapy dogs, drug detectors, and of course, man’s best friend. People often seek them out for their incredibly strong hunting abilities. They are excellent swimmers, too, so a nice lake or pool is A-OK! However, they do require regular exercise and would fit best with an active family.",
    },

    images: [portfolio_image3],
  },
  {
    id: 4,
    title: "Beauty Girl",
    thumb: portfolio_image4,
    details: {
      category: "Design",
      client: "Abc Cort",
      imageby: "Abc",
      info: "Aussies were developed on ranches in the western United States, and were seen as early as the 1800s. These pups are very focused, and need lots of attention, pawsitive reinforcement, and exercise. They can still be found working on the ranch, but also work as guide dogs, therapy dogs, drug detectors, and of course, man’s best friend. People often seek them out for their incredibly strong hunting abilities. They are excellent swimmers, too, so a nice lake or pool is A-OK! However, they do require regular exercise and would fit best with an active family.",
    },

    images: [portfolio_image4],
  },
];

// users

const users = {
  name: "admin",
  email: "admin@gmail.com",
  password: "12345",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
};

const userReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    default:
      return state;
  }
};

function App() {
  const [portolio, setPortfolio] = useReducer(reducer, data);
  const [user, insertUser] = useReducer(userReducer, users);
  console.log(user);

  return (
    <div className="App">
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <ProtectedRoute
            path="/admin"
            exact
            component={Admin}
          ></ProtectedRoute>
          <Route
            path="/signin"
            exact
            render={() => (
              <UserCon.Provider value={{ data: user, dispatch: insertUser }}>
                <SignIn />
              </UserCon.Provider>
            )}
          />
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
