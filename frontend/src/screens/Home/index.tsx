import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  StickyOut,
  ZoomIn,
} from 'react-scroll-motion';
import animateScrollTo from 'animated-scroll-to';

import ChoiceCard from '../../components/ChoiceCard';

// import "aos/dist/aos.css";
import styles from './styles.module.scss';
// import { mdiMouseMoveDown } from "@mdi/js";

import logo from '../../assets/icons/RasgadosLogo.svg';
import scrollDownWhite from '../../assets/icons/ScrollDownWhite.svg';

const FadeUp = batch(Fade(), Move(), Sticky());

type HomeProps = {};

export default function Home({}: HomeProps) {
  function scrollTo(el: HTMLElement | null) {
    console.log(el);
    if (el) {
      console.log('👌');
      animateScrollTo(el, {
        speed: 1000,
      }).then(_ => {});
    }
  }

  return (
    <div className={styles.homeBackground}>
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={batch(Fade(), StickyOut(), MoveIn(0, 100), MoveOut(0, -300))}>
            <div className={styles.landingContainer}>
              <div className={styles.titleBox}>
                <img src={logo} alt='logo' />
                <p>
                  um tour pela fauna em <br /> risco do brasil
                </p>
              </div>
              <div className={styles.beginTour} onClick={() => scrollTo(document.getElementById('page-1'))}>
                <p>iniciar tour</p>
                <img src={scrollDownWhite} alt='scrollDownWhite' />
              </div>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={batch(Fade(), StickyOut(), MoveIn(0, 100), MoveOut(0, -300))}>
            <div className={styles.choicesContainer} id='page-1'>
              <ChoiceCard route='goodside' />
              <ChoiceCard route='badside' />
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}
