import React, { useEffect } from "react";
import { Card, CardGroup, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import foodActions from "../redux/actions/food.actions";
import CardsAnimation from "./CardsAnimation";

const SideMenu = () => {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.food.foods);
  if (foods) {
    console.log(foods[0]?.images[0]);
  }
  useEffect(() => {
    dispatch(foodActions.foodsRequest());
  }, [dispatch]);
  return (
    <div>
      <Row className="leftSide">
        <Col md={2} className="sidebar">
          <center>
            <a href="#">
              <span>Vietname Cuisine</span>
            </a>
            <a href="#">
              <span>Tea</span>
            </a>
            <a href="#">
              <span>Cafe</span>
            </a>
            <a href="#">
              <span>Dessert</span>
            </a>
            <a href="#">
              <span>Drink</span>
            </a>
          </center>
        </Col>
        <Col className="rightSide ">
          <CardsAnimation />
        </Col>
      </Row>
    </div>
  );
};

export default SideMenu;
