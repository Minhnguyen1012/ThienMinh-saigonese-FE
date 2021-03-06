import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../images/logo2.png";
import Modals from "./Modals";
import api from "../apiService";
import { toast } from "react-toastify";
import CustomizedMenus from "./Menu";

import {
  faCocktail,
  faCoffee,
  faIceCream,
  faSun,
  faUtensils,
  faUtensilSpoon,
} from "@fortawesome/free-solid-svg-icons";
import { faPagelines } from "@fortawesome/free-brands-svg-icons";

const PublicNavbar = () => {
  const loading = useSelector((state) => state.auth.loading);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [loadings, setLoadings] = useState(false);
  // const [navbar, setNavbar] = useState(false);
  const [addingProduct, setAddingProduct] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollY(position);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const postData = async () => {
      if (!addingProduct) return;
      setLoadings(true);
      try {
        const res = await api.post(`/favorites`, addingProduct);
        setErrorMessage("");
        toast.success("The Product is added to shopping cart");
      } catch (error) {
        setErrorMessage(error.message);
      }
      setLoadings(false);
    };
    postData();
  }, [addingProduct]);

  const authLinks = (
    <Nav>
      <Nav.Link className="align-self-center">
        <Modals />
      </Nav.Link>
      <Nav.Link>
        <CustomizedMenus />
      </Nav.Link>
    </Nav>
  );
  const publicLinks = (
    <Nav>
      <Nav.Link as={Link} to="/register">
        <FontAwesomeIcon icon="registered" size="sm" /> Register
      </Nav.Link>
      <Nav.Link as={Link} to="/login">
        <FontAwesomeIcon icon="sign-in-alt" size="sm" /> Login
      </Nav.Link>
    </Nav>
  );

  return (
    <>
      <div>
        <Navbar
          expand="lg"
          fixed="top"
          className={scrollY > 0 ? "navbar-no-color " : "navbar-color"}
          variant="dark"
        >
          <Navbar.Brand>
            <Nav.Link>
              <Link
                to="/"
                className="GGFONT"
                style={{ textDecorationLine: "none", color: "white" }}
              >
                SAIGONESE
              </Link>
              {/* <img src={logo} alt="saigonese" /> */}
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} className="hover-border" to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} className="hover-border" to="/menu">
                Menu
              </Nav.Link>
              <Nav.Link as={Link} className="hover-border" to="/story">
                Our Stories
              </Nav.Link>
              <NavDropdown title="All Products" id="basic-nav-dropdown">
                <div style={{ fontSize: "17px", textAlign: "left" }}>
                  <NavDropdown.Item as={Link} to="/category/vietnamese cuisine">
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faUtensilSpoon}
                      size={"lg"}
                      color={"#353b48"}
                    />
                    Vietnam
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/tea">
                    {" "}
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faPagelines}
                      size={"lg"}
                      color={"#353b48"}
                    />
                    Tea
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/cafe">
                    {" "}
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faCoffee}
                      size={"lg"}
                      color={"#353b48"}
                    />
                    Cafe
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/drink">
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faCocktail}
                      size={"lg"}
                      color={"#353b48"}
                    />
                    Drink
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to="/category/dessert">
                    <FontAwesomeIcon
                      className="mr-2"
                      icon={faIceCream}
                      size={"lg"}
                      color={"#353b48"}
                    />
                    Dessert
                  </NavDropdown.Item>
                </div>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto"></Nav>
              {!loading && <>{isAuthenticated ? authLinks : publicLinks}</>}
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default PublicNavbar;
