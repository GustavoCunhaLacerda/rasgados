import React from "react";
import { Link } from "react-router-dom";

type BadSideProps = {};

export default function BadSide({}: BadSideProps) {
  return (
    <div>
      <h1>Bad Side</h1>
      <nav>
        <Link to="/">Home</Link>
        {"  "}
        <Link to="/badside/threats">threats</Link>
      </nav>
    </div>
  );
}
