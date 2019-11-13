/* eslint-disable func-names */
import React, { useEffect, useRef, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import styled, { css } from "styled-components";
import media from "../../../styles/ScreenSizes";
import Nav from "react-bootstrap/Nav";
import CourseListNav from "./Courses";
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

const sharedStyle = css`
  border-bottom: 4px solid red;
`;

const StyledLink = styled(Link)`
  &:hover {
    ${sharedStyle}
  }
`;

const StyledNavDropdown = styled(NavDropdown)`
  &:hover {
    ${sharedStyle}
  }
`;

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
      <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
        <div className="container">
          <a className="navbar-brand" href="#">
            Traininghub
          </a>
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
                <CourseListNav
                  id="dropdown01-div"
                  style={{ position: "absolute", width: "100%", display: show }}
                  ariaLabelledby="dropdown01"
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}