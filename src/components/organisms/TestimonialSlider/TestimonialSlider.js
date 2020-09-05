import React from "react";
import Slider from "react-slick";
import TestimonialCard from "../../molecules/TestimonailCard/TestimonialCard";
import Testimonials from "../../../contents/Testimonials";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function TestimonialSlider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <Slider>
        {Testimonials.map((Testimonial) => {
          return (
            <Col md={4}>
              <TestimonialCard
                quote={Testimonial.quote}
                avatar={Testimonial.avatar}
                name={Testimonial.name}
                course={Testimonial.course}
                key={`${Testimonial.name}_${Testimonial.course}`}
              />
            </Col>
          );
        })}
      </Slider>
    </>
  );
}
