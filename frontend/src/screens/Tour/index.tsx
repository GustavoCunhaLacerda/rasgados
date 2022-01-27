import { useEffect, useState } from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Header from "../../components/Header";
import ScrollButton from "../../components/ScrollButton";
import VisibilitySensor from "react-visibility-sensor";
import animateScrollTo from "animated-scroll-to";

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
import NavigationButton from "../../components/NavigationButton";

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
    },
    caca: {
      title: "Caça",
      image: backgroundCaca,
    },
    desmatamento: {
      title: "Desmatamento",
      image: backgroundDesmatamento,
    },
    ferrovia: {
      title: "Ferrovia",
      image: backgroundFerrovia,
    },
    hidreletrica: {
      title: "Hidrelétrica",
      image: backgroundHidreletrica,
    },
    lixo: {
      title: "Lixo",
      image: backgroundLixo,
    },
    queimada: {
      title: "Queimada",
      image: backgroundQueimada,
    },
    urbana: {
      title: "Urbana",
      image: backgroundUrbana,
    },
  };

  const biomes = {
    amazonia: {
      title: "Amazônia",
      image: backgroundAmazonia,
    },
    cerrado: {
      title: "Cerrado",
      image: backgroundCerrado,
    },
    caatinga: {
      title: "Caatinga",
      image: backgroundCaatinga,
    },
    mataAtlantica: {
      title: "Mata Atlântica",
      image: backgroundMataAtlantica,
    },
    pampa: {
      title: "Pampa",
      image: backgroundPampa,
    },
    pantanal: {
      title: "Pantanal",
      image: backgroundPantanal,
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
      }).then((_) => {});
    }
  }

  function isMale(w: string) {
    return w === "Cerrado" || w === "Pampa" || w === "Pantanal";
  }

  return (
    <div className={styles.container}>
      <Header title={getTitle()}></Header>
      <div className={styles.background} style={{ backgroundImage: `url(${background})` }}>
        {Object.values(type === "good" ? biomes : threats).map((data, i) => (
          <VisibilitySensor partialVisibility onChange={(isVisible) => changeTitle(data.title, isVisible)} key={i}>
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
                  <ScrollButton onClick={() => scrollTo(document.getElementById(`card-${i}`))}></ScrollButton>
                </div>
              </AnimationOnScroll>
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                animateOut="animate__fadeOut"
                style={{ width: "100%" }}
                offset={0}
              >
                <div className={styles.fakeCardContainer} id={`card-${i}`}>
                  <div className={styles.fakeCard}></div>
                  <div className={styles.containerButton}>
                    <NavigationButton
                      route="goodside/animals"
                      biome={data.title}
                      text={isMale(data.title) ? `Ver animais do ${data.title}` : `Ver animais da ${data.title}`}
                    />
                  </div>
                </div>
              </AnimationOnScroll>
            </div>
          </VisibilitySensor>
        ))}
      </div>
    </div>
  );
}
