import React, { useEffect } from "react";
import { Button, Card, CardGroup, Image, NavLink, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { recipeActions } from "../redux/actions/addEdit.actions";
import cartActions from "../redux/actions/cart.actions";

const Cards = () => {
  const history = useHistory();
  const foods = useSelector((state) => state.food.foods);
  const user = useSelector((state) => state.auth.user);

  const dispatch = useDispatch();
  const selectedNewProduct = useSelector(
    (state) => state.food.selectedNewProduct
  );
  if (foods) {
    console.log(foods[0]?.images[0]);
  }
  const handleClick = (id) => {
    history.push(`/foods/${id}`);
  };
  const handleDelete = (id) => {
    dispatch(recipeActions.deleteRecipe(id));
  };
  const handleAddFoodToCart = (food) => {
    food.qty === undefined ? (food.qty = 1) : (food.qty += 1);
    dispatch(cartActions.cartsRequest(food));
  };

  return (
    <div className="thanh">
      {foods &&
        foods.map((food) => (
          <CardGroup
            // onClick={() => handleClick(food?._id)}
            className="post"
            style={{
              width: "19rem",
              height: "33rem",
              margin: "18px 18px 40px 40px",
            }}
          >
            <img
              style={{
                borderRadius: "30px 30px 0px 0px",
                width: "19rem",
                height: "22.3rem",
                objectFit: "cover",
              }}
              variant="top"
              src={food?.images}
              alt={food?.name}
            />
            <Card.Body>
              <Card.Title style={{ fontSize: "25px" }}>
                <strong>{food?.name}</strong>
              </Card.Title>
              <h5 className="text-menu ">
                {" "}
                {food?.price
                  .toFixed(0)
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}{" "}
                VND
              </h5>
              <Button
                className="mr-3"
                onClick={() => handleAddFoodToCart(food)}
                variant="warning"
              >
                Add
              </Button>
              <Button
                variant="outline-warning"
                onClick={() => handleClick(food?._id)}
              >
                Detail
              </Button>

              {user?.role === "admin" ? (
                <Button
                  className="ml-3"
                  variant="danger"
                  onClick={() => handleDelete(food?._id)}
                >
                  Delete
                </Button>
              ) : (
                <></>
              )}
            </Card.Body>
          </CardGroup>
        ))}
    </div>
  );
};

export default Cards;
