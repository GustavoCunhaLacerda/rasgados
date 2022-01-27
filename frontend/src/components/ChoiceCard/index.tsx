import { Link } from "react-router-dom";
import { Icon } from "@mdi/react";
import { mdiChevronRight } from "@mdi/js";

import styles from "./styles.module.scss";

import amazoniaGood from "../../assets/background-images/Amazonia-Good.png";
import amazoniaBad from "../../assets/background-images/Amazonia-Bad.png";
import NavigationButton from "../NavigationButton";

type ChoiceCardProps = {
  route: string;
};

type Choices = {
  goodside: any;
  badside: any;
};

export default function ChoiceCard({ route }: ChoiceCardProps) {
  function imageFromRoute(route: keyof Choices) {
    const choices: Choices = {
      goodside: amazoniaGood,
      badside: amazoniaBad,
    };

    return choices[route];
  }

  return (
    <div className={styles.card} data-route={`${route}`}>
      <div className={styles.containerImage} data-route={`${route}`}>
        <img src={imageFromRoute(route as keyof Choices)} alt={`${route}`} />
      </div>
      <div className={styles.containerFooter}>
        <NavigationButton route={route} text="INICIAR" />
      </div>
    </div>
  );
}
