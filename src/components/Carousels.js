// import { render } from "@testing-library/react";
import { Carousel } from "react-bootstrap";
import React, { useEffect, useState } from "react";
// import hangrong from "../images/hang-rong.jpeg";
const Carousels = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // useEffect(() => {
  //   if (index != 0) setIndex(0);
  // }, [index]);

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
            src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/67814508_112935776718018_8909687086051753984_o.png?_nc_cat=100&ccb=3&_nc_sid=174925&_nc_ohc=4_c75Ig_eBAAX_XaHfh&_nc_ht=scontent.fvca1-2.fna&oh=1b26d002c6f415871526e6e2281dc69c&oe=6053ADDD"
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
            src="https://scontent-hkg4-2.xx.fbcdn.net/v/t1.0-9/118528750_1310786412586168_1268443967326834178_o.jpg?_nc_cat=110&ccb=3&_nc_sid=8bfeb9&_nc_ohc=PtdL8JeW5MsAX_z1YxA&_nc_ht=scontent-hkg4-2.xx&oh=92265ffba709188660740ece0ed1d8ca&oe=60502039"
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
            src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/67731310_112936263384636_3138675968642646016_o.png?_nc_cat=103&ccb=3&_nc_sid=e3f864&_nc_ohc=5WMMT5Ywd1IAX-hLD2G&_nc_ht=scontent.fvca1-1.fna&oh=880bd17bf0513370d77e36d69a466944&oe=6054D111"
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
