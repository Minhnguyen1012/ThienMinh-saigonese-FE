import React, { useState, useEffect } from "react";

import { Form, Button, Container, ButtonGroup } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { recipeActions } from "../../redux/actions/addEdit.actions";
import { routeActions } from "../../redux/actions/route.actions";

const AddOrEditProduct = () => {
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
  console.log(formData, " hi");
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
    <Container>
      <h1 className="text-center">{addOrEdit} Recipe</h1>
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
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="file"
            // placeholder="Enter Url"
            name="image"
            value={formData.images}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>category</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Url"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>info</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter Url"
            name="info"
            value={formData.info}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>price</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Enter Url"
            name="price"
            value={formData.price}
            onChange={handleChange}
          />
        </Form.Group>

        {/* <Form.Group controlId="recipeDescription">
          <Form.Label>Recipe description</Form.Label>
          <Form.Control
            as="textarea"
            rows="10"
            placeholder="Enter description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group> */}

        <ButtonGroup className="d-flex mb-3">
          {loading ? (
            <Button className="mr-3" variant="primary" type="button" disabled>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              Submitting...
            </Button>
          ) : (
            <Button className="mr-3" type="submit" variant="primary">
              Submit
            </Button>
          )}

          <Button variant="light" onClick={handleCancel} disabled={loading}>
            Cancel
          </Button>
        </ButtonGroup>

        {addOrEdit === "Edit" && (
          <ButtonGroup className="d-flex">
            <Button variant="danger" onClick={handleDelete} disabled={loading}>
              Delete recipe
            </Button>
          </ButtonGroup>
        )}
      </Form>
    </Container>
  );
};

export default AddOrEditProduct;
