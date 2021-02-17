import React from "react";
import Home from "./Components/Home/Home";
import "./App.css";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    // BEM
    <Router>
      <Switch>
        <Route exact path='/' component={Login}>
        </Route>
        <Route exact path ='/inicio' component={Home}>
        </Route>
        <Route path='*' component={NotFound}>
        </Route>
    </Switch>
  </Router>
        );
}

export default App;