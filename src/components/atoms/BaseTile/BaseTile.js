import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
const ResponsiveImage = styled.img`
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: auto;
`;

export default class BaseTile extends React.PureComponent {
  render() {
    return (
      <ResponsiveImage
        src={this.props.image}
        alt={this.props.alt}
        title={this.props.alt}
      />
    );
  }
}

BaseTile.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
