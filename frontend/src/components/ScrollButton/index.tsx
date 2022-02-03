import React, { useEffect, useState } from 'react';

import styles from './styles.module.scss';
import scrollDown from '../../assets/icons/ScrollDownRed.svg';

type ScrollButtonProps = {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  parentElId?: string;
};

export default function ScrollButton({ onClick, parentElId }: ScrollButtonProps) {
  const [parentEl, setParentEl] = useState<HTMLElement | null>(null);
  const [show, setShow] = useState(true);

  useEffect(() => {
    function handleOnScoll() {
      const viewportHeight = window.innerHeight;
      const currentScroll = window.scrollY;
      const relativeTop = parentEl?.offsetTop ?? 0;

      const heightFromTop = relativeTop - currentScroll;
      const inScreenHeight = viewportHeight - heightFromTop;
      setShow(inScreenHeight > viewportHeight * 0.4);
    }
    setParentEl(document.getElementById(parentElId ?? ''));

    if (parentEl) {
      window.addEventListener('scroll', handleOnScoll);
    }
  }, [parentEl, parentElId]);

  return (
    <div
      className={styles.container}
      onClick={onClick}
      style={!show ? { visibility: 'hidden', opacity: 0 } : { visibility: 'visible', opacity: 1 }}
    >
      <div className={styles.content}>
        <img src={scrollDown} alt='scroll-down-red' />
      </div>
    </div>
  );
}
