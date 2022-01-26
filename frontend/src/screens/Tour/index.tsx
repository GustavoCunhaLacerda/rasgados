import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Header from "../../components/Header";
import ScrollButton from "../../components/ScrollButton";
import VisibilitySensor from "react-visibility-sensor";
import animateScrollTo from "animated-scroll-to";
import InformationCard from "../../components/InformationCard";

import styles from "./styles.module.scss";

import backgroundAgropecuaria from "../../assets/background-images/Background-Agropecuaria-2.png";
import backgroundCaca from "../../assets/background-images/Background-Caca-2.png";
import backgroundDesmatamento from "../../assets/background-images/Background-Desmatamento-2.png";
import backgroundFerrovia from "../../assets/background-images/Background-Ferrovia-2.png";
import backgroundHidreletrica from "../../assets/background-images/Background-Hidreletrica-2.png";
import backgroundLixo from "../../assets/background-images/Background-Lixo-2.png";
import backgroundQueimada from "../../assets/background-images/Background-Queimada-2.png";
import backgroundUrbana from "../../assets/background-images/Background-Urbana-2.png";
import background from "../../assets/background-images/Background-Tour.png";

import backgroundAmazonia from "../../assets/background-images/Background-Amazonia-2.png";
import backgroundCerrado from "../../assets/background-images/Background-Cerrado-2.png";
import backgroundCaatinga from "../../assets/background-images/Background-Caatinga-2.png";
import backgroundMataAtlantica from "../../assets/background-images/Background-MataAtlantica-2.png";
import backgroundPampa from "../../assets/background-images/Background-Pampa-2.png";
import backgroundPantanal from "../../assets/background-images/Background-Pantanal-2.png";

type TourProps = {
  type: "good" | "bad";
};

export default function Tour({ type }: TourProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [titleStack, setTitleStack] = useState<string[]>([]);

  const threats = {
    agropecuaria: {
      title: "Agropecuária",
      image: backgroundAgropecuaria,
      dataLabel: "agropecuaria",
    },
    caca: {
      title: "Caça",
      image: backgroundCaca,
      dataLabel: "caca",
    },
    desmatamento: {
      title: "Desmatamento",
      image: backgroundDesmatamento,
      dataLabel: "desmatamento",
    },
    ferrovia: {
      title: "Ferrovia",
      image: backgroundFerrovia,
      dataLabel: "ferrovias_rodovias",
    },
    hidreletrica: {
      title: "Hidrelétrica",
      image: backgroundHidreletrica,
      dataLabel: "hidreletrica",
    },
    lixo: {
      title: "Lixo",
      image: backgroundLixo,
      dataLabel: "lixo",
    },
    queimada: {
      title: "Queimada",
      image: backgroundQueimada,
      dataLabel: "queimada",
    },
    urbana: {
      title: "Urbana",
      image: backgroundUrbana,
      dataLabel: "expansao_urbana",
    },
  };
  const biomes = {
    amazonia: {
      title: "Amazônia",
      image: backgroundAmazonia,
      dataLabel: "amazonia",
    },
    cerrado: {
      title: "Cerrado",
      image: backgroundCerrado,
      dataLabel: "cerrado",
    },
    caatinga: {
      title: "Caatinga",
      image: backgroundCaatinga,
      dataLabel: "caatinga",
    },
    mataAtlantica: {
      title: "Mata Atlântica",
      image: backgroundMataAtlantica,
      dataLabel: "mata_atlantica",
    },
    pampa: {
      title: "Pampa",
      image: backgroundPampa,
      dataLabel: "pampa",
    },
    pantanal: {
      title: "Pantanal",
      image: backgroundPantanal,
      dataLabel: "pantanal",
    },
  };

  function changeTitle(biome: string, status: boolean) {
    if (status) {
      setTitleStack((prev) => [...prev, biome]);
    } else {
      setTitleStack((prev) => prev.filter((prevBiome) => prevBiome !== biome));
    }
  }

  function getTitle() {
    return titleStack[titleStack.length - 1];
  }

  function scrollTo(el: HTMLElement | null) {
    console.log(el);
    if (el) {
      console.log("👌");
      animateScrollTo(el, {
        verticalOffset: -80,
        speed: 750,
      });
    }
  }

  return (
    <div className={styles.container}>
      <Header title={getTitle()}></Header>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${background})` }}
      >
        {Object.values(type === "good" ? biomes : threats).map((data, i) => (
          <VisibilitySensor
            partialVisibility
            onChange={(isVisible) => changeTitle(data.title, isVisible)}
            key={i}
          >
            <div className={styles.pageContainer}>
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                animateOut="animate__fadeOut"
                style={{ width: "auto" }}
                // animatePreScroll={false}
                offset={0}
              >
                <div className={styles.mapContainer}>
                  <img src={data.image} alt={data.title} />
                  <ScrollButton
                    onClick={() =>
                      scrollTo(document.getElementById(`card-${i}`))
                    }
                  ></ScrollButton>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                animateOut="animate__fadeOut"
                style={{ width: "100%" }}
                offset={0}
              >
                <InformationCard
                  type={type == "good" ? "biome" : "threat"}
                  dataLabel={data.dataLabel}
                />
              </AnimationOnScroll>
            </div>
          </VisibilitySensor>
        ))}
      </div>
    </div>
  );
}
