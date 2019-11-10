import React from "react";
import PropTypes from "prop-types";
import Section from "../../organisms/Section/Section";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Styles from "../../../styles/Styles";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import BaseTile from "../../atoms/BaseTile/BaseTile";
import Paragraph from "../../atoms/Paragraph/Paragraph";

export default class StudentJourney extends React.Component {
  static propTypes = {
    heading: PropTypes.string.isRequired,
    paragraphContent: PropTypes.any.isRequired,
    imageOne: PropTypes.string.isRequired,
    imageOneAlt: PropTypes.string.isRequired,
    imageTwo: PropTypes.string.isRequired,
    imageTwoAlt: PropTypes.string.isRequired,
  };
  static defaultProps = {
    heading: "Heading",
    paragraphContent: "",
    imageOne: "https://unsplash.it/1500?random",
    imageOneAlt: "Alt 1",
    imageTwo: "https://unsplash.it/1500?random",
    imageTwoAlt: "Alt 2",
  };
  render() {
    const {
      heading,
      paragraphContent,
      imageOne,
      imageOneAlt,
      imageTwo,
      imageTwoAlt,
    } = this.props;
    return (
      <Section
        background={Styles.Colors.BaseElement}
        padding="20px"
        marginBottom="50px">
        <BaseTitle title={heading} size="H2" center underline />
        <Row>
          <Col>
            <Paragraph centered>{paragraphContent}</Paragraph>
          </Col>
        </Row>
        <Row>
          <Col>
            <BaseTile Image={imageOne} Alt={imageOneAlt} />
          </Col>
          <Col>
            <BaseTile Image={imageTwo} Alt={imageTwoAlt} />
          </Col>
        </Row>
      </Section>
    );
  }
}
