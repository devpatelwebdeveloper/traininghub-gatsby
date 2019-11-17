import React from "react";
import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";

const Icon = styled.img`
  width: 50px;
  height: 50px;
  display: block;
  margin-right: auto;
  margin-left: auto;
`;
const StyledCol = styled(Col)`
  margin: 20px auto;
`;

export default class IconStatistics extends React.Component {
  static propTypes = {
    statistic: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
  };
  static defaultProps = {
    statistic: "",
    text: "",
    icon: "",
  };
  render() {
    const { text, statistic, icon } = this.props;

    return (
      <>
        <StyledCol md={3}>
          <Row>
            <Col xs={3}>
              <Icon src={icon} alt={statistic} />
            </Col>
            <Col xs={9}>
              <BaseTitle title={statistic} size="H5" />
              <Paragraph>{text}</Paragraph>
            </Col>
          </Row>
        </StyledCol>
      </>
    );
  }
}
