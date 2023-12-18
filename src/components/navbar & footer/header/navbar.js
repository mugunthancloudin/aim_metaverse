import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import "./navbar.css";
import logo from "../../../components/assets/landingPage/navbar/aimLogo.svg"

function Scrollbar() {
  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "linear",
    });
  };

  return (
    <>
      <Navbar expand="lg" className="" sticky="fixed">
        <Container>
          <Navbar.Brand
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
            className="fw-bold  text-white fst-italic"
          >
            <img
              src={logo}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="AIM Logo"
            />
            
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" className="text-white" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto navbar-nav-scroll" navbarScroll>
              <ScrollLink
                to="action1"
                // smooth={true}
                duration={100}
                spy={true}
                exact="true"
                className="me-3 text-white fw-bold mt-2 link-underline link-underline-opacity-0"
              >
                Home
              </ScrollLink>
              <ScrollLink
                to="action2"
                // smooth={true}
                duration={200}
                spy={true}
                exact="true"
                className="me-3 text-white fw-bold mt-2 link-underline link-underline-opacity-0"
              >
                About
              </ScrollLink>

              {/* <NavDropdown
              title="Project"
              id="navbarScrollingDropdown"
              className="me-3 text-white fw-bold  link-underline link-underline-opacity-0"
            >
              <ScrollLink
                to="action3"
                // smooth={true}
                duration={300}
                spy={true}
                exact="true"
                className="dropdown-item"
              >
                Bull's Call
              </ScrollLink>
              <ScrollLink
                to="action4"
                // smooth={true}
                duration={400}
                spy={true}
                exact="true"
                className="dropdown-item"
              >
                Medi_Chain
              </ScrollLink>
              <ScrollLink
                to="action5"
                // smooth={true}
                duration={500}
                spy={true}
                exact="true"
                className="dropdown-item"
              >
                Doc_verification
              </ScrollLink>
            </NavDropdown> */}
              <ScrollLink
                to="action3"
                // smooth={true}
                duration={600}
                spy={true}
                exact="true"
                className="me-3 text-white fw-bold mt-2 link-underline link-underline-opacity-0"
              >
                Evoluation
              </ScrollLink>
              <ScrollLink
                to="action4"
                // smooth={true}
                duration={700}
                spy={true}
                exact="true"
                className="me-3 text-white fw-bold mt-2 link-underline link-underline-opacity-0"
              >
                Tools
              </ScrollLink>
              <ScrollLink
                to="action5"
                // smooth={true}
                duration={800}
                spy={true}
                exact="true"
                className="me-3 text-white fw-bold mt-2 link-underline link-underline-opacity-0"
              >
                Contact Us
              </ScrollLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Scrollbar;
