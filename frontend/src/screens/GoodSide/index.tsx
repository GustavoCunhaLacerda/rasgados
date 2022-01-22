import { Link } from 'react-router-dom';
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  Sticky,
  batch,
  Fade,
  StickyOut,
  MoveIn,
  MoveOut,
} from 'react-scroll-motion';

import Header from '../../components/Header';
import styles from './styles.module.scss';
import backgroundAmazonia from '../../assets/background-images/Background-Amazonia.png';

type GoodSideProps = {};

// const FadeOut = batch(Fade(), StickyOut(), MoveIn(0, 100), MoveOut(0, -300));
const FadeOut = batch(Fade(), MoveIn(0, 100), MoveOut(0, -300));

export default function GoodSide({}: GoodSideProps) {
  const biome = 'amazônia';

  return (
    <div className={styles.container}>
      <Header title={biome}></Header>
      <div className={styles.imageContainer}>
        <img src={backgroundAmazonia} alt='fjdlskg' />
      </div>
    </div>
  );
}
