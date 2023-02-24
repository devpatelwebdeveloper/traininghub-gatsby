import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import Col from "react-bootstrap/Col";
import BaseTile from "../../atoms/BaseTile/BaseTile";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import BaseLink from "../../atoms/BaseLink/BaseLink";
import Button from "../Button/Button";
import Paragraph from "../../atoms/Paragraph/Paragraph";

const CardType = styled.div`
  border-radius: 8px;
  background-color: ${Styles.Colors.BaseLightBlue};
  border: 1px solid ${Styles.Colors.BaseLightBlue};
  border-bottom-width: 2px;
  width: 100%;
  min-height: 550px;
  margin-bottom: 3%;
  overflow: hidden;
  text-align: center;
  a:hover {
    color: #00aeef;
  }
  h4,
  p {
    padding: 8px;
    color: ;
  }
`;

const ImgC = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
  overflow: hidden;
  width: 100%;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
  transition: all 0.3s;
  &:hover {
    width: 120%;
    margin: 0 0 0 -10%;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    -ms-transition: all 0.3s;
    -o-transition: all 0.3s;
    transition: all 0.3s;
  }
`;
const ClearLine = styled.div`
  width: 100%;
  height: 20px;
`;

export default class EnhancedTiles extends React.PureComponent {
  static propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    btnlink: PropTypes.string,
    btntext: PropTypes.string,
  };
  static defaultProps = {
    image: "https://unsplash.it/1500?random",
    alt: "",
    title: "tiles",
    text: "text",
  };
  render() {
    const { image, alt, title, text, btnlink, btntext } = this.props;
    const btn = btnlink ? <Button link={btnlink} text={btntext} /> : null;
    const enhancedText = (text, n) => {
      return text.length > n ? `${text.substr(0, n - 1)}...` : text;
    };

    const linkedImg = btnlink ? (
      <BaseLink href={btnlink}>
        <ImgC>
          <BaseTile image={image} alt={alt} />
        </ImgC>
      </BaseLink>
    ) : (
      <ImgC>
        <BaseTile image={image} alt={alt} />
      </ImgC>
    );
    return (
      <Col lg={4} md={6} sm={12}>
        <CardType>
          {linkedImg}
          <ClearLine />
          <BaseTitle title={title} size="H5" />
          {/* <Paragraph>{text}</Paragraph> */}
          <Paragraph>{enhancedText(text, 200)}</Paragraph>
          {btn}
        </CardType>
      </Col>
    );
  }
}
