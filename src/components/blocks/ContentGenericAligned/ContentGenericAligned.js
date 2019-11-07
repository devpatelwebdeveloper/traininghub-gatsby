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

// const Section = styled.section`
//   margin-top: 50px;
//   margin-bottom: 50px;
// `;

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
    Title: PropTypes.string.isRequired,
    Text: PropTypes.any.isRequired,
    Image: PropTypes.string.isRequired,
    Alt: PropTypes.string.isRequired,
    ImageLeft: PropTypes.bool,
    ButtonOneText: PropTypes.string.isRequired,
    ButtonOneLink: PropTypes.string.isRequired,
    ButtonOneExternal: PropTypes.bool.isRequired,
    ButtonTwoText: PropTypes.string.isRequired,
    ButtonTwoLink: PropTypes.string.isRequired,
    ButtonTwoExternal: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    Title: "Title",
    Text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit duis tristique sollicitudin nibh sit amet. Egestas purus viverra accumsan in. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Ullamcorper eget nulla facilisi etiam dignissim diam quis. Libero volutpat sed cras ornare arcu dui vivamus arcu. Vel fringilla est ullamcorper eget. Tincidunt lobortis feugiat vivamus at augue eget. Elit duis tristique sollicitudin nibh sit. Massa tincidunt nunc pulvinar sapien et. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. Purus in massa tempor nec feugiat nisl pretium. Sodales ut etiam sit amet nisl. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. Urna molestie at elementum eu facilisis sed. Sem viverra aliquet eget sit amet. Porta nibh venenatis cras sed. Sollicitudin ac orci phasellus egestas tellus. Suspendisse ultrices gravida dictum fusce.`,
    Image: "https://unsplash.it/1500?random",
    Alt: "Alt Text",
    ImageLeft: false,
    ButtonOneText: "Button 1",
    ButtonOneLink: "/",
    ButtonOneExternal: false,
    ButtonTwoText: "Button 2",
    ButtonTwoLink: "/",
    ButtonTwoExternal: false,
  };
  render() {
    const {
      Title,
      Text,
      Image,
      Alt,
      ImageLeft,
      ButtonOneLink,
      ButtonOneText,
      ButtonOneExternal,
      ButtonTwoLink,
      ButtonTwoText,
      ButtonTwoExternal,
    } = this.props;
    const img = <BaseTile Image={Image} Alt={Alt} />;

    const textArea = (
      <React.Fragment>
        <BaseTitle title={Title} size="H3" />
        <Paragraph>{Text}</Paragraph>
        <BaseLink
          external={ButtonOneExternal}
          href={ButtonOneLink}
          composedClassName="btn btn-md btn-primary">
          {ButtonOneText}
        </BaseLink>
        <BaseLink
          external={ButtonTwoExternal}
          href={ButtonTwoLink}
          composedClassName="btn btn-md btn-primary">
          {ButtonTwoText}
        </BaseLink>
      </React.Fragment>
    );

    if (ImageLeft) {
      return (
        <Section>
          <Container>
            <AlternateRow>
              <Col md={6} className="mobileHide">
                {img}
              </Col>
              <Col md={6}>{textArea}</Col>
              <Col md={6} className="mobileShow">
                {img}
              </Col>
            </AlternateRow>
          </Container>
        </Section>
      );
    }

    return (
      <Section className="blue">
        <Container>
          <Row>
            <Col md={6}>{textArea}</Col>
            <Col md={6}>{img}</Col>
          </Row>
        </Container>
      </Section>
    );
  }
}
