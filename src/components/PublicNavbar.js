import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Navbar, Nav, NavDropdown, NavLink } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../images/logo2.png";
import Modals from "./Modals";
import api from "../apiService";
import { toast } from "react-toastify";
import CustomizedMenus from "./Menu";

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
        toast.success("The book is added to reading list");
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
  // const changeBackground = () => {
  //   if (window.scrollY >= 80) {
  //     setNavbar(true);
  //   } else {
  //     setNavbar(false);
  //   }
  // };

  return (
    <>
      <nav>
        <Navbar
          fixed="top"
          className={scrollY > 0 ? "navbar-no-color " : "navbar-color"}
          variant="dark"
        >
          <Navbar.Brand>
            <Nav.Link as={NavLink} exact={true} to="/login">
              <img src={logo} alt="saigonese" />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="hove" href="/">
                Home
              </Nav.Link>
              <Nav.Link href="#link">Menu</Nav.Link>
              <Nav.Link href="/story">Our Stories</Nav.Link>
              <NavDropdown title="All Products" id="basic-nav-dropdown">
                <NavDropdown.Item href="/category/vietnamese cuisine">
                  Vietnamese Cuisine
                </NavDropdown.Item>
                <NavDropdown.Item href="/category/tea">Tea</NavDropdown.Item>
                <NavDropdown.Item href="/category/dessert">
                  Dessert
                </NavDropdown.Item>
                <NavDropdown.Divider />
              </NavDropdown>
            </Nav>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto"></Nav>
              {!loading && <>{isAuthenticated ? authLinks : publicLinks}</>}
            </Navbar.Collapse>
          </Navbar.Collapse>
        </Navbar>
      </nav>
    </>
  );
};

export default PublicNavbar;
