import { useEffect, useState } from "react";

import AnimalAside from "../AnimalAside";
import ImageCarousel from "../ImageCarousel";
import Description from "../Description";

import fake_api from "./fake_api";

import styles from "./styles.module.scss";

type InformationCardProps = {
  type: string; // animal or threat
  dataLabel: string; // nome do animal ou da ameaça
};

export default function InformationCard({
  type,
  dataLabel,
}: InformationCardProps) {
  const [data, setData] = useState<null | object>(null);

  const [images, setImages] = useState<null | string[]>(null);
  const [descriptionText, setDescriptionText] = useState<null | string>(null);

  useEffect(() => {
    // TODO: realizar a requisição dos dados necessários aqui:
    // const response = api[type].get(dataLabel)
    // setData(response.data);
    // setImages(response.data.images);
    // setDescriptionText(response.data.desciption);

    console.warn(type);
    let images =
      type == "animal"
        ? fake_api.animal.get(dataLabel)
        : type == "biome"
        ? fake_api.biome.get(dataLabel)
        : type == "threat"
        ? fake_api.threat.get(dataLabel)
        : null;

    setImages(images);
    setDescriptionText(
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    );
  }, []);

  return (
    <div className={styles.fakeCardContainer}>
      {type == "animal" ? <AnimalAside animal={dataLabel} /> : null}
      <div className={styles.fakeCard}>
        <ImageCarousel images={images} type={type}/>
        <Description text={descriptionText}/>
      </div>
    </div>
  );
}
