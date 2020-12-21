import React from "react";
import { Link } from "react-router-dom";
import "./LoginPage.css";

export default class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <h1 className="heyYall">
          Hey y'all! The login page is currently being built out. <br></br>
          In the meantime, enjoy exploring these sections of the LakeLifers
          site!
          <br></br>
          <br></br>
          <Link to="/gallery">
            <p>Gallery</p>
          </Link>
          <br></br>
          <Link to="/guestbook">
            <p>Guest Book</p>
          </Link>
          <br></br>
          <Link to="/recipebook">
            <p>Recipe Book</p>
          </Link>
          <br></br>
          <Link to="/leaderboard">
            <p>Leaderboard</p>
          </Link>
        </h1>
      </div>
    );
  }
}
