import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home";
import BadSide from "./screens/BadSide";
import GoodSide from "./screens/GoodSide";
import Animals from "./screens/Animals";
import Threats from "./screens/Threats";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/badside" element={<BadSide />} />
          <Route path="/goodside" element={<GoodSide />} />
          <Route path="/goodside/animals" element={<Animals />} />
          <Route path="/badside/threats" element={<Threats />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
