function importImagesFromFolder() {
  function importAll(r: any) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context("../../assets/images/", true, /\.(png|jpe?g|svg)$/),
  );
  console.log(images);

  return images;
}

const IMAGES = importImagesFromFolder();

function filterData(filter: string) {
  return IMAGES.filter((image: string) => {
    return image.includes("/" + filter + "_");
  });
}

export default {
  animal: {
    get(animal: any) {
      return filterData(animal);
    },
  },
  threat: {
    get(threat: any) {
      return filterData(threat);
    },
  },
  biome: {
    get(biome: any) {
      return filterData(biome);
    },
  },
};
