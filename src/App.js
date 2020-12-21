import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MainPage from "./components/MainPage/MainPage";
import LoginPage from "./components/auth/LoginPage";
import Gallery from "./components/Gallery/Gallery";
import Guestbook from "./components/Guestbook/Guestbook";
import Recipebook from "./components/Recipebook/Recipebook";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/guestbook">
          <Guestbook />
        </Route>
        <Route path="/recipebook">
          <Recipebook />
        </Route>
        <Route path="/leaderboard">
          <Leaderboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
