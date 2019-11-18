import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";

export default class CourseOverview extends React.Component {
  static propTypes = {
    text: PropTypes.any.isRequired,
  };
  static defaultProps = {
    text: "",
  };
  render() {
    const { text } = this.props;

    return (
      <>
        <BaseTitle title="Course Overview" size="H2" center underline />
        <Paragraph center>{text}</Paragraph>
      </>
    );
  }
}
