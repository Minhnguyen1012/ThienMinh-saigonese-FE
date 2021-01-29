// import { render } from "@testing-library/react";
import { Carousel } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import video from "../images/HoChiMinh-City.mp4";
const CarouselsStory = () => {
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
        <Carousel.Item>
          <div
            style={{
              marginTop: "3.8rem",
              maxHeight: "600px",
              width: "100vw",
              objectFit: "cover",
            }}
            className="video-fluid z-depth-1"
          >
            {/* "https://www.youtube.com/embed/YIhR1E4hv84?autoplay=1" */}
            <iframe
              title="video"
              width="1270px"
              height="600px"
              src={video}
              frameborder="0"
              mute
              // allow="accelerometer; autoplay=1;muted=1; encrypted-media; gyroscope; picture-in-picture"
              allow="autoplay"
            ></iframe>
          </div>

          <Carousel.Caption className="caption ">
            <h1 style={{ fontSize: "50px" }}>Câu Chuyện Của Chúng Tôi </h1>

            <p>Câu chuyện ẩm thực đầy sa hoa</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};
// render(<Carousels />);

export default CarouselsStory;
