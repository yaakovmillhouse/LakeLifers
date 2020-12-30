import React from "react";
import { Link } from "react-router-dom";
import "./MainPage.css";

function MainPage1() {
  return (
    <div id="myVideo">
      <mask id="mask">
        <video width="100%" height="auto" autoPlay loop muted>
          <source src="assets/video.mov" type="video/mp4"></source>
        </video>
      </mask>

      <div className="content">
        <div id="entry">
          <Link to="/dashboard" id="signIn">
            <p>Sign In</p>
          </Link>
        </div>
        <h1 id="heyThere">Hey there, LakeLifers!</h1>
        <h4>
          <em>Welcome to your site!</em>
        </h4>
      </div>
    </div>
  );
}

export default MainPage1;
