import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginPage from "./components/auth/LoginPage";
import Gallery from "./components/Gallery/Gallery";
import Guestbook from "./components/Guestbook/Guestbook";
import Recipebook from "./components/Recipebook/Recipebook";
import Leaderboard from "./components/Leaderboard/Leaderboard";
import MainPage1 from "./components/MainPage1/MainPage1";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
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
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/">
          <MainPage1 />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
