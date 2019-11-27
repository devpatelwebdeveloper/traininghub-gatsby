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
    imageOne: PropTypes.string,
    imageOneAlt: PropTypes.string,
    imageTwo: PropTypes.string,
    imageTwoAlt: PropTypes.string,
  };
  static defaultProps = {
    heading: "Heading",
    paragraphContent: "",
    imageOne: "",
    imageOneAlt: "",
    imageTwo: "",
    imageTwoAlt: "",
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

    const images = imageOne ? (
      <Row>
        <Col>
          <BaseTile image={imageOne} alt={imageOneAlt} />
        </Col>
        <Col>
          <BaseTile image={imageTwo} alt={imageTwoAlt} />
        </Col>
      </Row>
    ) : null;
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
        {images}
      </Section>
    );
  }
}
