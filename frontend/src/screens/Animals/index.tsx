import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";

type AnimalsProps = {};

export default function Animals({}: AnimalsProps) {
  const location = useLocation();
  const { biome } = location.state as any;

  return (
    <div>
      <Header title={biome} />
      <span>Hello World</span>
    </div>
  );
}
