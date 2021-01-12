import React from "react";
import "./Leaderboard.css";

function Leaderboard() {
  return (
    <div>
      <h1>Leaderboard</h1>
      <div id="poker">
        <h3>Poker</h3>
        <h4>Winner: Laura Deck</h4>
        <p>Score: A MOUNTAIN of chips</p>
        <p>
          Quote of the game: <em>"I swear, I've never played this before!"</em>{" "}
          - Laura Deck as she sharked the whole table
        </p>
      </div>

      <div id="hearts">
        <h3>Hearts</h3>
        <h4>Winner: Jake Millhouse</h4>
        <p>Score: 23</p>
        <p>
          Quote of the game:{" "}
          <em>"You can't break hearts until they're broken."</em> - Dave Deck to
          the group in a fit of confusion
        </p>
      </div>

      <div id="monopoly">
        <h3>Monopoly</h3>
        <h4>Winner: Jake Millhouse</h4>
        <p>Score: Utter Devastation</p>
        <p>
          Quote of the game:{" "}
          <em>"James, you need to think about selling him that property..."</em>
          - David Millhouse to James Millhouse right before selling Park Place
          to match Jake's Boardwalk
        </p>
      </div>

      <div id="canasta">
        <h3>Canasta</h3>
        <h4>Winner: Jenna Hopp and Dave Deck</h4>
        <p>Score: 5064</p>
        <p>
          Quote of the game: <em>"Mom I will never forgive you for this!"</em> -
          Jake Millhouse to Laura Deck after a tragic forfeiture of a crucial
          ten of hearts
        </p>
      </div>
    </div>
  );
}

export default Leaderboard;
