/* eslint-disable react/prefer-stateless-function */
import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

export default class BaseLink extends React.Component {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]).isRequired,
    external: PropTypes.bool,
    href: PropTypes.string.isRequired,
    composedClassName: PropTypes.string,
  };

  static defaultProps = {
    children: "",
    external: false,
    href: "#",
    composedClassName: "",
  };

  render() {
    const { children, external, href, composedClassName } = this.props;
    if (external) {
      return (
        <a href={href} className={composedClassName}>
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={composedClassName}>
        {children}
      </Link>
    );
  }
}
