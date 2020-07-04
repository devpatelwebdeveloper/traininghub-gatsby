import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import styled from "styled-components";
import CarouselItem from "../../molecules/SliderSingle/SliderSingle";
import { HomePageSliders } from "../../../contents/HomePageSliders";

const StyledCarousel = styled(Carousel)`
  width: 100%;
  min-height: 450px;
`;

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <StyledCarousel
      activeIndex={index}
      direction={direction}
      onSelect={handleSelect}>
      {HomePageSliders.map((HomePageSlider) => {
        return (
          <Carousel.Item>
            <CarouselItem
              title={HomePageSlider.title}
              background={HomePageSlider.background}
              image={HomePageSlider.image}
              description={HomePageSlider.description}
              buttonText={HomePageSlider.buttonText}
              buttonLink={HomePageSlider.buttonLink}
              buttonExternal={HomePageSlider.external}
              buttonStyle={HomePageSlider.buttonStyle}
            />
          </Carousel.Item>
        );
      })}
    </StyledCarousel>
  );
}
