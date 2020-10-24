import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import Col from "react-bootstrap/Col";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";

const StyledBlog = styled.div`
  width: 100%;
  height: 9rem;
  display: block;
  position: relative;
  text-align: left;
  color: ${Styles.Colors.DefaultFont};
  background-color: ${Styles.Colors.BaseWhite};
  text-decoration: none;
  border-radius: 6px;
  box-shadow: 12px 15px 20px 0px rgba(46, 61, 73, 0.15);
  transition: box-shadow 0.3s ease, border 0.3s ease;
  margin: 10px;

  &:hover {
    box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
  }
`;

export default function BlogItem() {
  return (
    <>
      <Col md={12}>
        <StyledBlog>
          <p>Blog ITem</p>
        </StyledBlog>
      </Col>
    </>
  );
}
