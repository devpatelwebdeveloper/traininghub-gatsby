import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import Section from "../../organisms/Section/Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import BaseTile from "../../atoms/BaseTile/BaseTile";
import BaseLink from "../../atoms/BaseLink/BaseLink";
import Button from "../../molecules/Button/Button";

const StyledContainer = styled(Container)`
  .col-md-6 {
    margin: auto;
  }
`;

const AlternateRow = styled(Row)`
  .mobileShow {
    display: none;
    ${Styles.ScreenSizes.small`
    display: inline-block;
    `}
  }
  .mobileHide {
    display: inline-block;
    ${Styles.ScreenSizes.small`
    display: none;
    `}
  }
`;

export default class ContentGenericAligned extends React.PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    imageLeft: PropTypes.bool,
    buttonOneText: PropTypes.string.isRequired,
    buttonOneLink: PropTypes.string.isRequired,
    buttonOneExternal: PropTypes.bool.isRequired,

    buttonTwoText: PropTypes.string.isRequired,
    buttonTwoLink: PropTypes.string.isRequired,
    buttonTwoExternal: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    title: "Title",
    Text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin nibh sit amet. Egestas purus viverra accumsan in. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Libero volutpat sed cras ornare arcu dui vivamus arcu. Vel fringilla est ullamcorper eget. Tincidunt lobortis feugiat vivamus at augue eget. Elit duis tristique sollicitudin nibh sit. Massa tincidunt nunc pulvinar sapien et. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Purus in massa tempor nec feugiat nisl pretium. Sodales ut etiam sit amet nisl. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Urna molestie at elementum eu facilisis sed. Sem viverra aliquet eget sit amet. Porta nibh venenatis cras sed. Sollicitudin ac orci phasellus egestas tellus. Suspendisse ultrices gravida dictum fusce.`,
    image: "",
    alt: "Alt Text",
    imageLeft: false,
    buttonOneText: "Button 1",
    buttonOneLink: "/",
    buttonOneExternal: false,
    buttonTwo: false,
    buttonTwoText: "Button 2",
    buttonTwoLink: "/",
    buttonTwoExternal: false,
  };
  render() {
    const {
      title,
      text,
      image,
      alt,
      imageLeft,
      buttonOneLink,
      buttonOneText,
      buttonOneExternal,
      buttonTwoLink,
      buttonTwoText,
      buttonTwoExternal,
    } = this.props;
    const img = <BaseTile image={image} alt={alt} />;

    const FirstButton =
      buttonOneText === "Button 1" ? null : (
        <Button
          link={buttonOneLink}
          text={buttonOneText}
          external={buttonOneExternal}
        />
      );

    const SecondButton =
      buttonTwoText === "Button 2" ? null : (
        <Button
          link={buttonTwoLink}
          text={buttonTwoText}
          external={buttonTwoExternal}
        />
      );

    const textArea = (
      <React.Fragment>
        <BaseTitle title={title} size="H3" />
        <Paragraph>{text}</Paragraph>

        {FirstButton}
        {SecondButton}
      </React.Fragment>
    );

    if (imageLeft) {
      return (
        <StyledContainer>
          <AlternateRow>
            <Col md={6} className="mobileHide">
              {img}
            </Col>
            <Col md={6}>{textArea}</Col>
            <Col md={6} className="mobileShow">
              {img}
            </Col>
          </AlternateRow>
        </StyledContainer>
      );
    }

    return (
      <StyledContainer>
        <Row>
          <Col md={6}>{textArea}</Col>
          <Col md={6}>{img}</Col>
        </Row>
      </StyledContainer>
    );
  }
}
