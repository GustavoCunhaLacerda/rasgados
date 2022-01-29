import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Header from "../../components/Header";
import ScrollButton from "../../components/ScrollButton";
import VisibilitySensor from "react-visibility-sensor";
import animateScrollTo from "animated-scroll-to";

import styles from "./styles.module.scss";

import background from "../../assets/background-images/Background-Tour.png";
import backgroundAmazonia from "../../assets/background-images/Background-Amazonia-2.png";
import backgroundCerrado from "../../assets/background-images/Background-Cerrado-2.png";
import backgroundCaatinga from "../../assets/background-images/Background-Caatinga-2.png";
import backgroundMataAtlantica from "../../assets/background-images/Background-MataAtlantica-2.png";
import backgroundPampa from "../../assets/background-images/Background-Pampa-2.png";
import backgroundPantanal from "../../assets/background-images/Background-Pantanal-2.png";

import AnimalAside from "../../components/AnimalAside";

type AnimalsProps = {};

export default function Animals({}: AnimalsProps) {
  const location = useLocation();
  const { biome } = location.state as any;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  function scrollTo(el: HTMLElement | null) {
    console.log(el);
    if (el) {
      animateScrollTo(el, {
        verticalOffset: -90,
        speed: 750,
      }).then((_) => {});
    }
  }

  const backgroundImages: { [key: string]: any } = {
    Amazônia: backgroundAmazonia,
    Cerrado: backgroundCerrado,
    Caatinga: backgroundCaatinga,
    "Mata Atlântica": backgroundMataAtlantica,
    Pampa: backgroundPampa,
    Pantanal: backgroundPantanal,
  };

  const biomeAnimals: { [key: string]: string[] } = {
    Amazônia: ["Harpia", "Peixe-Boi", "Boto-Cor-de-Rosa", "Onça-Pintada", "Mamaco-Aranha-de-Cara-Preta"],
    Cerrado: ["Lobo-Guará", "Gato-Maracajá", "Anta", "Cachorro Vinagre", "Morceguinho do Cerrado"],
    Caatinga: ["Tatu Bola", "Guidó-da-Caatinga", "Arara Azul de Laar", "Queixada", "Soldadinho do Araripe"],
    "Mata Atlântica": [
      "Sapinho-Admirável-da-Barriga-Vermelha",
      "Mico-Leão-Dourado",
      "Saíra-Militar",
      "Cágado-de-Hogei",
      "Preguiça de Coleira",
    ],
    Pampa: ["Gato dos Pampas", "Cardeal-Amarelo", "Lagartixa-das-Dunas", "Papagaio-Charão", "Cobra-Espada dos Pampas"],
    Pantanal: ["Ariranha", "Cervo-do-Pantanal", "Tamanduá-Bandeira", "Tiriba-do-Paranã", "Catita"],
  };

  return (
    <div className={styles.container}>
      <Header title={biome}></Header>
      <div className={styles.background} style={{ backgroundImage: `url(${background})` }}>
        {Object.entries(biomeAnimals[biome]).map(([_, animal], i) => (
          <div className={styles.pageContainer}>
            <AnimationOnScroll
              animateIn="animate__fadeIn"
              animateOut="animate__fadeOut"
              style={{ width: "100%" }}
              offset={0}
            >
              <div className={styles.fakeCardContainer} id={`card-${i}`}>
                <div className={styles.fakeCard}>
                  <div className={styles.animalAsideContainer}>
                    <AnimalAside animalName={"Peixe-Boi"} />
                  </div>
                  <div className={styles.divider}></div>
                  <div>
                    <span>Information Card</span>
                  </div>
                </div>
                <ScrollButton onClick={() => scrollTo(document.getElementById(`card-${i + 1}`))}></ScrollButton>
              </div>
            </AnimationOnScroll>
          </div>
        ))}
      </div>
    </div>
  );
}
