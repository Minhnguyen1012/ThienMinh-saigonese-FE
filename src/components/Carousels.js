// import { render } from "@testing-library/react";
import { Carousel } from "react-bootstrap";
import React, { useEffect, useState } from "react";
// import hangrong from "../images/hang-rong.jpeg";
const Carousels = () => {
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
        <Carousel.Item style={{ background: "black" }}>
          <img
            style={{
              maxHeight: "660px",
              width: "100vw",
              objectFit: "cover",
              opacity: " 0.4 ",
            }}
            className="moreColor"
            src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/67814508_112935776718018_8909687086051753984_o.png?_nc_cat=100&ccb=2&_nc_sid=174925&_nc_ohc=01UibYlyGV8AX_cT_gn&_nc_ht=scontent.fvca1-2.fna&oh=1e20e89b1bbc973297a7f1449f8e4bdb&oe=602C20DD"
            alt="First slide"
          />
          <Carousel.Caption className="caption textBox">
            <h1 style={{ fontSize: "50px" }}>Câu Chuyện Của Chúng Tôi </h1>

            <p>Câu chuyện ẩm thực đầy sa hoa</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ background: "#000" }}>
          <img
            style={{
              maxHeight: "670px",
              width: "100vw",
              objectFit: "cover",
              opacity: " 0.65 ",
            }}
            className="moreColor "
            src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/120704147_356835122328081_5625372247513510637_o.jpg?_nc_cat=101&ccb=2&_nc_sid=730e14&_nc_ohc=pLrMn-OjnAUAX8FERG7&_nc_ht=scontent.fvca1-2.fna&oh=5b91a40a53132e60c0fe8583d7633731&oe=602BCC4B"
            alt="Second slide"
          />

          <Carousel.Caption className="caption textBox">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ background: "#000" }}>
          <img
            style={{
              maxHeight: "670px",
              width: "100vw",
              objectFit: "cover",
              opacity: "  0.65 ",
            }}
            className="moreColor"
            src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/101977439_266331174711810_7685097732619429305_o.jpg?_nc_cat=103&ccb=2&_nc_sid=730e14&_nc_ohc=IPPxUbAvICAAX_T3Swa&_nc_ht=scontent.fvca1-1.fna&oh=67105299e78bdbf3927d4f596b984914&oe=602EAFA9"
            alt="Third slide"
          />

          <Carousel.Caption className="caption textBox">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
// render(<Carousels />);

export default Carousels;
