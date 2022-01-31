import React, { useEffect, useState } from 'react';

import AnimalAside from '../AnimalAside';
import ImageCarousel from '../ImageCarousel';
import Description from '../Description';

import styles from './styles.module.scss';
import { Biome } from '../../api/biomes';
import { Threat } from '../../api/threats';
import { Animal } from '../../api/animals';

type InformationCardProps = {
  type: string;
  animal?: Animal;
  biome?: Biome;
  threat?: Threat;
};

export default function InformationCard({ type, animal, biome, threat }: InformationCardProps) {
  function getData(type: string) {
    const dataDecider: { [key: string]: Animal | Biome | Threat | undefined } = {
      animal: animal,
      biome: biome,
      threat: threat,
    };
    return dataDecider[type] ?? null;
  }

  return (
    <div className={styles.card}>
      {type === 'animal' ? (
        <div className={styles.animalContainer}>
          <AnimalAside animal={getData(type) as Animal} />
          <div className={styles.divider}></div>
          {/* <div className={styles.cardContent}>
            <ImageCarousel images={getData(type)?.images.map(image => image.path) ?? null} type={type} />
            <div className={styles.line} />
            <Description text={getData(type)?.description ?? null} />
          </div> */}
        </div>
      ) : (
        <div className={styles.cardContent}>
          <ImageCarousel images={getData(type)?.images.map(image => image.path) ?? null} type={type} />
          <div className={styles.line} />
          <Description text={getData(type)?.description ?? null} />
        </div>
      )}
    </div>
  );
}
