import React from "react";
import "../style/Carousel3.css";
import { Carousel, Col, Container, Row } from "react-bootstrap";
import CarouselsStory from "../components/CarouselsStory";
import PublicNavbar from "../components/PublicNavbar";
import "../style/StoryPage.css";
import icon1 from "../images/res1.png";
import icon2 from "../images/res2.png";
import icon3 from "../images/res3.png";
import Carousels3 from "../components/Carousel-3";
import { Collapse } from "@material-ui/core";
const StoryPage = () => {
  return (
    <div
      style={{
        backgroundColor: "#ffffff",
      }}
    >
      <PublicNavbar />
      <CarouselsStory />
      <Container className="cover-center">
        <Row>
          <div className="story-card d-flex container mt-5">
            <div className="left-side">
              <h1> THE SAIGONESE</h1>
              <h3>Nơi thăng hoa của nền ẩm thực Việt</h3>
              <p>
                Từ những ngõ ngách ven đường tới nhà hàng sang trọng , những món
                ăn Việt từ lâu đã được "thổi hồn" bằng những thứ bình dị đơn sơ
                mộc mạc ở mảnh đất Sài Gòn này .
              </p>
            </div>
            <div className="right-side">
              <img
                style={{ height: "70vh", width: "35vw" }}
                src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/118357979_1307116959619780_112868968814683093_o.jpg?_nc_cat=106&ccb=3&_nc_sid=8bfeb9&_nc_ohc=pzeaclpCsPgAX82Lxn5&_nc_ht=scontent.fvca1-1.fna&oh=c505b0ce59a09bf2225cf15ea237c18b&oe=604BA8FE"
                alt="food"
              />
            </div>
          </div>
        </Row>
      </Container>
      <Container>
        <Row>
          <div
            className="col mini-story d-flex "
            style={{ flexDirection: "column" }}
          >
            <div>
              <img src={icon1} alt="food" />
            </div>

            <h2>Vị trí hoàn hảo</h2>
            <p>
              Là một trong những nhà hàng tọa lạc tại Zeist va cach không xa
              trung tâm của thành phố Utrecht
            </p>
          </div>
          <div
            className="col mini-story d-flex "
            style={{ flexDirection: "column" }}
          >
            <div>
              {" "}
              <img src={icon2} alt="food" />
            </div>

            <h2>Thiết kế Retro</h2>
            <p>Kiến trúc Retro sang trọng mang đậm nét Sài Gòn xưa.</p>
          </div>
          <div
            className="col mini-story d-flex "
            style={{ flexDirection: "column" }}
          >
            <div>
              <img src={icon3} alt="food" />
            </div>

            <h2>Nguyên liệu hảo hạng</h2>
            <p>
              Mọi thực phẩm tươi sống được nhập vào hàng ngày để đảm bảo chất
              lượng thực phẩm chế biến ở trạng thái tốt nhất
            </p>
          </div>
        </Row>
      </Container>

      <Container
        style={{
          backgroundColor: "rgb(247, 241, 227)",
          marginTop: "10vh",

          maxHeight: "400vh",
        }}
      >
        <Row className="textInRow ">
          <Col className="left-side-2 d-flex">
            <img
              style={{ height: "70vh", width: "30vw" }}
              src="https://scontent.fvca1-1.fna.fbcdn.net/v/t31.0-8/28161403_626139504384199_5097338243877788712_o.jpg?_nc_cat=102&ccb=3&_nc_sid=8bfeb9&_nc_ohc=wnrq2Mvgv-0AX8DV5BB&_nc_ht=scontent.fvca1-1.fna&oh=f67a4de747751ad0c44c3d09ec671f53&oe=6054154E"
              alt="food"
            />
            <Col className="right-side2 ">
              <h3>Giai điệu ẩm thực đầy thăng hoa từ “Tinh tuý thuần Việt”</h3>
              <p>
                Thành lập từ năm 2020 , The Saigonese với phương châm mang đến
                cho bạn những món ăn đậm đà hương vị Việt , xen lẫn những món ăn
                phá cách Á-Âu hiện đại . Hãy đến và cảm nhận rằng " The
                Saigonese " sẽ không làm bạn thất vọng ! Từ những nét phong lưu
                khoáng đãng của Sài Gòn xưa , chấm phá xen lẫn nét hương vị độc
                đáo đây ắt hẳn là nơi nâng tầm cho ẩm thực Việt - là nơi quảng
                bá bản giao hưởng ẩm thực đến tất cả mọi người !!!
              </p>
              <p>
                {" "}
                The Saigonese với 3 tiêu chí " Tinh Tế - Tinh Tuý - Tinh Hoa "
              </p>
            </Col>
          </Col>
        </Row>
      </Container>

      <Container>
        <center className="cake">
          <div>
            <div>
              <h6 className="h6">DECOR TRANG TRÍ BÁNH</h6>
              <h1>KỶ NIỆM SINH NHẬT</h1>
              <p>
                {" "}
                Một bữa tiệc ấm cùng với gia đình, bạn bè hay đồng nghiệp không
                thể thiếu những chiếc bánh lộng lẫy không kém phần hấp dẫn{" "}
              </p>
            </div>
            <Carousels3 />
          </div>
        </center>
      </Container>
    </div>
  );
};

export default StoryPage;
