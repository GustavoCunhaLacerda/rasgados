import { useEffect, useState } from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import VisibilitySensor from 'react-visibility-sensor';
import animateScrollTo from 'animated-scroll-to';
import { TailSpin } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import Header from '../../components/Header';
import ScrollButton from '../../components/ScrollButton';
import InformationCard from '../../components/InformationCard';
import { api } from '../../api';
import { Biome } from '../../api/biomes';
import { Threat } from '../../api/threats';
import NavigationButton from '../../components/NavigationButton';
import Image from '../../components/Image';

import styles from './styles.module.scss';

import background from '../../assets/background-images/Background-Tour.png';

type TourProps = {
  type: 'good' | 'bad';
};

export default function Tour({ type }: TourProps) {
  const [titleStack, setTitleStack] = useState<string[]>([]);

  const [biomes, setBiomes] = useState<Biome[]>([]);
  const [threats, setThreats] = useState<Threat[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const biomesData = (await api.biomes.list()).data;
      const threatsData = (await api.threats.list()).data;

      setBiomes(biomesData);
      setThreats(threatsData);
      setLoading(false);
    }

    fetchData();
  }, []);

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
    if (el) {
      animateScrollTo(el, {
        verticalOffset: -80,
        speed: 750,
      });
    }
  }

  function handleButtonText(biome: string) {
    return ['Cerrado', 'Pampa', 'Pantanal'].includes(biome) ? `Ver animais do ${biome}` : `Ver animais da ${biome}`;
  }

  return loading ? (
    <TailSpin width={80} height={80} color='#e74c3c' wrapperClass={styles.loadingContainer} />
  ) : (
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
                  <Image url={`${process.env.REACT_APP_API_URL}/${data.map.path}`} alt={data.map.name} />
                  <ScrollButton onClick={() => scrollTo(document.getElementById(`card-${i}`))}></ScrollButton>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn='animate__fadeIn'
                animateOut='animate__fadeOut'
                style={{ width: 'auto' }}
                offset={0}
              >
                <div className={styles.cardContainer}>
                  {type === 'good' ? (
                    <>
                      <InformationCard type={'biome'} biome={data} />
                      <div className={styles.containerButton}>
                        <NavigationButton
                          route={`goodside/animals/biome/${data.id}`}
                          text={handleButtonText(data.name)}
                          buttonType='animals'
                        />
                      </div>
                    </>
                  ) : (
                    <InformationCard type={'threat'} threat={data} />
                  )}
                </div>
              </AnimationOnScroll>
            </div>
          </VisibilitySensor>
        ))}
      </div>
    </div>
  );
}
