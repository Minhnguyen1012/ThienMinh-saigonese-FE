import React from "react";
import { Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import Carousels from "../components/Carousels";
import SideMenu from "../components/SideMenu";
import CardAnimation from "../components/CardsAnimation";
import mainImg from "../images/mainImg.png";
const MainPage = () => {
  const foods = useSelector((state) => state.food.foods);
  return (
    <div style={{ marginBottom: "30px" }}>
      <div>
        <img style={{ width: "100%" }} src={mainImg} />
      </div>
      <SideMenu />
    </div>
  );
};

export default MainPage;
