import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimationOnScroll } from "react-animation-on-scroll";

import Header from "../../components/Header";
import ScrollButton from "../../components/ScrollButton";
import VisibilitySensor from "react-visibility-sensor";
import animateScrollTo from "animated-scroll-to";
import InformationCard from "../../components/InformationCard";

import { getImage } from "../../util/getImageFromName";

import background from "../../assets/background-images/Background-Tour.png";

import styles from "./styles.module.scss";
import api from "../../api";

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

    window.scrollTo(0, 0);
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
    // console.log(el);
    if (el) {
      // console.log("👌");
      animateScrollTo(el, {
        verticalOffset: -80,
        speed: 750,
      });
    }
  }

  if (loading) {
    return (
      <div>
        <p>loadings...</p>
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
                  offset={0}
                >
                  <div className={styles.mapContainer}>
                    <img
                      alt={data.name}
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
                </AnimationOnScroll>
              </div>
            </VisibilitySensor>
          )
        )}
      </div>
    </div>
  );
}
