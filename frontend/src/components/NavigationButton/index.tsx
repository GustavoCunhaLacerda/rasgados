import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

import WhiteRightArrow from '../../assets/icons/arrow_forward_ios.svg';
type NavigationButtonProps = {
  route: string;
  text: string;
  buttonType: string;
};

export default function NavigationButton({ route, text, buttonType }: NavigationButtonProps) {
  return (
    <Link to={`/${route}`} className={styles.button} data-route={`${buttonType}`}>
      <span>{text}</span>
      <img src={WhiteRightArrow} alt='Seta para a direita' />
    </Link>
  );
}
