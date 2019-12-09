import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import BaseLink from "../../atoms/BaseLink/BaseLink";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavigationInternal from "./NavigationInternal";

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

            <NavigationInternal
              title="Courses"
              descTitle="Our available courses"
              description="All the courses and the course contents are handcrafted with the real world scenarios in mind. We keep on continuously updating the courses as new technologies are introduced and the requirement of job changes."
            />
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
