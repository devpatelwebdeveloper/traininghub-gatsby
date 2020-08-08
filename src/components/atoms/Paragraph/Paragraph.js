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
const StyledParagraphJustify = styled(StyledParagraph)`
  text-align: justify;
`;

export default class Paragraph extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    centered: PropTypes.bool.isRequired,
    justified: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    children: "",
    centered: false,
    justified: false,
  };
  render() {
    const { children, centered, justified } = this.props;
    if (centered && !justified) {
      return <StyledParagraphCenter>{children}</StyledParagraphCenter>;
    } else if (justified && !centered) {
      return <StyledParagraphJustify>{children}</StyledParagraphJustify>;
    }

    return <StyledParagraph>{children}</StyledParagraph>;
  }
}
