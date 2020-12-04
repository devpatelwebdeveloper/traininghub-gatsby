import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import Col from "react-bootstrap/Col";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import EnhancedTiles from "../EnhancedTiles/EnhancedTiles";

export default function BlogItem({ blog }) {
  return (
    <>
      <EnhancedTiles
        image={blog.blogImage}
        alt={blog.title}
        title={blog.title}
        text={blog.shortDescription.shortDescription}
        btnlink={`/blogs/${blog.category.slug}/${blog.slug}`}
        btntext="Read more"
      />
    </>
  );
}
