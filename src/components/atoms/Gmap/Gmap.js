import React from "react";
import styled from "styled-components";

const StyledMap = styled.div`
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  filter: progid:DXImageTransform.Microsoft.BasicImage(grayScale=1);
  iframe {
    width: 100%;
    height: 450px;
  }
`;

export default function Mapembed() {
  return (
    <>
      <StyledMap>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.157780541142!2d-79.68809814848568!3d43.665688279018546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b3f02e4b6d2d3%3A0x87431790546d9e!2s989%20Derry%20Rd%20E%20%23402%2C%20Mississauga%2C%20ON%20L5T%202J8!5e0!3m2!1sen!2sca!4v1573943137327!5m2!1sen!2sca"
          frameBorder="0"
          allowFullScreen=""></iframe>
      </StyledMap>
    </>
  );
}
