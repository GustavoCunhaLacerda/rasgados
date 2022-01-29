import React, { useEffect, useState } from 'react';

import AnimalAside from '../AnimalAside';
import ImageCarousel from '../ImageCarousel';
import Description from '../Description';

import styles from './styles.module.scss';
import api from '../../api';
import { Biome } from '../../api/biomes';
import { Threat } from '../../api/threats';
import { Animal } from '../../api/animals';

type InformationCardProps = {
  type: string; // animal or threat
  dataId: number; // nome do animal ou da ameaça
};

export default function InformationCard({ type, dataId }: InformationCardProps) {
  const [animal, setAnimal] = useState<Animal>();
  const [biome, setBiome] = useState<Biome>();
  const [threat, setThreat] = useState<Threat>();
  const [loading, setLoading] = useState(true);

  function getData(type: string) {
    const dataDecider: { [key: string]: Animal | Biome | Threat | undefined } = {
      animal: animal,
      biome: biome,
      threat: threat,
    };
    return dataDecider[type] ?? null;
  }

  useEffect(() => {
    async function fetchData() {
      switch (type) {
        case 'animal':
          setAnimal((await api.animals.getOne(dataId)).data);
          break;
        case 'threat':
          setThreat((await api.threats.get(dataId)).data);
          break;
        case 'biome':
          setBiome((await api.biomes.get(dataId)).data);
          break;
      }
      setLoading(false);
    }

    fetchData();
  }, []);

  useEffect(() => {
    console.log('threat', threat);
  }, [threat]);

  if (loading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        {type === 'animal' ? (
          <>
            <AnimalAside animal={getData(type) as Animal} />
            <div className={styles.divider}></div>
          </>
        ) : null}
        <ImageCarousel images={getData(type)?.images.map(image => image.path) ?? null} type={type} />
        <div className={styles.line} />
        <Description text={getData(type)?.description ?? null} />
        {/* </div> */}
      </div>
    </div>
  );
}
