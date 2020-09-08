import React, { useRef } from "react";
import Styles from "../../../styles/Styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Section from "../Section/Section";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import TestimonialCard from "../../molecules/TestimonailCard/TestimonialCard";

export default function Carousel({ testimonials, title }) {
  const ref = useRef();
  const slideItems = testimonials.map((Testimonial) => {
    return (
      <TestimonialCard
        quote={Testimonial.quote}
        avatar={Testimonial.avatar}
        name={Testimonial.name}
        course={Testimonial.course}
        key={`${Testimonial.name}_${Testimonial.course}`}
      />
    );
  });

  const settings = {
    accessibility: true,
    focusOnSelect: false,
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Section marginTop="50px" marginBottom="25px">
        <BaseTitle title={title} size="H4" center underline />
        <Slider {...settings} ref={ref}>
          {slideItems}
        </Slider>
      </Section>
    </>
  );
}
