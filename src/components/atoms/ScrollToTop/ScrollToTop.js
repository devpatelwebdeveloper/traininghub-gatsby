/* eslint-disable func-names */
import React, { useEffect, useState } from "react";
import smoothscroll from "smoothscroll-polyfill";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import { Upicon } from "../../../contents/icons/icons";

const StyledDiv = styled.div`
  .hide {
    visibility: hidden;
    opacity: 0;
  }
  .show {
    visibility: visible;
    opacity: 1;
  }
  .icon {
    width: 32px;
    height: 32px;
    &:hover {
      fill: ${Styles.Colors.BrandOrange};
      cursor: pointer;
      border: ${Styles.Colors.BrandPurple};
    }
  }
`;
const StyledButton = styled.div`
color:${Styles.Colors.BaseIcon}
  display: inline-block;
  width: 32px;
  height: 32px;
  text-align: center;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  z-index: 1000;
  ${Styles.ScreenSizes.small`
  bottom: 15px;
  right: 15px; 
   `};
  .icon {
    ${Styles.ScreenSizes.small`
    width: 32px;
    height: 32px;
     `};
  }
`;

const scrollToTop = () => {
  window.scroll({ top: 0, left: 0, behavior: "smooth" });
  // above is not supported by safari, chrome or ie
  smoothscroll.polyfill();
};

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", scrollbkToTop, true);
  });

  function scrollbkToTop() {
    if (window.scrollY > 350) {
      if (!show) {
        setShow(true);
      }
    } else {
      if (show) {
        setShow(false);
      }
    }
  }

  return (
    <>
      <StyledDiv>
        <StyledButton
          id="back-to-top"
          className={show ? "show" : "hide"}
          onClick={scrollToTop}>
          {Upicon}
        </StyledButton>
      </StyledDiv>
    </>
  );
}
