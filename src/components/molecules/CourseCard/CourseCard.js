import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import Col from "react-bootstrap/Col";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";

const StyledCol = styled(Col)`
  margin: 25px auto;
`;

const Card = styled.div`
  width: 100%;
  height: 9rem;
  display: block;
  position: relative;
  text-align: left;
  color: ${Styles.Colors.BaseWhite};
  background-color: ${Styles.Colors.BaseWhite};
  text-decoration: none;
  border-radius: 6px;
  box-shadow: 12px 15px 20px 0px rgba(46, 61, 73, 0.15);
  transition: box-shadow 0.3s ease, border 0.3s ease;

  &:hover {
    box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
  }
`;

const StyledImg = styled.img`
  width: auto;
  max-width: 25%;
  height: 9rem;
  float: left;
  margin: 0 20px;
  border-bottom-left-radius: 6px;
  border-top-left-radius: 6px;
`;

const CardContent = styled.div`
  width: 100%;
  padding: 20px 20px;
  h6 {
    display: inline;
    font-size: 10px;
    color: ${Styles.Colors.BrandOrange};
    background-color: rgba(219, 59, 0, 0.1);
    padding: 5px 10px;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
  h5 {
    margin: 10px;
    font-size: ${Styles.FontSize.Medium};
  }
`;

export default class BaseTile extends React.PureComponent {
  static propTypes = {
    tag: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    href: PropTypes.string,
  };
  static defaultProps = {
    tag: "Title",
    title: "Subtitle",
    image: "https://unsplash.it/1500?random",
    alt: "Alt",
    href: "",
  };
  render() {
    const { tag, title, image, alt, href } = this.props;
    if (href) {
      return (
        <StyledCol lg={4} md={6} sm={12}>
          <Link to={href}>
            <Card>
              <StyledImg alt={alt} title={alt} src={image} />
              <CardContent>
                <BaseTitle title={tag} size="H6" />
                <BaseTitle title={title} size="H5" />
              </CardContent>
            </Card>
          </Link>
        </StyledCol>
      );
    }
    return (
      <StyledCol lg={4} md={6} sm={12}>
        <Card>
          <StyledImg alt={alt} title={alt} src={image} />
          <CardContent>
            <BaseTitle title={tag} size="H6" />
            <BaseTitle title={title} size="H5" />
          </CardContent>
        </Card>
      </StyledCol>
    );
  }
}
