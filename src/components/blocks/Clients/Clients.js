import React, { useRef } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import Section from "../../organisms/Section/Section";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";

const StyledCol = styled.div`
  margin: auto;
`;
const ClientLogo = styled.img`
  display: block;
  width: auto;
  height: 75px;
  padding: 10px;
`;

export default function ClientsSlider({ title, clientList }) {
  const ref = useRef();
  const settings = {
    accessibility: true,
    focusOnSelect: false,
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <Section marginTop="50px" marginBottom="25px">
      <BaseTitle title={title} size="H4" center underline />
      <Slider {...settings} ref={ref}>
        {clientList.map((client) => (
          <StyledCol md={2} sm={6} xs={4}>
            <ClientLogo src={client.image} alt={client.alt} />
          </StyledCol>
        ))}
      </Slider>
    </Section>
  );
}
