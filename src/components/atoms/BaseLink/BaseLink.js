/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

export default class BaseLink extends React.Component {
  render() {
    if (this.props.external) {
      return (
        <a href={this.props.href} className={this.props.composedClassName}>
          {this.props.children}
        </a>
      );
    }
    return (
      <Link to={this.props.href} className={this.props.composedClassName}>
        {this.props.children}
      </Link>
    );
  }
}

BaseLink.propTypes = {
  children: PropTypes.any.isRequired,
  external: PropTypes.bool,
  href: PropTypes.string.isRequired,
  composedClassName: PropTypes.string,
};
