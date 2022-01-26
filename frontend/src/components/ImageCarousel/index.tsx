import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type ImageCarouselProps = {
  images: any | string[];
  type: any | string;
};

export default function ImageCarousel({ images, type }: ImageCarouselProps) {
  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div>
      {images ? (
        <Carousel
          swipeable={true}
          draggable={true}
          infinite={true}
          responsive={responsive}
        >
          {images.map((img: string, index: number) => {
            return (
              <div key={index} style={{ width: 400, height: 400 }}>
                <img src={img} style={{ objectFit: "cover" }} />
              </div>
            );
          })}
        </Carousel>
      ) : null}
    </div>
  );
}
