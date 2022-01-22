import { Link } from 'react-router-dom';
import { Icon } from '@mdi/react';
import { mdiChevronRight } from '@mdi/js';

import styles from './styles.module.scss';

import amazoniaGood from '../../assets/icons/Amazonia-Good.svg';
import amazoniaBad from '../../assets/icons/Amazonia-Bad.svg';

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
    <div id='ChoiceCard'>
      <div className={styles.card} data-route={`${route}`}>
        <div className={styles.containerImage} data-route={`${route}`}>
          <img src={imageFromRoute(route as keyof Choices)} alt={`${route}`} />
        </div>
        {/*
          // TODO: esse link será um componente
        */}
        <div className={styles.containerFooter}>
          <Link to={`/${route}`} className={styles.footerButton} data-route={`${route}`}>
            <span>INICIAR</span>
            <Icon path={mdiChevronRight} size={1.5} color='#fff'></Icon>
          </Link>
        </div>
      </div>
    </div>
  );
}
