import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import BaseLink from "../../atoms/BaseLink/BaseLink";

const ButtonPrimary = styled.button`
  color: ${Styles.Colors.BaseWhite};
  font-family: ${Styles.FontFamily.Heading};
  font-size: ${Styles.FontSize.Medium};
  font-weight: ${Styles.FontWeight.Normal};
  background-color: ${Styles.Colors.DefaultFont};
  border: 2px solid transparent;
  margin: 10px 10px;
  min-width: 200px;
  height: 48px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    color: ${Styles.Colors.DefaultFont};
    background-color: ${Styles.Colors.BaseWhite};
    border: 2px solid ${Styles.Colors.DefaultFont};
  }
  ${Styles.ScreenSizes.small`
  width:100%;
  margin: 10px auto;
   `};
`;

const ButtonOutline = styled.button`
  color: ${Styles.Colors.DefaultFont};
  font-family: ${Styles.FontFamily.Heading};
  font-size: ${Styles.FontSize.Medium};
  font-weight: ${Styles.FontWeight.Normal};
  background-color: ${Styles.Colors.BaseWhite};
  border: 2px solid ${Styles.Colors.DefaultFont};
  margin: 10px 10px;
  min-width: 200px;
  height: 48px;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  &:hover {
    color: ${Styles.Colors.BaseWhite};
    background-color: ${Styles.Colors.DefaultFont};
    border: 2px solid ${Styles.Colors.BaseWhite};
  }
  ${Styles.ScreenSizes.small`
  width:100%;
  margin: 10px auto;
   `};
`;

export default class Button extends React.Component {
  static propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    external: PropTypes.bool.isRequired,
    outline: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    link: "#",
    text: "Button",
    external: false,
    outline: false,
  };
  render() {
    const { link, text, external, outline } = this.props;
    const children = outline ? (
      <ButtonOutline>{text}</ButtonOutline>
    ) : (
      <ButtonPrimary>{text}</ButtonPrimary>
    );
    return <BaseLink children={children} href={link} external={external} />;
  }
}
