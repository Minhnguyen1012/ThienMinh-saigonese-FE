import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

// import "mdbreact/dist/css/mdb.css";
import { Redirect, useHistory } from "react-router-dom";
import { BrowserRouter as Router, Link } from "react-router-dom";

import PublicNavbar from "../components/PublicNavbar";
import {
  MDBMask,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBAnimation,
} from "mdbreact";

import { useSelector, useDispatch } from "react-redux";
import authActions from "../redux/actions/auth.actions";

import FacebookLogin from "react-facebook-login";
import { GoogleLogin } from "react-google-login";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

const FB_APP_ID = process.env.REACT_APP_FB_APP_ID;
const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

const LoginPage = () => {
  const [state, setState] = useState({
    collapseID: "",
  });

  const toggleCollapse = (collapseID) =>
    setState((prevState) => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : "",
    }));

  const overlay = (
    <div
      id="sidenav-overlay"
      style={{ backgroundColor: "transparent" }}
      onClick={() => toggleCollapse("navbarCollapse")}
    />
  );

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  // const redirectTo = useSelector((state) => state.route.redirectTo);
  // const history = useHistory();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);

  const handleTyping = (e) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;
    // if (password.length < 3) {
    //   setErrors({ ...errors, password: "Password must be longer than 3" });
    dispatch(authActions.loginRequest({ email, password }));
  };

  const loginWithFacebook = (response) => {
    dispatch(authActions.loginFacebook(response.accessToken));
  };
  const loginWithGoogle = (response) => {
    dispatch(authActions.loginGoogle(response.accessToken));
  };

  if (isAuthenticated) return <Redirect to="/" />;

  return (
    <div id="loginn">
      <Router>
        <div>
          <PublicNavbar />
        </div>
      </Router>
      <div
        style={{
          paddingTop: "72px",

          backgroundImage:
            "url(https://scontent.fhan3-2.fna.fbcdn.net/v/t31.0-8/23916687_583558578642292_859434436310435707_o.jpg?_nc_cat=111&ccb=3&_nc_sid=730e14&_nc_ohc=9akSzarpY1sAX9f79-M&_nc_ht=scontent.fhan3-2.fna&oh=211b1a7d201ee4a620cbe8d82e21245e&oe=604C4AE6)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100vw",
          objectFit: "cover",
        }}
      >
        <Container>
          <Row>
            <div
              delay="0.3s"
              className="mt-5 text-md-left col-md-6 mt-xl-5 mb-5"
              style={{ color: "white" }}
            >
              <h1 className="h1-responsive font-weight-bold">Sign in</h1>
              <hr color="white" />
              <h6 className="">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem
                repellendus quasi fuga nesciunt dolorum nulla magnam veniam
                sapiente, fugiat! Commodi sequi non animi ea dolor molestiae,
                quisquam iste, maiores. Nulla.
              </h6>
            </div>

            <Col md="6" xl="5" className="mb-4">
              <div type="fadeInRight" delay=".3s">
                <Card id="loginn-card1">
                  <Card.Body className="white-text">
                    <h3 className="text-center">
                      <FontAwesomeIcon icon={faUserFriends} color={"black"} />
                    </h3>
                    <hr className="hr-light" />
                    <form onSubmit={handleSubmit}>
                      <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          name="email"
                          placeholder="Enter email"
                          onChange={handleTyping}
                          value={formData.email}
                        />
                        <Form.Text style={{ color: "white" }}>
                          We'll never share your email with anyone else.
                        </Form.Text>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          name="password"
                          placeholder="Password"
                          onChange={handleTyping}
                          value={formData.password}
                        />
                      </Form.Group>
                      <div style={{ marginLeft: "100px" }}>
                        <Button className="mb-2 " onClick={handleSubmit}>
                          Sign In
                        </Button>
                      </div>
                      <hr color="white" />
                    </form>

                    <div className="d-flex flex-column text-center">
                      <FacebookLogin
                        appId={FB_APP_ID}
                        fields="name,email,picture"
                        callback={loginWithFacebook}
                        icon="fa-facebook"
                        onFailure={(err) => {
                          console.log("FB LOGIN ERROR:", err);
                        }}
                        containerStyle={{
                          textAlign: "center",
                          backgroundColor: "#3b5998",
                          borderColor: "#3b5998",
                          flex: 1,
                          display: "flex",
                          color: "#fff",
                          cursor: "pointer",
                          marginBottom: "7px",
                        }}
                        buttonStyle={{
                          flex: 1,
                          textTransform: "none",
                          padding: "12px",
                          background: "none",
                          border: "none",
                        }}
                      />

                      <GoogleLogin
                        className="google-btn d-flex justify-content-center"
                        clientId={GOOGLE_CLIENT_ID}
                        buttonText="Login with Google"
                        onSuccess={loginWithGoogle}
                        onFailure={(err) => {
                          console.log("GOOGLE LOGIN ERROR:", err);
                        }}
                        cookiePolicy="single_host_origin"
                      />
                    </div>
                    <div className="mt-2">
                      <p style={{ color: "white" }}>
                        Don't have an account?{" "}
                        <Link to="/register">Sign Up</Link>
                      </p>
                    </div>

                    <hr className="hr-light" />
                    <div className="text-center d-flex justify-content-center black-label">
                      <a href="#!" className="p-2 m-2">
                        <FontAwesomeIcon icon={faTwitter} color={"black"} />
                      </a>
                      <a href="#!" className="p-2 m-2">
                        <FontAwesomeIcon icon={faFacebookF} color={"black"} />
                      </a>
                      <a href="#!" className="p-2 m-2">
                        <FontAwesomeIcon icon={faInstagram} color={"black"} />
                      </a>
                      <a href="#!" className="p-2 m-2">
                        <FontAwesomeIcon icon={faYoutube} color={"black"} />
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default LoginPage;

{
  /* <Form.Text
                          className="white-text"
                          iconClass="white-text"
                          label="Your email"
                          icon="envelope"
                          name="email"
                          onChange={handleTyping}
                          value={formData.email}
                        /> */
}
{
  /* <MDBInput
                          className="white-text"
                          iconClass="white-text"
                          label="Your password"
                          icon="lock"
                          name="password"
                          type="password"
                          onChange={handleTyping}
                          value={formData.password}
                        /> */
}
