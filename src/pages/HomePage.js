import PublicNavbar from "../components/PublicNavbar";

import React, { useEffect } from "react";
import Carousels from "../components/Carousels";
import Cards from "../components/Cards";
import { Button, Container } from "react-bootstrap";
import HoverRating from "../components/HoverRating";
import homeImage from "../images/homeImage.jpeg";
import foodActions from "../redux/actions/food.actions";
import { useDispatch, useSelector } from "react-redux";
import MessengerCustomerChat from "react-messenger-customer-chat";
const Homepage = () => {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.food.foods);
  if (foods) {
    console.log(foods[0]?.images[0]);
  }
  useEffect(() => {
    dispatch(foodActions.foodsRequest());
  }, [dispatch]);

  return (
    <>
      <PublicNavbar />
      <Carousels />
      <div className="d-flex justify-content-between ml-5 mt-5 mr-5">
        <h1 className="text-menu">Menu</h1>
        <div>
          <Button
            className="mt-4"
            style={{
              height: "45px",
              backgroundColor: "#aa9765",
              border: "none",
            }}
          >
            All products
          </Button>
        </div>
      </div>
      <Container>
        <Cards />
      </Container>
      <MessengerCustomerChat
        pageId="150211800209794"
        appId="m.me/103840071695085"
      />

      <HoverRating />
    </>
  );
};

export default Homepage;
