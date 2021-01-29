import React from "react";
import { Nav, Navbar, NavDropdown, NavLink } from "react-bootstrap";

import logo from "../images/saigonese.png";
const Navs = () => {
  return (
    <Nav
      fixed="top"
      style={{
        transition: "0.6s",
        padding: "30px 90px",
        position: "relative",
        textDecorationColor: "white",
      }}
    >
      <header className="header">
        <Navbar.Brand>
          <Nav.Link className="logo" as={NavLink} exact={true} to="/">
            <img src={logo} alt="saigonese" />
          </Nav.Link>
        </Navbar.Brand>
      </header>
      <section className="banner"></section>
      <Nav.Link style={{ position: "relative" }} href="#home">
        Home
      </Nav.Link>
      <Nav.Link style={{ position: "relative" }} href="#link">
        Menu
      </Nav.Link>
      <Nav.Link style={{ position: "relative" }} href="/story">
        Our Stories
      </Nav.Link>
      <NavDropdown
        style={{ position: "relative" }}
        title="All Products"
        id="basic-nav-dropdown"
      >
        <NavDropdown.Item href="#action/3.1">
          Vietnamese Cuisine
        </NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Tea</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Dessert</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>{" "}
    </Nav>
  );
};

export default Navs;
