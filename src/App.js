import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Banner from "./Components/Banner";
import Cart from "./Components/Cart";
import store from "./Reducer/Index";
import { Provider } from "react-redux";

import Desc from "./Components/Desc";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
        <Switch>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/desc/:id">
            <Desc />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Provider>
    </Router>
  );
}

export default App;
