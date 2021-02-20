import React, { useEffect } from "react";
import { Button, Card, CardGroup } from "react-bootstrap";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import foodActions from "../redux/actions/food.actions";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import RemoveIcon from "@material-ui/icons/Remove";
import { recipeActions } from "../redux/actions/addEdit.actions";
import { Link, useHistory } from "react-router-dom";
import cartActions from "../redux/actions/cart.actions";

const CardsAnimation = ({ newFoods }) => {
  const dispatch = useDispatch();
  // if newFoods then foods = newfoods, else foods = useSelector
  let foods = useSelector((state) => state.food.foods);
  console.log("new", newFoods);
  if (newFoods) {
    foods = newFoods;
  }

  if (newFoods) console.log("hi");
  useEffect(() => {
    dispatch(foodActions.foodsRequest());
  }, [dispatch]);
  const history = useHistory();

  useEffect(() => {
    console.log("hello");
    console.log(newFoods, "hihihi");
  }, [newFoods]);
  const user = useSelector((state) => state.auth.user);

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
          <div>
            <div id="curve" className="card rightSide">
              <CardGroup>
                <img
                  style={{
                    borderRadius: "30px 30px 0px 0px",
                    width: "15rem",
                    height: "17rem",
                    objectFit: "cover",
                  }}
                  variant="top"
                  src={food?.images}
                  alt={food?.name}
                />
              </CardGroup>
              <div className="footer">
                <div className="connections">
                  <div className="connection cart">
                    <Button
                      className="circle-btn"
                      onClick={() => handleAddFoodToCart(food)}
                      variant="warning"
                    >
                      Add
                    </Button>
                  </div>
                  <div className="connection question">
                    <Button
                      className="circle-btn"
                      variant="outline-warning"
                      onClick={() => handleClick(food?._id)}
                    >
                      Detail
                    </Button>
                  </div>
                  <div className="connection behance">
                    {user?.role === "admin" ? (
                      <Button
                        className="circle-btn"
                        variant="danger"
                        onClick={() => handleDelete(food?._id)}
                      >
                        Delete
                      </Button>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>

                <svg id="curve">
                  <rect
                    id="dummyRect"
                    x="0"
                    y="0"
                    height="450"
                    width="400"
                    fill="transparent"
                  />
                  {/* <!-- slide up--> */}
                  <animate
                    href="#p"
                    attributeName="d"
                    to="M0,50 Q80,100 400,50 V150 H0 V50"
                    fill="freeze"
                    begin="dummyRect.mouseover"
                    end="dummyRect.mouseout"
                    dur="0.1s"
                    id="bounce1"
                  />
                  {/* <!-- slide up and curve in --> */}
                  <animate
                    href="#p"
                    attributeName="d"
                    to="M0,50 Q80,0 400,50 V150 H0 V50"
                    fill="freeze"
                    begin="bounce1.end"
                    end="dummyRect.mouseout"
                    dur="0.15s"
                    id="bounce2"
                  />
                  {/* <!-- slide down and curve in --> */}
                  <animate
                    href="#p"
                    attributeName="d"
                    to="M0,50 Q80,80 400,50 V150 H0 V50"
                    fill="freeze"
                    begin="bounce2.end"
                    end="dummyRect.mouseout"
                    dur="0.15s"
                    id="bounce3"
                  />
                  {/* <!-- slide down and curve out --> */}
                  <animate
                    href="#p"
                    attributeName="d"
                    to="M0,50 Q80,45 400,50 V150 H0 V50"
                    fill="freeze"
                    begin="bounce3.end"
                    end="dummyRect.mouseout"
                    dur="0.1s"
                    id="bounce4"
                  />
                  {/* <!-- curve in --> */}
                  <animate
                    href="#p"
                    attributeName="d"
                    to="M0,50 Q80,50 400,50 V150 H0 V50"
                    fill="freeze"
                    begin="bounce4.end"
                    end="dummyRect.mouseout"
                    dur="0.05s"
                    id="bounce5"
                  />
                  <animate
                    href="#p"
                    attributeName="d"
                    to="M0,200 Q80,100 400,200 V150 H0 V50"
                    fill="freeze"
                    begin="dummyRect.mouseout"
                    dur="0.15s"
                    id="bounceOut"
                  />
                </svg>
                <div className="info">
                  <div className="name">
                    <Card.Title style={{ fontSize: "25px" }}>
                      <strong>{food?.name}</strong>
                    </Card.Title>
                  </div>
                  <div className="job">
                    <h5 className="text-menu "> {food?.price * 1000} VND</h5>
                    <Button
                      className="circle-btn"
                      variant="outline-warning"
                      onClick={() => handleClick(food?._id)}
                    >
                      Detail
                    </Button>
                  </div>
                </div>
              </div>
              <div className="card-blur"></div>{" "}
            </div>
          </div>
        ))}
    </div>
  );
};

export default CardsAnimation;
