import React, { useEffect } from "react";
import { Button, Card, CardGroup, Image, NavLink, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { recipeActions } from "../redux/actions/addEdit.actions";
import cartActions from "../redux/actions/cart.actions";

const Cas = () => {
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
    <div className="wrapper" hover>
      {foods &&
        foods.map((food) => (
          <div
            className="card mt-4 ml-4"
            overlay="red-strong"
            style={{ width: "13rem", border: "none" }}
            // onClick={() => handleClickPhim(film.id)}
          >
            <img src={food?.images} alt="card img" />
            <div className="info">
              <h3> {food?.name}</h3>
              <p>{food?.price * 1000} VND</p>
              {/* <p>
              {film?.overview?.length < 90
                ? film.overview
                : film.overview.slice(0, 75) + "..."}
            </p> */}
            </div>
            <Button
              variant="outline-warning"
              onClick={() => handleClick(food?._id)}
            >
              Detail
            </Button>
          </div>
        ))}
    </div>
  );
};

export default Cas;
