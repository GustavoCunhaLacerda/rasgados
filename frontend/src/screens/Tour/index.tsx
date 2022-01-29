import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";
import api from "../../api";

import Header from "../../components/Header";
import ScrollButton from "../../components/ScrollButton";
import VisibilitySensor from "react-visibility-sensor";
import animateScrollTo from "animated-scroll-to";
import InformationCard from "../../components/InformationCard";

import styles from "./styles.module.scss";

import background from "../../assets/background-images/Background-Tour.png";

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
  type: "good" | "bad";
};

export default function Tour({ type }: TourProps) {
  const [titleStack, setTitleStack] = useState<string[]>([]);

  const [animals, setAnimals] = useState<any>(null);
  const [biomes, setBiomes] = useState<any>(null);
  const [threats, setThreats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const animalsData = (await api.animals.list()).data;
      const biomesData = (await api.biomes.list()).data;
      const threatsData = (await api.threats.list()).data;

      setAnimals(animalsData);
      setBiomes(biomesData);
      setThreats(threatsData);
      setLoading(false);
    }

    fetchData();
  }, []);

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
    if (el) {
      console.log("👌");
      animateScrollTo(el, {
        verticalOffset: -80,
        speed: 750,
      });
    }
  }

  function isMale(w: string) {
    return w === "Cerrado" || w === "Pampa" || w === "Pantanal";
  }

  if (loading) {
    return (
      <div>
        <p>loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Header title={getTitle()}></Header>
      <div
        className={styles.background}
        style={{ backgroundImage: `url(${background})` }}
      >
        {Object.values(type === "good" ? biomes : threats).map(
          (data: any, i) => (
            <VisibilitySensor
              partialVisibility
              onChange={(isVisible) => changeTitle(data.name, isVisible)}
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
                    <img
                      src={`${process.env.REACT_APP_API_URL}/${data.map.path}`}
                      alt={data.map.name}
                    />
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
                    dataId={data.id}
                  />

                  {/* <div className={styles.containerButton}>
                    <NavigationButton
                      route="goodside/animals"
                      biome={data.title}
                      text={isMale(data.title) ? `Ver animais do ${data.title}` : `Ver animais da ${data.title}`}
                    />
                  </div> */}
                </AnimationOnScroll>
              </div>
            </VisibilitySensor>
          )
        )}
      </div>
    </div>
  );
}
