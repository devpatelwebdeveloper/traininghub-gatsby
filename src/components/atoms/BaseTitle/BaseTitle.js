import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import { Colors } from "../../../styles/Variables";

const H1 = styled.h1`
  color: ${Styles.Colors.DefaultFont};
  font-size: ${Styles.HeadingSize.H1};
  font-weight: ${Styles.FontWeight.Bold};
  line-height: ${Styles.HeadingHeight.H1};
  font-family: ${Styles.FontFamily.Heading};
  ${Styles.ScreenSizes.medium`
  font-size: ${Styles.HeadingSizeMobile.H1};
  font-weight: ${Styles.FontWeight.Bold};
  line-height: ${Styles.HeadingHeightMobile.H1};
   `};
`;
const H2 = styled.h2`
  color: ${Styles.Colors.DefaultFont};
  font-size: ${Styles.HeadingSize.H2};
  font-weight: ${Styles.FontWeight.Bold};
  line-height: ${Styles.HeadingHeight.H2};
  font-family: ${Styles.FontFamily.Heading};
  ${Styles.ScreenSizes.medium`
  font-size: ${Styles.HeadingSizeMobile.H2};
  font-weight: ${Styles.FontWeight.Bold};
  line-height: ${Styles.HeadingHeightMobile.H2};
   `};
`;
const H3 = styled.h3`
  color: ${Styles.Colors.DefaultFont};
  font-size: ${Styles.HeadingSize.H3};
  font-weight: ${Styles.FontWeight.Bold};
  line-height: ${Styles.HeadingHeight.H3};
  font-family: ${Styles.FontFamily.Heading};
  ${Styles.ScreenSizes.medium`
  font-size: ${Styles.HeadingSizeMobile.H3};
  font-weight: ${Styles.FontWeight.Bold};
  line-height: ${Styles.HeadingHeightMobile.H3};
   `};
`;
const H4 = styled.h4`
  color: ${Styles.Colors.DefaultFont};
  font-size: ${Styles.HeadingSize.H4};
  font-weight: ${Styles.FontWeight.Bold};
  line-height: ${Styles.HeadingHeight.H4};
  font-family: ${Styles.FontFamily.Heading};
  ${Styles.ScreenSizes.medium`
  font-size: ${Styles.HeadingSizeMobile.H4};
  font-weight: ${Styles.FontWeight.Bold};
  line-height: ${Styles.HeadingHeightMobile.H4};
   `};
`;
const H5 = styled.h5`
  color: ${Styles.Colors.DefaultFont};
  font-size: ${Styles.HeadingSize.H5};
  font-weight: ${Styles.FontWeight.Bold};
  line-height: ${Styles.HeadingHeight.H5};
  font-family: ${Styles.FontFamily.Heading};
  ${Styles.ScreenSizes.medium`
  font-size: ${Styles.HeadingSizeMobile.H5};
  font-weight: ${Styles.FontWeight.Bold};
  line-height: ${Styles.HeadingHeightMobile.H5};
   `};
`;
const H6 = styled.h6`
  color: ${Styles.Colors.DefaultFont};
  font-size: ${Styles.HeadingSize.H6};
  font-weight: ${Styles.FontWeight.Bold};
  line-height: ${Styles.HeadingHeight.H6};
  font-family: ${Styles.FontFamily.Heading};
  text-transform: uppercase;
  ${Styles.ScreenSizes.medium`
  font-size: ${Styles.HeadingSizeMobile.H6};
  font-weight: ${Styles.FontWeight.Bold};
  line-height: ${Styles.HeadingHeightMobile.H6};
   `};
`;

const CenteredTitle = styled.div`
  text-align: center;
`;

const UnderLined = styled.hr`
  border-bottom: 5px solid ${Styles.Colors.BrandYellow};
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
        headingBody = <H1>{title}</H1>;
        break;
      case "H2":
        headingBody = <H2>{title}</H2>;
        break;
      case "H3":
        headingBody = <H3>{title}</H3>;
        break;
      case "H4":
        headingBody = <H4>{title}</H4>;
        break;
      case "H5":
        headingBody = <H5>{title}</H5>;
        break;
      case "H6":
        headingBody = <H6>{title}</H6>;
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
