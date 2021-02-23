import React from "react";
import { Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import Carousels from "../components/Carousels";
import SideMenu from "../components/SideMenu";
import CardAnimation from "../components/CardsAnimation";
import mainImg from "../images/mainImg.png";
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";
const MainPage = () => {
  const foods = useSelector((state) => state.food.foods);
  return (
    <>
      <div style={{ backgroundColor: "#f7f2e7" }}>
        <div>
          <img style={{ width: "100%" }} src={mainImg} />
        </div>

        <SideMenu />

        <MessengerCustomerChat
          pageId="150211800209794"
          appId="m.me/103840071695085"
        />
      </div>
    </>
  );
};

export default MainPage;
