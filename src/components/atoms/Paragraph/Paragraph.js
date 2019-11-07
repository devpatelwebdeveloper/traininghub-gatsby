import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import media from "../../../styles/ScreenSizes";

const StyledParagraph = styled.p`
  color: #000000;
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
  ${media.medium`
  font-size: 16px;
  font-weight: normal;
  line-height: 20px;
   `}
  ${media.small`
  font-size: 12px;
  font-weight: normal;
  line-height: 16px;
   `}
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
