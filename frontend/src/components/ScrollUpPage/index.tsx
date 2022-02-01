import ScrollTopTop from 'react-scroll-up';
import { Icon } from '@mdi/react';
import { mdiChevronDoubleUp } from '@mdi/js';

import styles from './styles.module.scss';

export default function ScrollUpPage() {
  return (
    <ScrollTopTop showUnder={500}>
      <div className={styles.scrollUp}>
        <Icon path={mdiChevronDoubleUp} color='#fff'></Icon>
      </div>
    </ScrollTopTop>
  );
}
