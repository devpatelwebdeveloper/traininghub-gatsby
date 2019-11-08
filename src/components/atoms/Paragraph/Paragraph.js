import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import media from "../../../styles/ScreenSizes";
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
    centered: PropTypes.bool.isRequired,
  };
  static defaultProps = {
    children: "",
    centered: false,
  };
  render() {
    const { children, centered } = this.props;
    if (centered) {
      return <StyledParagraphCenter>{children}</StyledParagraphCenter>;
    }
    return <StyledParagraph>{children}</StyledParagraph>;
  }
}

// export default function Paragraph(props) {
//   return <StyledParagraph>{props.children}</StyledParagraph>;
// }

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
};
