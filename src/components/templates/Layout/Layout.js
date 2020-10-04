import React from "react";
import styled, { css } from "styled-components";
import Navigation from "../../organisms/Navigation/Navigation";
import Footer from "../../organisms/Footer/Footer";
import ScrollToTop from "../../atoms/ScrollToTop/ScrollToTop";

const StyledLayout = styled.div`
  @media print {
    display: none;
  }
  -webkit-touch-callout: none !important;
  -webkit-user-select: none !important;
  -khtml-user-select: none !important;
  -moz-user-select: none !important;
  -ms-user-select: none !important;
  user-select: none !important;
`;

const Layout = (props) => {
  return (
    <StyledLayout>
      <Navigation />
      {props.children}
      <ScrollToTop />
      <Footer />
    </StyledLayout>
  );
};
export default Layout;
