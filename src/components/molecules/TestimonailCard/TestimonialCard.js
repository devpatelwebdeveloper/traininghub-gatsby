import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";

const Testimonial = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  overflow: hidden;
  max-width: 100%;
  width: 400px;
  font-family: ${Styles.FontFamily.Paragraph};
  ${Styles.ScreenSizes.small`
  width: 100%;
  
   `};
`;
const TestimonialBody = styled.div`
  padding: 40px 40px 80px;
  height: 400px;
`;
const TestimonialFooter = styled.div`
  background-color: ${Styles.Colors.BrandYellow};
  color: #fff;
  padding: 40px;
  text-align: center;
  img {
    border-radius: 50%;
    border: 5px solid #fff;
    height: 120px;
    width: 120px;
    margin-top: -100px;
  }
`;

export default function TestimonialCard({ quote, avatar, name, course }) {
  return (
    <Testimonial>
      <TestimonialBody>
        <Paragraph>{quote}</Paragraph>
      </TestimonialBody>
      <TestimonialFooter>
        <img src={avatar} alt={`${name} - ${course} - @TrainingHub.io`} />
        <BaseTitle title={name} size="H3" />
        <BaseTitle title={course} size="H6" />
      </TestimonialFooter>
    </Testimonial>
  );
}
