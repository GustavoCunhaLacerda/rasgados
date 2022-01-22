import { Icon } from '@mdi/react';
import { mdiChevronLeft } from '@mdi/js';
import { useNavigate } from 'react-router';

import styles from './styles.module.scss';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps) {
  const navigate = useNavigate();

  function goBack() {
    navigate(-1);
  }

  return (
    <div className={styles.container}>
      <div onClick={goBack}>
        <Icon path={mdiChevronLeft} size={2} className={styles.goBack}></Icon>
      </div>
      <h1>{title}</h1>
    </div>
  );
}
