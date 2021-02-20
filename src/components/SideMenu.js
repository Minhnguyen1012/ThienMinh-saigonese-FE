import React, { useEffect, useRef, useState } from "react";
import { Card, CardGroup, Row, Col, Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import foodActions from "../redux/actions/food.actions";
import CardsAnimation from "./CardsAnimation";

const SideMenu = () => {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.food.foods);
  const [filter, setFilter] = useState("");
  let newFoods;
  if (foods) {
    console.log(foods[0]?.images[0]);
  }
  useEffect(() => {
    if (!filter) {
      dispatch(foodActions.foodsRequest());
    } else {
      dispatch(foodActions.getFoodByCategory(filter));
    }
  }, [dispatch, filter]);

  return (
    <Container fluid>
      <h1 className="text-menu mt-5 ml-5">{filter}</h1>
      <Row
        className="leftSide"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Col md={2}>
          <center className="sidebar">
            <p
              onClick={() => {
                setFilter("Vietnamese Cuisine");
                // console.log("setfilter");
              }}
            >
              <span>Vietname Cuisine</span>
            </p>
            <p onClick={() => setFilter("Tea")}>
              <span>Tea</span>
            </p>
            <p onClick={() => setFilter("Cafe")}>
              <span>Cafe</span>
            </p>
            <p onClick={() => setFilter("dessert")}>
              <span>Dessert</span>
            </p>
            <p onClick={() => setFilter("drink")}>
              <span>Drink</span>
            </p>
          </center>
        </Col>
        <Col md={10} className="border_right_before">
          {newFoods ? (
            <CardsAnimation newFoods={newFoods} />
          ) : (
            <CardsAnimation />
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default SideMenu;
