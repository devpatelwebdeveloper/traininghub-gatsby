import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CenteredTitle = styled.div`
  text-align: center;
`;

const UnderLined = styled.hr`
  border-bottom: 5px solid rgb(242, 195, 0);
  width: 50px;
  display: block;
  line-height: 16px;
`;

let headingBody = null;
export default class BaseTitle extends React.PureComponent {
  render() {
    switch (this.props.size) {
      case 'H1':
        headingBody = <h1>{this.props.title}</h1>;
        break;
      case 'H2':
        headingBody = <h2>{this.props.title}</h2>;
        break;
      case 'H3':
        headingBody = <h3>{this.props.title}</h3>;
        break;
      case 'H4':
        headingBody = <h4>{this.props.title}</h4>;
        break;
      case 'H5':
        headingBody = <h5>{this.props.title}</h5>;
        break;
      case 'H6':
        headingBody = <h6>{this.props.title}</h6>;
        break;
      default:
        headingBody = null;
    }
    // check if centered?
    headingBody = this.props.center ? (
      <CenteredTitle>{headingBody}</CenteredTitle>
    ) : (
      headingBody
    );
    // Check if underlined?
    headingBody = this.props.underline ? (
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

BaseTitle.propTypes = {
  title: PropTypes.any.isRequired,
  size: PropTypes.string.isRequired,
  center: PropTypes.bool,
  underline: PropTypes.bool,
};
