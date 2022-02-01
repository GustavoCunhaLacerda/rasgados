import styles from './styles.module.scss';

import amazoniaGood from '../../assets/background-images/Amazonia-Good.png';
import amazoniaBad from '../../assets/background-images/Amazonia-Bad.png';
import NavigationButton from '../NavigationButton';

type ChoiceCardProps = {
  route: string;
};

export default function ChoiceCard({ route }: ChoiceCardProps) {
  function imageFromRoute(route: string) {
    const choices: { [key: string]: any } = {
      goodside: amazoniaGood,
      badside: amazoniaBad,
    };

    return choices[route] ?? null;
  }

  return (
    <div className={styles.card} data-route={`${route}`}>
      <div className={styles.containerImage} data-route={`${route}`}>
        <img src={imageFromRoute(route)} alt={`${route}`} />
      </div>
      <div className={styles.containerFooter}>
        <NavigationButton route={route} text='iniciar' buttonType={route} />
      </div>
    </div>
  );
}
