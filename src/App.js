import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Mainpage from "./components/Mainpage/Mainpage";
import LoginPage from "./components/auth/LoginPage";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <Mainpage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
