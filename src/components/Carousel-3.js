// import { render } from "@testing-library/react";
import { Carousel, Container } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import video from "../images/HoChiMinh-City.mp4";
const Carousels3 = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // useEffect(() => {
  //   if (index != 0) setIndex(0);
  // }, [index]);

  return (
    <>
      <Carousel className="carol" style={{ width: "700px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.vn.therhythmsrestaurant.com/img-demo/events/7.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.vn.therhythmsrestaurant.com/img-demo/events/Company02.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Carousels3;
