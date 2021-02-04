// import { render } from "@testing-library/react";
import { Carousel } from "react-bootstrap";
import React, { useEffect, useState } from "react";
// import hangrong from "../images/hang-rong.jpeg";
const Test = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    if (index != 0) setIndex(0);
  }, [index]);

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item style={{ background: "#000" }}>
          <img
            style={{
              maxHeight: "670px",
              width: "100vw",
              objectFit: "cover",
              opacity: " 0.65 ",
            }}
            className="moreColor"
            src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/67814508_112935776718018_8909687086051753984_o.png?_nc_cat=100&ccb=2&_nc_sid=174925&_nc_ohc=01UibYlyGV8AX_cT_gn&_nc_ht=scontent.fvca1-2.fna&oh=1e20e89b1bbc973297a7f1449f8e4bdb&oe=602C20DD"
            alt="First slide"
          />
          <div style={{ backgroundColor: "white", bottom: "0", top: "70vh" }}>
            <h1 style={{ fontSize: "50px" }}>Câu Chuyện Của Chúng Tôi </h1>

            <p>Câu chuyện ẩm thực đầy sa hoa</p>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
// render(<Carousels />);

export default Test;
