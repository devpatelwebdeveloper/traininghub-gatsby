import React from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import BaseTile from "../../atoms/BaseTile/BaseTile";
import Button from "../../molecules/Button/Button";

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
  position: absolute;
  right: 15%;
  left: 15%;
  z-index: 10;
  padding-top: 20px;
  padding-bottom: 20px;
  .col {
    margin: auto;
  }
  text-align: center;
  h2,
  p {
    color: #fff;
  }
`;
const ImageCol = styled(Col)`
  ${Styles.ScreenSizes.small`
display:none
 `};
`;

export default class CarouselItem extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    buttonText: PropTypes.string.isRequired,
    buttonLink: PropTypes.string.isRequired,
    buttonStyle: PropTypes.bool.isRequired,
    buttonExternal: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    title: "",
    background: "",
    image: "",
    description: "",
    buttonText: "",
    buttonLink: "",
    buttonStyle: false,
    buttonExternal: false,
  };

  render() {
    const {
      title,
      background,
      image,
      description,
      buttonText,
      buttonLink,
      buttonStyle,
      buttonExternal,
    } = this.props;
    const ButtonType = buttonText ? (
      <Button
        link={buttonLink}
        text={buttonText}
        outline
        external={buttonExternal ? true : false}
      />
    ) : null;
    return (
      <>
        <StyledImg className="d-block w-100" src={background} alt={title} />
        <SlideCaption>
          <Row>
            <Col>
              <SlideTitle title={title} size="H2" />
              <SlideParagraph>{description}</SlideParagraph>
              {ButtonType}
            </Col>
            <ImageCol>
              <BaseTile image={image} alt={title} />
            </ImageCol>
          </Row>
        </SlideCaption>
      </>
    );
  }
}
