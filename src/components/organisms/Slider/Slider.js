import React, { useState } from "react";

import Carousel from 'react-bootstrap/Carousel';

import styled from 'styled-components';

const StyledCarousel = styled(Carousel)`
  height: 50vh;
`

const StyledImg = styled.img`
  height: 50vh;
`

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <StyledCarousel activeIndex={index} direction={direction} onSelect={handleSelect}>
      <Carousel.Item>
        <StyledImg
          className="d-block w-100"
          src="https://unsplash.it/1500?random"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StyledImg
          className="d-block w-100"
          src="https://unsplash.it/1500?random"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <StyledImg
          className="d-block w-100"
          src="https://unsplash.it/1500?random"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </StyledCarousel>
  );
}