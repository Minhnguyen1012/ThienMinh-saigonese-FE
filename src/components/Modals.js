import React, { useState } from "react";
import { Button, Container, Modal } from "react-bootstrap";
import { faCartPlus, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import cartActions from "../redux/actions/cart.actions";
import { useSelector, useDispatch } from "react-redux";
const Modals = () => {
  const [lgShow, setLgShow] = useState(false);
  const cartFoods = useSelector((state) => state.cart.cartFoods);
  const inputHandler = (food, quantity) => {
    food.qty = parseInt(quantity);
    if (food.qty >= 1) dispatch(cartActions.cartsRequest(food));
  };
  const dispatch = useDispatch();
  let bigTotal = 0;

  const handleSubmit = (e) => {
    console.log("put this  to this", cartFoods);
    dispatch(cartActions.createNewCart(cartFoods));
  };

  return (
    <>
      <div variant="light" onClick={() => setLgShow(true)}>
        <ShoppingCartIcon fontSize="large" />
      </div>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-tuan-sizes-title-lg">
            Your Shopping Card
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <div
              style={{
                height: "370px",
                overflowY: "auto",
                scrollSnapType: " y",
              }}
              id="cartModal"
              tabindex="-1"
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div role="document">
                <div>
                  <div className="header border-bottom-0">
                    <h5 id="exampleModalLabel"></h5>
                  </div>
                  <div className="body">
                    <table className="table table-image">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">Product</th>
                          <th scope="col">Price</th>
                          <th scope="col">Qty</th>
                          <th scope="col">Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartFoods &&
                          cartFoods.map((cart) => {
                            let total = cart.price * cart.qty;
                            bigTotal += total;
                            return (
                              <tr className="w-25">
                                <img
                                  src={cart.images}
                                  className="img-fluid img-thumbnail "
                                  style={{ height: "80px", width: "80px" }}
                                  alt="Sheep"
                                />

                                <td>{cart.name}</td>
                                <td>
                                  {cart.price
                                    .toFixed(0)
                                    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
                                </td>
                                <td className="qty" style={{}}>
                                  <input
                                    type="number"
                                    className="form-control"
                                    id={cart._id}
                                    name={cart.name}
                                    value={cart.qty}
                                    onChange={(e) =>
                                      inputHandler(cart, e.target.value)
                                    }
                                  />
                                </td>

                                <td>
                                  {`${
                                    cart.price *
                                    cart.qty
                                      .toFixed(0)
                                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
                                  }`}
                                </td>
                              </tr>
                            );
                          })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <div className="d-flex justify-content-end">
            <h5>
              Total:{" "}
              <span className="price text-success">
                {`${bigTotal
                  .toFixed(0)
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}`}{" "}
                VND
              </span>
            </h5>
          </div>
          <div className="tuan-footer border-top-0 d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="tuan"
              onClick={() => setLgShow(false)}
            >
              Close
            </button>
            <button
              onClick={() => handleSubmit()}
              type="button"
              className="btn btn-success"
              href="/pay-method"
            >
              Save
            </button>
            <Button to="/pay-method">Next</Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Modals;
