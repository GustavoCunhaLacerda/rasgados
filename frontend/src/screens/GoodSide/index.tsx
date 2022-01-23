import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import Header from '../../components/Header';
import ScrollButton from '../../components/ScrollButton';
import styles from './styles.module.scss';

import backgroundAmazonia from '../../assets/background-images/Background-Amazonia-2.png';
import backgroundCerrado from '../../assets/background-images/Background-Cerrado-2.png';
import backgroundCaatinga from '../../assets/background-images/Background-Caatinga-2.png';
import backgroundMataAtlantica from '../../assets/background-images/Background-MataAtlantica-2.png';
import backgroundPampa from '../../assets/background-images/Background-Pampa-2.png';
import backgroundPantanal from '../../assets/background-images/Background-Pantanal-2.png';
import background from '../../assets/background-images/Background-Tour.png';
import VisibilitySensor from 'react-visibility-sensor';
import animateScrollTo from 'animated-scroll-to';

type GoodSideProps = {};

export default function GoodSide({}: GoodSideProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [titleStack, setTitleStack] = useState<string[]>([]);

  const biomes = {
    amazonia: {
      title: 'Amazônia',
      image: backgroundAmazonia,
    },
    cerrado: {
      title: 'Cerrado',
      image: backgroundCerrado,
    },
    caatinga: {
      title: 'Caatinga',
      image: backgroundCaatinga,
    },
    mataAtlantica: {
      title: 'Mata Atlântica',
      image: backgroundMataAtlantica,
    },
    pampa: {
      title: 'Pampa',
      image: backgroundPampa,
    },
    pantanal: {
      title: 'Pantanal',
      image: backgroundPantanal,
    },
  };

  function changeTitle(biome: string, status: boolean) {
    if (status) {
      setTitleStack(prev => [...prev, biome]);
    } else {
      setTitleStack(prev => prev.filter(prevBiome => prevBiome !== biome));
    }
  }

  function getTitle() {
    return titleStack[titleStack.length - 1];
  }

  function scrollTo(el: HTMLElement | null) {
    console.log(el);
    if (el) {
      console.log('👌');
      animateScrollTo(el, {
        verticalOffset: -80,
        speed: 750,
      }).then(_ => {});
    }
  }

  return (
    <div className={styles.container}>
      <Header title={getTitle()}></Header>
      <div className={styles.background} style={{ backgroundImage: `url(${background})` }}>
        {Object.values(biomes).map((biome, i) => (
          <VisibilitySensor partialVisibility onChange={isVisible => changeTitle(biome.title, isVisible)} key={i}>
            <div className={styles.biomeContainer}>
              <AnimationOnScroll
                animateIn='animate__fadeIn'
                animateOut='animate__fadeOut'
                style={{ width: 'auto' }}
                // animatePreScroll={false}
                offset={0}
              >
                <div className={styles.mapContainer}>
                  <img src={biome.image} alt={biome.title} />
                  <ScrollButton onClick={() => scrollTo(document.getElementById(`card-${i}`))}></ScrollButton>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn='animate__fadeIn'
                animateOut='animate__fadeOut'
                style={{ width: '100%' }}
                offset={0}
              >
                <div className={styles.fakeCardContainer} id={`card-${i}`}>
                  <div className={styles.fakeCard}></div>
                </div>
              </AnimationOnScroll>
            </div>
          </VisibilitySensor>
        ))}
      </div>
    </div>
  );
}
