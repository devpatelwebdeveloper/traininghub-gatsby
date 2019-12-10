import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import BaseLink from "../../atoms/BaseLink/BaseLink";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavigationInternal from "./NavigationInternal";
import { TopNavigation } from "../../../contents/Navigation/Navigation";

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
            {TopNavigation.map((navItem) => {
              if (navItem.Dropdown) {
                return (
                  <NavigationInternal
                    title={navItem.DisplayText}
                    descTitle={navItem.descTitle}
                    description={navItem.description}
                  />
                );
              }
              return (
                <BaseLink href={navItem.Link} composedClassName="nav-link">
                  {navItem.DisplayText}
                </BaseLink>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </StyledNav>
    </>
  );
}
