import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import sport from "../assets/images/sports.jpg";
import sport1 from "../assets/images/sports1.jpg";
import sport2 from "../assets/images/sports6.jpg";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sport}
          alt="First slide"
          style={{ height: "196px" }}
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sport1}
          alt="Second slide"
          style={{ height: "196px" }}
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={sport2}
          alt="Third slide"
          style={{ height: "196px" }}
        />

        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
