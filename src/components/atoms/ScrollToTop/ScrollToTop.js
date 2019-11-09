/* eslint-disable func-names */
import React, { useEffect, useState } from 'react';
import smoothscroll from 'smoothscroll-polyfill';
import styled from 'styled-components';

const StyledDiv = styled.div`
  .hide {
    visibility: hidden;
    opacity: 0;
  }
  .show {
    visibility: visible;
    opacity: 1;
  }
`;

const StyledButton = styled.button`
  display: inline-block;
  background-color: #ff9800;
  width: 50px;
  height: 50px;
  text-align: center;
  border-radius: 4px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  transition: background-color 0.3s, opacity 0.5s, visibility 0.5s;
  z-index: 1000;
  `;

const scrollToTop = () => {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  // above is not supported by safari, chrome or ie
  smoothscroll.polyfill();
};

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', scrollbkToTop, true);
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
        <StyledButton id="back-to-top" className={show ? 'show' : 'hide'} onClick={scrollToTop}>
          Top.....
        </StyledButton>
      </StyledDiv>
    </>
  );
}
