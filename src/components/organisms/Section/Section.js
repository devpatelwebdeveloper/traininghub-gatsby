import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import Container from "react-bootstrap/Container";

const StyledSection = styled.section`
  margin-top: ${(props) => props.marginTop || "50px"};
  margin-bottom: ${(props) => props.marginBottom || "50px"};
  padding: ${(props) => props.padding || "0px"} 0px;
  background-color: ${(props) => props.background || Styles.Colors.BaseWhite};
  .container-fluid {
    padding: 0px;
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
    id: PropTypes.string,
    fluid: PropTypes.bool.isRequired,
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    background: PropTypes.string.isRequired,
    marginTop: PropTypes.string.isRequired,
    marginBottom: PropTypes.string.isRequired,
    padding: PropTypes.string.isRequired,
  };
  static defaultProps = {
    id: "",
    fluid: false,
    children: "",
    background: Styles.Colors.BaseWhite,
    marginTop: "auto",
    marginBottom: "auto",
    padding: "0px",
  };

  render() {
    const {
      fluid,
      children,
      id,
      background,
      marginTop,
      marginBottom,
      padding,
    } = this.props;

    const uId = id
      ? id
      : randomString(
          32,
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
        );
    return (
      <StyledSection
        id={uId}
        background={background}
        marginTop={marginTop}
        marginBottom={marginBottom}
        padding={padding}>
        <Container fluid={fluid}>{children}</Container>
      </StyledSection>
    );
  }
}
