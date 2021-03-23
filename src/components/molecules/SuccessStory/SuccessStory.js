import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import Col from "react-bootstrap/Col";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";

const SuccessStoryItem = styled.div`
  background-color: ${Styles.Colors.BaseLightBlue};
  border: 1px solid ${Styles.Colors.BaseLightBlue};

  border-radius: 8px;
  padding: 20px;
  margin: 10px auto;
  &.inverse {
    background-color: ${Styles.Colors.BrandYellow};
  }
`;
const FooterContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: flex-end;
  text-align: center;
`;
const Current = styled.span`
  font-family: ${Styles.FontFamily.Heading};
  font-size: 12px;
  text-transform: uppercase;
`;
const Img = styled.img`
  display: block;
  border-radius: 50%;
  border: 5px solid #fff;
  height: 120px;
  width: 120px;
  margin: 10px auto;
`;

export default function SuccessStory({
  name,
  course,
  company,
  title,
  image,
  story,
  inverse,
}) {
  return (
    <>
      <Col md={6}>
        <SuccessStoryItem className={inverse && `inverse`}>
          <Paragraph>{story}</Paragraph>
          <FooterContent>
            <div>
              <Img src={image} alt={`${name}_${course}`} />
              <BaseTitle title={name} size="H5" />
            </div>
            <div>
              <Current>Currently</Current>
              <Paragraph>
                {company} | {title}
              </Paragraph>
              <Current>Course Taken</Current>
              <Paragraph>{course}</Paragraph>
            </div>
          </FooterContent>
        </SuccessStoryItem>
      </Col>
    </>
  );
}
