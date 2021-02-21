import React, { useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import MessengerCustomerChat from "react-messenger-customer-chat/lib/MessengerCustomerChat";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Cards from "../components/Cards";
import Carousels from "../components/Carousels";
import foodActions from "../redux/actions/food.actions";

const VietnameseCuisine = () => {
  let { category } = useParams();
  let categoryWords = category.split(" ");
  categoryWords.forEach((word, i) => {
    let tempWord = word.split("");
    tempWord.forEach((letter, index) => {
      tempWord[index] = letter.toLowerCase();
    });
    tempWord[0] = tempWord[0].toUpperCase();
    categoryWords[i] = tempWord.join("");
  });

  // console.log("o laal", category);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(foodActions.getFoodByCategory(category));
  }, [dispatch, category]);

  return (
    <div style={{ backgroundColor: "#f7f2e7" }}>
      <Carousels />
      <div className="d-flex justify-content-between ml-5 mt-5 mr-5">
        <h1 className="text-menu">{categoryWords.join(" ")}</h1>
      </div>
      <Container>
        <Cards />
      </Container>
      <MessengerCustomerChat
        pageId="150211800209794"
        appId="m.me/103840071695085"
      />
    </div>
  );
};

export default VietnameseCuisine;
