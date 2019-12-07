/* eslint-disable func-names */
import React, { useEffect, useRef, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import styled, { css } from "styled-components";
import media from "../../../styles/ScreenSizes";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "gatsby";

const StyledNavbar = styled(Navbar)`
  height: 50px;
  background-color: #ffffff;
  border: none;
  color: #ffffff;
  z-index: 100;
  transition: background-color 1s ease 0s;
  box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1);
  &.solid {
    background-color: #00aeef;
    transition: background-color 1s ease 0s;
  }
  ${media.medium`
  backgrond-color:#ffffff;
   `}
  ${media.small`
  backgrond-color:#ffffff;
   `}
`;

const StyledNavDropdown = styled(NavDropdown)`
  ${media.huge`
    width: 50rem;
  `}
  ${media.large`
    width: 50rem;
  `}
  ${media.medium`
    width: 50rem;
  `}
  ${media.small`
    width: 17rem;
  `}
`;

const sharedStyle = css`
  border-bottom: 4px solid red;
`;

const StyledLink = styled(Link)`
  &:hover {
    ${sharedStyle}
  }
`;

// const StyledNavDropdown = styled(NavDropdown)`
//   &:hover {
//     ${sharedStyle}
//   }
// `;

export default function Navigation() {
  const link = useRef();
  const [show, setShow] = useState("none");

  useEffect(() => {
    link.current.addEventListener("click", handleClick);

    return () => {
      link.current.removeEventListener("click", handleClick);
    };
  });

  function handleClick(e) {
    e.preventDefault();

    const showVar = show === "none" ? "block" : "none";

    document.getElementById("dropdown01-div").style.display = showVar;

    setShow(showVar);
  }

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div className="container">
          <Link className="navbar-brand" to="/">
            Traininghub
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbar"
            aria-controls="navbars"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mr-auto">
              <li
                className="nav-item dropdown megamenu-li"
                style={{ position: "static" }}>
                <a
                  ref={link}
                  className="nav-link dropdown-toggle"
                  href=""
                  id="dropdown01"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Mega Menu 1
                </a>
                <div
                  id="dropdown01-div"
                  className="dropdown-menu megamenu"
                  style={{ position: "absolute", width: "100%", display: show }}
                  aria-labelledby="dropdown01">
                  <div className="row">
                    <div className="col-sm-6 col-lg-3">
                      <h5>Microsoft Technologies</h5>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <h5>Web Technologies</h5>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                      <h5>QE</h5>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Necessitatibus in veritatis, facilis eligendi
                        sunt, culpa autem harum porro earum.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
