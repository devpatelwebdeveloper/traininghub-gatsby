import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import BaseLink from "../../atoms/BaseLink/BaseLink";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const StyledNav = styled(Navbar)`
background-color: ${Styles.Colors.BaseWhite};
box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1);
  ${Styles.ScreenSizes.huge`
  .logo {
    height: 40px;
  }
  `}
  ${Styles.ScreenSizes.large`
  .logo {
    height: 40px;
  }
  `}
  ${Styles.ScreenSizes.medium`
  max-height:100vh;
  overflow-x:scroll;
  .logo {
    height: 40px;
  }
  `}
  ${Styles.ScreenSizes.small`
   
    .logo{
        width:200px;
        height:auto;
    }
  `}
`;
const StyledDescription = styled(Col)`
  ${Styles.ScreenSizes.small`
    display:none;
  `}
`;

const StyledNavDropdown = styled(NavDropdown)`
  position: static !important;
  .dropdown-menu {
    margin: 0px;
    border-radius: 0px !important;
    border: none !important;
    width: 100%;
    box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1);
    ${Styles.ScreenSizes.small`
    box-shadow: none;
  `}
  }
  .row {
    margin: 0px !important;
  }
`;

export default function Navi() {
  return (
    <>
      <StyledNav expand="lg" sticky="top">
        <BaseLink href="/" composedClassName="nav-link">
          <img
            src="https://traininghub.io/wp-content/uploads/2019/07/logosTrainingHub.png"
            className="logo"
            alt="React Bootstrap logo"
          />
        </BaseLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            <BaseLink href="/" composedClassName="nav-link">
              Home
            </BaseLink>
            <BaseLink href="/about" composedClassName="nav-link">
              About Us
            </BaseLink>

            <StyledNavDropdown title="Courses" id="basic-nav-dropdown">
              <Row>
                <StyledDescription>
                  <h5>QE</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Necessitatibus in veritatis, facilis eligendi sunt, culpa
                    autem harum porro earum.
                  </p>
                </StyledDescription>
                <Col>
                  <h5>Microsoft Technologies</h5>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </Col>
                <Col>
                  <h5>Web Technologies</h5>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </Col>
                <Col>
                  <h5>Microsoft Technologies</h5>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                </Col>
              </Row>
            </StyledNavDropdown>
            <BaseLink href="/recruitment" composedClassName="nav-link">
              Recruitment
            </BaseLink>
            <BaseLink href="/contact" composedClassName="nav-link">
              Contact us
            </BaseLink>
          </Nav>
        </Navbar.Collapse>
      </StyledNav>
    </>
  );
}
