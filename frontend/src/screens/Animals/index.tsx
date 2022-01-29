import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import animateScrollTo from 'animated-scroll-to';

import { Animal } from '../../api/animals';
import { Biome } from '../../api/biomes';
import Header from '../../components/Header';
import ScrollButton from '../../components/ScrollButton';
import AnimalAside from '../../components/AnimalAside';
import api from '../../api';

import styles from './styles.module.scss';

import background from '../../assets/background-images/Background-Tour.png';
import InformationCard from '../../components/InformationCard';

type AnimalsParams = {
  biomeId: string;
};

export default function Animals() {
  const params = useParams<AnimalsParams>();
  const biomeId = Number(params.biomeId);

  const [animals, setAnimals] = useState<Animal[]>();
  const [biome, setBiome] = useState<Biome>();

  useEffect(() => {
    async function fetchData() {
      setAnimals((await api.animals.getByBiome(biomeId)).data);
      setBiome((await api.biomes.get(biomeId)).data);
    }

    fetchData();
  }, []);

  function scrollTo(el: HTMLElement | null) {
    if (el) {
      console.log('👌');
      animateScrollTo(el, {
        verticalOffset: -90,
        speed: 750,
      }).then(_ => {});
    }
  }

  return (
    <div className={styles.container}>
      <Header title={biome?.name ?? ''}></Header>
      <div className={styles.background} style={{ backgroundImage: `url(${background})` }}>
        {animals?.map((animal, i) => (
          <div className={styles.pageContainer} key={i}>
            <AnimationOnScroll
              animateIn='animate__fadeIn'
              animateOut='animate__fadeOut'
              style={{ width: '100%' }}
              offset={0}
            >
              <div className={styles.cardContainer}>
                <InformationCard type={'animal'} dataId={animal.id} />
              </div>

              {/* <ScrollButton onClick={() => scrollTo(document.getElementById(`card-${i + 1}`))}></ScrollButton> */}
            </AnimationOnScroll>
          </div>
        ))}
      </div>
    </div>
  );
}
