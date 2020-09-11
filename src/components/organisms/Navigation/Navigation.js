import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import BaseLink from "../../atoms/BaseLink/BaseLink";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavigationInternal from "./NavigationDropdown";
import { TopNavigation } from "../../../contents/Navigation/Navigation";

const StyledNav = styled(Navbar)`
  background-color: ${Styles.Colors.BaseWhite};
  box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1);
  .logo {
    height: 40px;
  }

  ${Styles.ScreenSizes.small`
   
    .logo{
        width:200px;
        height:auto;
    }
  `}
`;

const StyledNavDropdown = styled(NavDropdown)`
  .dropdown-menu {
    border-radius: 0px !important;
    border: none !important;

    box-shadow: 0 1px 0 rgba(12, 13, 14, 0.1), 0 1px 6px rgba(59, 64, 69, 0.1);
    ${Styles.ScreenSizes.small`
    box-shadow: none;
  `}
  }
  dropdown-item {
    padding-bottom: 8px;
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
            src="https://devashish-lms.s3.ca-central-1.amazonaws.com/logo_TrainingHub.png"
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
                    descTitle={navItem.DescTitle}
                    description={navItem.Description}
                  />
                );
              }
              return (
                <BaseLink href={navItem.Link} composedClassName="nav-link">
                  {navItem.DisplayText}
                </BaseLink>
              );
            })}
            <StyledNavDropdown title="Recruitment" id="nav-dropdown">
              <NavDropdown.Item>
                <BaseLink href="/employers" composedClassName="nav-link">
                  Employers
                </BaseLink>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <BaseLink href="/job-seeker" composedClassName="nav-link">
                  Job Seeker
                </BaseLink>
              </NavDropdown.Item>
            </StyledNavDropdown>
            <BaseLink href="/contact-us" composedClassName="nav-link">
              Contact us
            </BaseLink>
          </Nav>
        </Navbar.Collapse>
      </StyledNav>
    </>
  );
}
