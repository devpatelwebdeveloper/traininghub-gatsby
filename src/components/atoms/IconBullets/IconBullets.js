import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { UlIcon } from "../../../contents/icons/icons";
import Paragraph from "../../atoms/Paragraph/Paragraph";

const StyledCol = styled(Col)`
  margin: auto;
`;
const StyledSpan = styled.span`
  display: inline-block;
  margin: 5px;
`;

export default class BulletIcons extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };
  static defaultProps = {
    title: "Title",
    icon: UlIcon,
  };
  render() {
    const { title, icon } = this.props;
    return (
      <React.Fragment>
        <StyledCol md={4}>
          <StyledSpan>{icon} </StyledSpan>
          <StyledSpan>
            <Paragraph>{title}</Paragraph>
          </StyledSpan>
        </StyledCol>
      </React.Fragment>
    );
  }
}
