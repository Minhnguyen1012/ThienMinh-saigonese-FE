import React from "react";
import { Container, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import Carousels from "../components/Carousels";

const MainPage = () => {
  const foods = useSelector((state) => state.food.foods);
  return (
    <>
      <Carousels />

      <Container>
        <div>
          <h1 className="text-menu">Vietname Cuisine</h1>

          <hr />
        </div>
        <div>
          <h1 className="text-menu">Tea</h1>
          <hr />
        </div>
        <div>
          <h1 className="text-menu">Cafe</h1>
          <hr />
        </div>
        <div>
          <h1 className="text-menu">Dessert</h1>
          <hr />
        </div>
        <div>
          <h1 className="text-menu">Drink</h1>
          <hr />
        </div>
      </Container>
    </>
  );
};

export default MainPage;
