import React from "react";
import { Link } from "react-router-dom";

type GoodSideProps = {};

export default function GoodSide({}: GoodSideProps) {
  return (
    <div>
      <h1>Good Side</h1>
      <nav>
        <Link to="/">Home</Link>
        {"  "}
        <Link to="/goodside/animals">animals</Link>
      </nav>
    </div>
  );
}
