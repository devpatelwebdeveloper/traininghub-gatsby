import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import { Colors } from "../../../styles/Variables";

const CenteredTitle = styled.div`
  text-align: center;
  color: ${Colors.DefaultFont};
  h1 {
    font-size: 24px;
    line-height: 28px;
    ${Styles.ScreenSizes.huge`
    color: ${Colors.DefaultFont};
     `}
  
    ${Styles.ScreenSizes.large`
     color: ${Colors.BrandBlue};
      `}
      ${Styles.ScreenSizes.medium`
     color: ${Colors.DefaultFont};
      `}
  }
`;

const UnderLined = styled.hr`
  border-bottom: 5px solid rgb(242, 195, 0);
  width: 50px;
  display: block;
  line-height: 16px;
`;

let headingBody = null;
export default class BaseTitle extends React.PureComponent {
  static propTypes = {
    title: PropTypes.any.isRequired,
    size: PropTypes.string.isRequired,
    center: PropTypes.bool,
    underline: PropTypes.bool,
  };
  static defaultProps = {
    title: "Heading",
    size: "H2",
    center: false,
    underline: false,
  };
  render() {
    const { title, size, center, underline } = this.props;
    switch (size) {
      case "H1":
        headingBody = <h1>{title}</h1>;
        break;
      case "H2":
        headingBody = <h2>{title}</h2>;
        break;
      case "H3":
        headingBody = <h3>{title}</h3>;
        break;
      case "H4":
        headingBody = <h4>{title}</h4>;
        break;
      case "H5":
        headingBody = <h5>{title}</h5>;
        break;
      case "H6":
        headingBody = <h6>{title}</h6>;
        break;
      default:
        headingBody = null;
    }
    // check if centered?
    headingBody = center ? (
      <CenteredTitle>{headingBody}</CenteredTitle>
    ) : (
      headingBody
    );
    // Check if underlined?
    headingBody = underline ? (
      <>
        {headingBody}
        <UnderLined />
      </>
    ) : (
      headingBody
    );

    return <>{headingBody}</>;
  }
}
