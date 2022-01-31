import { Animator, ScrollContainer, ScrollPage, batch, Fade, MoveIn, MoveOut } from 'react-scroll-motion';
import animateScrollTo from 'animated-scroll-to';

import ChoiceCard from '../../components/ChoiceCard';

import styles from './styles.module.scss';

import logo from '../../assets/icons/RasgadosLogo.svg';
import scrollDownWhite from '../../assets/icons/ScrollDownWhite.svg';

const FadeOut = batch(Fade(), MoveIn(0, 100), MoveOut(0, -300));

export default function Home() {
  function scrollTo(el: HTMLElement | null) {
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
          <Animator animation={FadeOut} className={styles.teste}>
            <div className={styles.landingContainer}>
              <div className={styles.titleBox}>
                <img src={logo} alt='logo' />
                <p>um tour pela fauna em risco do brasil</p>
              </div>
              <div className={styles.beginTour} onClick={() => scrollTo(document.getElementById('page-1'))}>
                <p>iniciar tour</p>
                <img src={scrollDownWhite} alt='scrollDownWhite' />
              </div>
            </div>
          </Animator>
        </ScrollPage>
        <ScrollPage page={1}>
          <Animator animation={FadeOut}>
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
