import React from "react";
import { Carousel, Container, Row } from "react-bootstrap";
import CarouselsStory from "../components/CarouselsStory";
import PublicNavbar from "../components/PublicNavbar";
import "../style/StoryPage.css";
import icon1 from "../images/res1.png";
import icon2 from "../images/res2.png";
import icon3 from "../images/res3.png";
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
                style={{ height: "60vh", width: "35vw" }}
                src="https://www.vn.therhythmsrestaurant.com/img-demo/utils/story.jpg"
                alt="food"
              />
            </div>
          </div>
        </Row>
      </Container>
      <Container>
        <Row>
          <div
            className="col mini-story d-flex"
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
            <p>Kiến trúc Retro sang trọng mang đậm nét Sài Gòn xưa</p>
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

      <div style={{ backgroundColor: "rgb(247, 241, 227)" }}>
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
            <img
              style={{
                width: "500px",
                height: "400px",
                marginTop: "50px",
                marginBottom: "70px",
              }}
              src="https://scontent.fvca1-1.fna.fbcdn.net/v/t1.0-9/127276761_400477531297173_4828146792317319777_o.jpg?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_ohc=lm_LVPkEb0MAX-W2S3k&_nc_ht=scontent.fvca1-1.fna&oh=d32577c8bf6f626c50a5b76f2cc49492&oe=6037FCE4"
            ></img>
          </div>
        </center>
      </div>
    </>
  );
};

export default StoryPage;
