import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Row, Col, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import authActions from "../redux/actions/auth.actions";
import TextField from "@material-ui/core/TextField";
import logo2 from "../images/ganh-hang-rong.png";
import { routeActions } from "../redux/actions/route.actions";
import { MDBAnimation, MDBCard, MDBCardBody, MDBCol } from "mdbreact";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const redirectTo = useSelector((state) => state.route.redirectTo);
  const history = useHistory();

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, password2, avatarUrl } = formData;
    if (password !== password2) {
      setErrors({ ...errors, password2: "Passwords do not match" });
      return;
    }
    dispatch(authActions.register({ name, email, password }));
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
  }, [dispatch, history, redirectTo]);

  return (
    <div>
      <Row>
        <Col lg={5}>
          <Col className="">
            <div
              style={{
                border: "1px solid black",
                width: "30vw",
                marginTop: "6rem",
                margin: "3rem",
              }}
            >
              <Card id="classic-card">
                <Card.Body>
                  <div className="text-center mb-3">
                    <h1 className="poppin">Sign Up</h1>
                    <p className="lead">
                      <FontAwesomeIcon icon="user" size="1x" /> Create Your
                      Account
                    </p>
                  </div>
                  <Form onSubmit={handleSubmit}>
                    <Form.Group></Form.Group>
                    <Form.Group>
                      <TextField
                        style={{ width: "100%" }}
                        type="text"
                        placeholder="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      {errors.name && (
                        <small className="form-text text-danger">
                          {errors.name}
                        </small>
                      )}
                    </Form.Group>
                    <Form.Group>
                      <TextField
                        style={{ width: "100%" }}
                        type="email"
                        placeholder="Email Address"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && (
                        <small className="form-text text-danger">
                          {errors.email}
                        </small>
                      )}
                    </Form.Group>
                    <Form.Group>
                      <TextField
                        style={{ width: "100%" }}
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {errors.password && (
                        <small className="form-text text-danger">
                          {errors.password}
                        </small>
                      )}
                    </Form.Group>
                    <Form.Group>
                      <TextField
                        type="password"
                        placeholder="Confirm Password"
                        name="password2"
                        value={formData.password2}
                        onChange={handleChange}
                      />
                    </Form.Group>

                    {loading ? (
                      <Button
                        className="btn-block"
                        variant="primary"
                        type="button"
                        disabled
                      >
                        <span
                          className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Loading...
                      </Button>
                    ) : (
                      <Button
                        className="btn-block"
                        type="submit"
                        variant="primary"
                      >
                        Register
                      </Button>
                    )}

                    <p>
                      Already have an account? <Link to="/login">Sign In</Link>
                    </p>
                  </Form>
                </Card.Body>
              </Card>
            </div>
          </Col>
        </Col>
        <Col lg={5}>
          <img
            src="https://scontent.fvca1-1.fna.fbcdn.net/v/t31.0-8/17917700_477536202577864_5293261151577071588_o.jpg?_nc_cat=105&ccb=3&_nc_sid=cdbe9c&_nc_ohc=4rX_1GKslxEAX_LbOX1&_nc_ht=scontent.fvca1-1.fna&oh=f64a0da7ce8ddc7af7c1f5ea5991f7ad&oe=60496A6C"
            alt="signUp"
            style={{ width: "800px" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default RegisterPage;
