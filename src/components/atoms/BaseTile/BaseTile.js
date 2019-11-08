import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
const ResponsiveImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

export default class BaseTile extends React.Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  };
  static defaultProps = {
    image: "https://unsplash.it/1500?random",
    alt: "alt",
  };
  render() {
    const { image, alt } = this.props;
    return <ResponsiveImage src={image} alt={alt} title={alt} />;
  }
}
