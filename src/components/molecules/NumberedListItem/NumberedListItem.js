import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";

const Li = styled.li`
  font-size: 16px;
  line-height: 1.2;
  margin-bottom: 30px;
  padding-left: 30px;
  &:last-child {
    border-left: 3px solid white;
    margin-left: -3px;
  }
  &:before {
    background-color: ${Styles.Colors.DefaultFont};
    border: 3px solid ${Styles.Colors.BaseLightBlue};
    border-radius: 50%;
    color: ${Styles.Colors.BaseLightBlue};
    content: counter(numbered-list, decimal);
    counter-increment: numbered-list;
    display: block;
    font-weight: ${Styles.FontWeight.Bold};
    font-size: ${Styles.FontSize.Large};
    width: 50px;
    height: 50px;
    margin-top: -10px;
    line-height: 40px;
    position: absolute;
    left: -28px;
    text-align: center;
    letter-spacing: -2px;
  }
`;

export default class ListItem extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    text: PropTypes.any.isRequired,
  };
  static defaultProps = {
    title: "",
    text: false,
  };
  render() {
    const { title, text } = this.props;

    return (
      <>
        <Li>
          <BaseTitle title={title} size="H3" />
          <Paragraph>{text}</Paragraph>
        </Li>
      </>
    );
  }
}
