import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import animateScrollTo from 'animated-scroll-to';
import { TailSpin } from 'react-loader-spinner';

import Header from '../../components/Header';
import InformationCard from '../../components/InformationCard';
import ScrollUpPage from '../../components/ScrollUpPage';

import { Animal } from '../../api/animals';
import { Biome } from '../../api/biomes';
import { api } from '../../api';

import styles from './styles.module.scss';

import background from '../../assets/background-images/Background-Tour.png';

type AnimalsParams = {
  biomeId: string;
};

export default function Animals() {
  const params = useParams<AnimalsParams>();
  const biomeId = Number(params.biomeId);

  const [animals, setAnimals] = useState<Animal[]>();
  const [biome, setBiome] = useState<Biome>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setAnimals((await api.animals.getByBiome(biomeId)).data);
      setBiome((await api.biomes.get(biomeId)).data);

      setLoading(false);
    }

    fetchData();
  }, []);

  return loading ? (
    <TailSpin width={80} height={80} color='#e74c3c' wrapperClass={styles.loadingContainer} />
  ) : (
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
                <InformationCard type={'animal'} animal={animal} />
              </div>
            </AnimationOnScroll>
          </div>
        ))}
      </div>
      <ScrollUpPage />
    </div>
  );
}
