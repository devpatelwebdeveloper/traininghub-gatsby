import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
// import { RandomId } from "../../GlobalFunctions/GlobalFuncions";
import Styles from "../../../styles/Styles";
import Container from "react-bootstrap/Container";

const StyledSection = styled.section`
  margin-top: 50px;
  margin-bottom: 50px;
  .white {
    background-color: #ffffff;
  }
  .blue {
    background-color: #00aeef;
  }
`;

function randomString(length, chars) {
  var result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.round(Math.random() * (chars.length - 1))];
  return result;
}

export default class Section extends React.Component {
  static propTypes = {
    Id: PropTypes.string,
    ComposedClassName: PropTypes.string,
    Fluid: PropTypes.bool.isRequired,
    // Children: PropTypes.any.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
  };
  static defaultProps = {
    Id: "",
    ComposedClassName: "white",
    Fluid: false,
    children: "",
  };

  render() {
    const { ComposedClassName, Fluid, children, Id } = this.props;

    const uId = Id
      ? Id
      : randomString(
          32,
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        );
    return (
      <StyledSection id={uId} className={ComposedClassName}>
        <Container fluid={Fluid}>{children}</Container>
      </StyledSection>
    );
  }
}
