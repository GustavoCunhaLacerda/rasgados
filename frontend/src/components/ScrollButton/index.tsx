import React from 'react';

import styles from './styles.module.scss';
import scrollDown from '../../assets/icons/ScrollDownRed.svg';

type ScrollButtonProps = {
  onClick: React.MouseEventHandler<HTMLDivElement> | undefined;
};

export default function ScrollButton({ onClick }: ScrollButtonProps) {
  return (
    <div className={styles.container} onClick={onClick}>
      <img src={scrollDown} alt='scroll-down-red' />
    </div>
  );
}
