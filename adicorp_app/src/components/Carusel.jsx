import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ControlledCarousel({images}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel  interval={null} activeIndex={index} onSelect={handleSelect}>
      {images.map((imag) => (
        <Carousel.Item key={imag.id}>
          <img src={imag.image} alt="image" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ControlledCarousel;
