import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

type HomeProps = {};

export default function Home({}: HomeProps) {
  return (
    <div id="Home">
      {/* <nav>
        <Link to="/">Home</Link>
        {"  "}
        <Link to="/goodside">goodside</Link>
        {"  "}
        <Link to="/badside">badside</Link>
      </nav> */}
      <div id="HomeTitle">
        <div className="container">{/* <img src=""/> */}</div>
        <div className="begin-tour"></div>
      </div>
    </div>
  );
}
