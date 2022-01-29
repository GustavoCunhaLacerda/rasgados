import { useEffect, useState } from "react";

import AnimalAside from "../AnimalAside";
import ImageCarousel from "../ImageCarousel";
import Description from "../Description";

import styles from "./styles.module.scss";
import api from "../../api";

type InformationCardProps = {
  type: string; // animal or threat
  dataId: string; // nome do animal ou da ameaça
};

export default function InformationCard({
  type,
  dataId,
}: InformationCardProps) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function fetchData() {
      let response: any;
      if (type == "biome") response = (await api.biomes.get(dataId)).data;
      else if (type == "threat")
        response = (await api.threats.get(dataId)).data;
      else if (type == "animal")
        response = (await api.animals.get(dataId)).data;
      setData(response);
    }

    fetchData();
  }, []);

  if (!data) return <div></div>;
  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
          {/* // TODO: colocar animal aside aqui */}

          {/* <div> */}
            <ImageCarousel images={data.images} type={type} />
          {/* </div> */}
          <div className={styles.line}/>
          {/* <div style={{backgroundColor: 'red', height: '250px'}}> */}
            <Description text={data.description} />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
