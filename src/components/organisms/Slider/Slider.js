import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import BaseTile from "../../atoms/BaseTile/BaseTile";

const StyledCarousel = styled(Carousel)`
  width: 100%;
  min-height: 450px;
`;
const StyledImg = styled.img`
  height: 450px;
`;
const SlideTitle = styled(BaseTitle)`
  color: ${Styles.Colors.BaseWhite};
`;
const SlideParagraph = styled(Paragraph)`
  color: ${Styles.Colors.BaseWhite};
`;

const SlideCaption = styled(Carousel.Caption)`
  color: #00aeef;
  text-decoration: underline;
  margin: auto;
`;

export default function Slider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setDirection(e.direction);
  };

  return (
    <StyledCarousel
      activeIndex={index}
      direction={direction}
      onSelect={handleSelect}>
      <Carousel.Item>
        <StyledImg
          className="d-block w-100"
          src="https://unsplash.it/1500?random"
          alt="First slide"
        />
        <SlideCaption>
          <Row>
            <Col>
              <SlideTitle title="Education and Training Services" size="H2" />
              <SlideParagraph>
                Our experienced learning professionals deliver information
                technology trainings that help IT teams master new skills vital
                to organizations today.
              </SlideParagraph>
            </Col>

            <Col></Col>
          </Row>
        </SlideCaption>
      </Carousel.Item>
    </StyledCarousel>
  );
}
