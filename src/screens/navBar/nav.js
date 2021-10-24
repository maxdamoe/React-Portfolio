import React from "react";
import "./nav.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { navLinks } from "../../helpers/navigation";

function createLinks() {
  return navLinks.map((e, idx) => (
    <Nav.Link key={idx} href={e.ref}>
      {e.name}
    </Nav.Link>
  ));
}

function navBar() {
  return (
    <div id="home">
      <Navbar
        className="navigation__container"
        style={{
          zIndex: "2",
          position: "fixed",
          top: "0",
          width: "100%",
        }}
        collapseOnSelect
        expand="md"
      >
        <Navbar.Brand style={{ marginLeft: "1rem" }} href="#home">
          Jon Maximilian Simpson
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse style={{ marginRight: "1rem" }}
          style={{
            justifyContent: "flex-end",
            marginRight: "1rem",
            borderColor: "none",
          }}
        >
          <div class="movement">
          <Nav className="links" style={{ margin: "0 1rem" }}>
            {createLinks()}
          </Nav>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default navBar;
