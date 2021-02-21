import React, { useState, useEffect } from "react";

import { TextField } from "@material-ui/core";
import { Form, Button, Container, ButtonGroup } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { recipeActions } from "../../redux/actions/addEdit.actions";
import { routeActions } from "../../redux/actions/route.actions";

const AddOrEditProduct = ({ menu }) => {
  const [formData, setFormData] = useState({
    name: "",
    images: [],
    price: "",
    category: "",
    info: "",
  });
  const loading = useSelector((state) => state.food.loading);
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const selectedNewProduct = useSelector(
    (state) => state.food.selectedNewProduct
  );
  const redirectTo = useSelector((state) => state.route.redirectTo);
  const addOrEdit = params.id ? "Edit" : "Add";
  const recipeId = params.id;

  useEffect(() => {
    if (recipeId) {
      if (!selectedNewProduct) {
        dispatch(recipeActions.getSingleRecipe(recipeId));
      }
      setFormData((formData) => ({
        ...formData,
        name: selectedNewProduct.name,
        price: selectedNewProduct.price,
        images: selectedNewProduct.images,
        category: selectedNewProduct.category,
        info: selectedNewProduct.info,
      }));
    }
  }, [recipeId, selectedNewProduct, formData, dispatch]);

  useEffect(() => {
    if (addOrEdit === "Edit") {
      setFormData((formData) => ({
        ...formData,
        name: selectedNewProduct.name,
        price: selectedNewProduct.price,
        images: selectedNewProduct.images,
        category: selectedNewProduct.category,
        info: selectedNewProduct.info,
      }));
    }
  }, [selectedNewProduct, formData, dispatch, addOrEdit]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, images, price, category, info } = formData;
    if (addOrEdit === "Add") {
      dispatch(
        recipeActions.createNewRecipe(name, images, price, category, info)
      );
    } else if (addOrEdit === "Edit") {
      dispatch(
        recipeActions.updateRecipe(
          selectedNewProduct._id,
          name,
          images,
          price,
          category,
          info
        )
      );
    }
  };

  const handleCancel = () => {
    history.goBack();
  };

  const handleDelete = () => {
    dispatch(recipeActions.deleteRecipe(selectedNewProduct._id));
  };

  useEffect(() => {
    if (redirectTo) {
      if (redirectTo === "__GO_BACK__") {
        history.goBack();
        dispatch(routeActions.removeRedirectTo());
      } else {
        history.push(redirectTo);
        dispatch(routeActions.removeRedirectTo());
      }
    }
  }, [redirectTo, dispatch, history]);

  return (
    <div>
      <Container
        style={{
          marginLeft: "100px",
          marginTop: "100px",
          marginBottom: "70px",
          border: "3px solid #99bbad",
          borderRadius: "20px",
        }}
      >
        <h1 className="text-center mt-3">{addOrEdit} Product</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="recipeName">
            <Form.Label>Product name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Enter name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Images</Form.Label>
            <Form.Control
              type="file"
              placeholder="Image Url"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Category</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Category"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Info</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Information/ History"
              name="info"
              value={formData.info}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Price</Form.Label>
            <Form.Control
              required
              type="number"
              placeholder="Enter Url"
              name="price"
              value={formData.price}
              onChange={handleChange}
            />
          </Form.Group>

          <ButtonGroup className="d-flex mt-3 mb-4">
            {loading ? (
              <Button
                className="mr-3 "
                variant="primary"
                type="button"
                disabled
              >
                <span
                  className="spinner-border spinner-border-sm"
                  role="status"
                  aria-hidden="true"
                ></span>
                Submitting...
              </Button>
            ) : (
              <Button
                style={{
                  justifyContent: "center",
                  backgroundColor: "#9a8194",
                  borderRadius: "10px",
                  // maxWidth: "370px",
                  border: "none",
                }}
                className="mr-3"
                type="submit"
                variant="primary"
              >
                Submit
              </Button>
            )}

            <Button
              style={{
                backgroundColor: "#c6a9a3",
                borderRadius: "10px",
                border: "none",
                // maxWidth: "370px",
              }}
              variant="light"
              onClick={handleCancel}
              disabled={loading}
            >
              Cancel
            </Button>
          </ButtonGroup>

          {addOrEdit === "Edit" && (
            <ButtonGroup className="d-flex">
              <Button
                variant="danger"
                onClick={handleDelete}
                disabled={loading}
              >
                Delete recipe
              </Button>
            </ButtonGroup>
          )}
        </Form>
      </Container>
    </div>
  );
};

export default AddOrEditProduct;
