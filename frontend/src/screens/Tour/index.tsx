import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { api } from '../../services/api';

import Header from '../../components/Header';
import ScrollButton from '../../components/ScrollButton';
import VisibilitySensor from 'react-visibility-sensor';
import animateScrollTo from 'animated-scroll-to';

import styles from './styles.module.scss';

import background from '../../assets/background-images/Background-Tour.png';

type Image = {
  id: number;
  path: string;
  name: string;
};

type Biome = {
  id: number;
  name: string;
  description: string;
  map: Image;
  images: Image[];
};
type Threat = Biome;

type TourProps = {
  type: 'good' | 'bad';
};

export default function Tour({ type }: TourProps) {
  const [biomes, setBiomes] = useState<Biome[]>([]);
  const [threats, setThreats] = useState<Threat[]>([]);

  useEffect(() => {
    switch (type) {
      case 'good':
        api.get('biomes/all').then(response => {
          setBiomes(response.data);
        });
        break;
      case 'bad':
        api.get('threats/all').then(response => {
          setThreats(response.data);
        });
        break;
      default:
        break;
    }
  }, [type]);

  const [titleStack, setTitleStack] = useState<string[]>([]);

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
        {Object.values(type === 'good' ? biomes : threats).map((data, i) => (
          <VisibilitySensor partialVisibility onChange={isVisible => changeTitle(data.name, isVisible)} key={i}>
            <div className={styles.pageContainer}>
              <AnimationOnScroll
                animateIn='animate__fadeIn'
                animateOut='animate__fadeOut'
                style={{ width: 'auto' }}
                // animatePreScroll={false}
                offset={0}
              >
                <div className={styles.mapContainer}>
                  <img src={`${process.env.REACT_APP_API_URL}/${data.map.path}`} alt={data.map.name} />
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
