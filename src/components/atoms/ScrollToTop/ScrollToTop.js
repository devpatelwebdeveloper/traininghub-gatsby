/* eslint-disable func-names */
import React from 'react';
import smoothscroll from 'smoothscroll-polyfill';
// import $ from 'jquery';
import styled from 'styled-components';

const StyledDiv = styled.div`
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
  opacity: 0;
  z-index: 1000;

  .hide {
    visibility: hidden;
  }
  .show {
    visibility: visible;
  }
`;
const StyledButton = styled.button``;

function scrollbkToTop() {
  // Transition effect for navbar
  // $(window).scroll(function() {
  //   // checks if window is scrolled more than 500px, adds/removes solid class
  //   if ($(this).scrollTop() > 450) {
  //     $('#back-to-top').addClass('show');
  //     $('#back-to-top').removeClass('hide');
  //   } else {
  //     $('#back-to-top').removeClass('show');
  //     $('#back-to-top').addClass('hide');
  //   }
  // });
}

const scrollToTop = () => {
  window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  // above is not supported by safari, chrome or ie
  smoothscroll.polyfill();
};

export default function ScrollToTop() {
  return (
    <>
      {scrollbkToTop()}
      <StyledDiv>
        <StyledButton id="back-to-top" className="hide" onClick={scrollToTop}>
          Top
        </StyledButton>
      </StyledDiv>
    </>
  );
}
