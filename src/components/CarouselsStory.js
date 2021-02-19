// import { render } from "@testing-library/react";
import { Carousel } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import journey from "../images/journey.png";
const CarouselsStory = () => {
  // const [index, setIndex] = useState(0);

  // const handleSelect = (selectedIndex, e) => {
  //   setIndex(selectedIndex);
  // };

  // useEffect(() => {
  //   if (index != 0) setIndex(0);
  // }, [index]);

  return (
    <>
      <div
        style={{
          maxHeight: "600px",
          maxwidth: "100%",
        }}
        className="video-fluid z-depth-1"
      >
        <img
          style={{
            maxHeight: "660px",
            width: "100vw",
            objectFit: "cover",
          }}
          className="moreColor"
          src={journey}
          alt="First slide"
        />
      </div>
    </>
  );
};
// render(<Carousels />);

export default CarouselsStory;
