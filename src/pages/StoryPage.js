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
    <>
      <PublicNavbar />
      <CarouselsStory />
      <Container className="cover-center">
        <Row>
          <div className="story-card d-flex container mt-5">
            <div className="left-side">
              <h1> THE SAIGONESE</h1>
              <h3>Giai điệu ẩm thực đầy thăng hoa từ “Tinh tuý thuần Việt”</h3>
              <p>
                Nâng tầm tinh túy ẩm thực Á - Âu đầy gợi nhớ, ký ức tuổi thơ,
                với các món ăn mang đậm bản sắc Việt từ những bữa cơm gia đình
                hay các món ăn truyền thống lâu đời tạo thành một chuyến hành
                trình đầy cảm xúc trong trải nghiệm của thực khách khi đến với
                The Saigonese.
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
              src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/135753231_428466738498252_929470227142106004_n.jpg?_nc_cat=111&ccb=2&_nc_sid=0debeb&_nc_ohc=Z0xKOD3glRMAX8_RtE0&_nc_ht=scontent.fvca1-1.fna&oh=597ccb6d722e0050ac3f0d0ac5aab201&oe=603C6E68"
              alt="food"
            />
            <Col className="right-side2 ">
              <h3>Giai điệu ẩm thực đầy thăng hoa từ “Tinh tuý thuần Việt”</h3>
              <p>
                Thành lập năm 2021 và là một trong những thương hiệu hàng đầu
                của La Sinfonía Hotels and Resorts Group, nhà hàng The Rhythms
                lấy cảm hứng từ những đặc tính cơ bản của âm nhạc, ngân lên một
                bản giao hưởng của ẩm thực Việt Nam chính hiệu, nhấn nhá với
                những nét kiến trúc đương đại, tinh tế đến từng chi tiết. Tọa
                lạc ở ngay trung tâm thủ đô Hà Nội với tầm nhìn tuyệt vời của hồ
                Hoàn Kiếm và Phố Cổ, nhà hàng The Rhythms đem lại một trải
                nghiệm ăn uống trọn vẹn, một sự hòa trộn hoàn hảo giữa di sản
                địa phương và phong cách hiện đại, các công thức nấu ăn cổ điển
                nâng tầm lên tiêu chuẩn quốc tế, với mong muốn tạo ra một cộng
                đồng người yêu ẩm thực - nơi cả người dân địa phương và bạn bè
                quốc tế có thể thưởng thức, trân trọng và quảng bá hương vị Việt
                Nam rộng khắp khu vực.
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
    </>
  );
};

export default StoryPage;
