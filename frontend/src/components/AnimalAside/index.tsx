import iconVU from '../../assets/icons/conservation-state/VU.png';
import iconEN from '../../assets/icons/conservation-state/EN.png';
import iconCR from '../../assets/icons/conservation-state/CR.png';

import bgAmazoniaIcon from '../../assets/background-images/AnimalBackground-Amazonia.png';
import bgCaatingaIcon from '../../assets/background-images/AnimalBackground-Caatinga.png';
import bgCerradoIcon from '../../assets/background-images/AnimalBackground-Cerrado.png';
import bgMataAtlanticaIcon from '../../assets/background-images/AnimalBackground-MataAtlantica.png';
import bgPampaIcon from '../../assets/background-images/AnimalBackground-Pampa.png';
import bgPantanalIcon from '../../assets/background-images/AnimalBackground-Pantanal.png';

import styles from './styles.module.scss';
import { Animal } from '../../api/animals';
import { useEffect } from 'react';

type AnimalAsideProps = {
  animal: Animal;
};

const conservationStatusDecider: { [key: string]: { name: string; icon: any } } = {
  CR: {
    name: 'Criticamente em Perigo',
    icon: iconCR,
  },
  EN: {
    name: 'Em Perigo',
    icon: iconEN,
  },
  VU: {
    name: 'Vulnerável',
    icon: iconVU,
  },
};

const animalBackgroundDecider: { [key: string]: any } = {
  Amazônia: bgAmazoniaIcon,
  Caatinga: bgCaatingaIcon,
  Cerrado: bgCerradoIcon,
  'Mata Atlântica': bgMataAtlanticaIcon,
  Pampa: bgPampaIcon,
  Pantanal: bgPantanalIcon,
};

export default function AnimalAside({ animal }: AnimalAsideProps) {
  useEffect(() => {
    console.log(animal);
  }, []);
  return (
    <div className={styles.container}>
      <div
        className={styles.iconContainer}
        style={{ backgroundImage: `url(${animalBackgroundDecider[animal.biome.name]})` }}
      >
        <img
          src={`${process.env.REACT_APP_API_URL}/${animal.icon.path}`}
          alt={`Ícone do ${animal.name}`}
          className={styles.icon}
        />
      </div>
      <div className={styles.csContainer}>
        <img
          src={conservationStatusDecider[animal.conservationStatus].icon}
          alt={`Ícone Status de Conservação: ${conservationStatusDecider[animal.conservationStatus].name}`}
          className={styles.csIcon}
        />
        <span className={styles.csText}>{conservationStatusDecider[animal.conservationStatus].name}</span>
      </div>
      <span className={styles.name}>{animal.name.toUpperCase()}</span>
      <span className={styles.scientificName}>{animal.cientificName}</span>
    </div>
  );
}
