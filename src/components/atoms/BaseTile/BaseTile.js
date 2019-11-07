import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const ResponsiveImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export default class BaseTile extends React.PureComponent {
  static propTypes = {
    Image: PropTypes.string.isRequired,
    Alt: PropTypes.string.isRequired,
  };
  static defaultProps = {
    Image: "https://unsplash.it/1500?random",
    Alt: "alt",
  };
  render() {
    const { Image, Alt } = this.props;
    return <ResponsiveImage src={Image} alt={Alt} title={Alt} />;
  }
}
