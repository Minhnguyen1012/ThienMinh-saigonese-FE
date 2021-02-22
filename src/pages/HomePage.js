import PublicNavbar from "../components/PublicNavbar";

import React, { useEffect } from "react";
import Carousels from "../components/Carousels";
import Cards from "../components/Cards";
import { Button, Card, Container } from "react-bootstrap";
import HoverRating from "../components/HoverRating";
import homeImage from "../images/homeImage.jpeg";
import foodActions from "../redux/actions/food.actions";
import { useDispatch, useSelector } from "react-redux";
import MessengerCustomerChat from "react-messenger-customer-chat";
import ReviewForm from "../components/ReviewForm";
import { Link, useHistory } from "react-router-dom";
const Homepage = () => {
  const dispatch = useDispatch();
  const foods = useSelector((state) => state.food.foods);
  if (foods) {
    console.log(foods[0]?.images[0]);
  }
  const history = useHistory();
  useEffect(() => {
    dispatch(foodActions.foodsRequest());
  }, [dispatch]);

  return (
    <div>
      <PublicNavbar />
      <div className="brand">
        <div className="open">
          <h2
            className="center-brand-name"
            style={{ color: "white", fontSize: "100px" }}
          >
            Saigonese
          </h2>
          <button className="cta-add" onClick={() => history.push("/menu")}>
            Menu
          </button>
        </div>
      </div>

      <img
        className="home"
        style={{ width: "100%", height: "690px" }}
        src="https://scontent.fvca1-2.fna.fbcdn.net/v/t1.0-9/66709012_969069066757906_6377146709293662208_o.jpg?_nc_cat=100&ccb=3&_nc_sid=2c4854&_nc_ohc=UWYJcVb-0ksAX-XEytN&_nc_ht=scontent.fvca1-2.fna&oh=11ebb29065e4632688d3d1494bac18ab&oe=6057712D"
        alt="home"
      />
      {/* <Carousels />

      <div className="d-flex justify-content-between ml-5 mt-5 mr-5">
        <h1 className="text-menu">Menu</h1>
  
      </div>
     */}
      <MessengerCustomerChat
        pageId="150211800209794"
        appId="m.me/103840071695085"
      />
    </div>
  );
};

export default Homepage;
