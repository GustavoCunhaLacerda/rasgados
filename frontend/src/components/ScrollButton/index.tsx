import React from 'react';

import styles from './styles.module.scss';
import scrollDown from '../../assets/icons/ScrollDownRed.svg';

type ScrollButtonProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onScroll?: React.UIEventHandler<HTMLDivElement>;
};

export default function ScrollButton({ onClick, onScroll }: ScrollButtonProps) {
  return (
    <div onScroll={onScroll} className={styles.container} onClick={onClick}>
      <div className={styles.content}>
        <img src={scrollDown} alt='scroll-down-red' />
      </div>
    </div>
  );
}
