import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

const AmazoniaGood = require("../../assets/icons/Amazonia-Good.svg");
const AmazoniaBad = require("../../assets/icons/Amazonia-Bad.svg");

type ChoiceCardProps = {
  route: string;
};

export default function ChoiceCard({ route }: ChoiceCardProps) {
  return (
    <div id="ChoiceCard">
      <div className="card">
        <div className={`container-img container-img-${route}`}>
          <img
            className={"card-img"}
            // src={
            //   route === "goodside" ? AmazoniaGood.default : AmazoniaBad.default
            // }
          />
        </div>
        {/*
          // TODO: esse link será um componente
        */}
        <div className={`container-button`}>
          <Link
            to={`/${route}`}
            className={`nav-button nav-button-${route}`}
          >
            INICIAR
          </Link>
        </div>
      </div>
    </div>
  );
}
