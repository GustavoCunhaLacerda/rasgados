type ImageProps = {
  url: string;
  alt?: string;
};

const Image = ({ url, alt }: ImageProps) => (
  <img
    draggable={false}
    style={{ width: "100%", height: "100%", position: "relative"}}
    src={url}
    alt={alt}
  />
);

export default Image;
