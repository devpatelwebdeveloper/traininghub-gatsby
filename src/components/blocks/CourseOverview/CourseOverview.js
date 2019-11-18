import React from "react";
import PropTypes from "prop-types";
import Section from "../../organisms/Section/Section";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CourseIntro from "../../molecules/CourseIntro/CourseIntro";
import Styles from "../../../styles/Styles";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import BaseTile from "../../atoms/BaseTile/BaseTile";
import Paragraph from "../../atoms/Paragraph/Paragraph";

export default class StudentJourney extends React.Component {
  static propTypes = {
    introText: PropTypes.any.isRequired,
  };
  static defaultProps = {
    introText: "",
  };
  render() {
    const { introText } = this.props;
    return (
      <>
        <Section marginTop="25px" marginBottom="25px">
          <Row>
            <Col>Test</Col>
            <Col>Test</Col>
            <Col>Test</Col>
          </Row>
          <Row>
            <Col md={{ span: 8, offset: 2 }}>
              <CourseIntro text={introText} />
            </Col>
          </Row>
        </Section>
      </>
    );
  }
}
