function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../assets", true, /\.(png|jpe?g|svg)$/),
);

export function getImage(imageName) {
  console.log('image name: ', imageName);
  return images
}
