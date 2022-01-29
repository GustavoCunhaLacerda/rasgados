
import icone from "../../assets/icons/animals/amazonia/peixe-boi-2_Line+Color.svg";
import bgIcone from "../../assets/background-images/AnimalBackground-Amazonia.png";
import iconeCS from "../../assets/icons/conservation-state/VU.png";

import styles from "./styles.module.scss";

type AnimalAsideProps = {
  animalName: string;
};

type Animal = {
  name: string;
  scientificName: string;
  icon: string;
  biome: string;
  conservationStatus: string;
  conservationStatusIcon: string;
};

const animals: { [key: string]: Animal } = {
  "Peixe-Boi": {
    name: "Peixe-Boi-da-Amazônia",
    scientificName: "Trichechus inunguis",
    icon: "../../assets/icons/animals/amazonia/peixe-boi-2_Line+Color.svg",
    biome: "Amazônia",
    conservationStatus: "VU",
    conservationStatusIcon: "../../assets/icons/conservation-state/VU.png",
  },
};

const conservationStatusDict: { [key: string]: string } = {
  CR: "Criticamente em Perigo",
  EN: "Em Perigo",
  VU: "Vulnerável",
};

export default function AnimalAside({ animalName }: AnimalAsideProps) {
  const animal = animals[animalName];
  return (
    <div className={styles.container}>
      {/* <img src={require("" + animal.icon)} alt={`Ícone do ${animal.name}`}></img> */}
      <div className={styles.iconContainer} style={{ backgroundImage: `url(${bgIcone})` }}>
        <img src={icone} alt={`Ícone do ${animal.name}`} className={styles.icon} />
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.csContainer}>
          {/* <img
          src={require("" + animal.conservationStatusIcon)}
          alt={`Ícone Status de Conservação: ${conservationStatusDict[animal.conservationStatus]}`}
        /> */}
          <img
            src={iconeCS}
            alt={`Ícone Status de Conservação: ${conservationStatusDict[animal.conservationStatus]}`}
            className={styles.csIcon}
          />
          <span className={styles.csText}>{conservationStatusDict[animal.conservationStatus]}</span>
        </div>
        <span className={styles.name}>{animal.name.toUpperCase()}</span>
        <span className={styles.scientificName}>{animal.scientificName}</span>
      </div>
    </div>
  );
}
