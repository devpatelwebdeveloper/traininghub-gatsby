import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Styles from "../../../styles/Styles";

const StyledParagraph = styled.p`
  color: ${Styles.Colors.DefaultFont};
  font-size: ${Styles.FontSize.Medium};
  font-weight: ${Styles.FontWeight.Normal};
  line-height: ${Styles.LineHeight.Medium};
  font-family: ${Styles.FontFamily.Paragraph};
  ${Styles.ScreenSizes.small`
  font-size: ${Styles.FontSize.Small};
  font-weight: ${Styles.FontWeight.Normal};
  line-height: ${Styles.LineHeight.Small};
   `};
`;

const StyledParagraphCenter = styled(StyledParagraph)`
  text-align: center;
`;

export default class Paragraph extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    center: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    children: "",
    center: false,
  };
  render() {
    const { children, center } = this.props;
    if (center) {
      return <StyledParagraphCenter>{children}</StyledParagraphCenter>;
    }
    return <StyledParagraph>{children}</StyledParagraph>;
  }
}
