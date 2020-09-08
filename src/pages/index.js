import React from "react";
import Layout from "../components/templates/Layout/Layout";
import Head from "../components/organisms/Head/Head";

import Tiles from "../components/blocks/Tiles/Tiles";
import Clients from "../components/blocks/Clients/Clients";
import CourseCards from "../components/blocks/CourseCards/CourseCards";
import Slider from "../components/organisms/Slider/Slider";
import { HomePageCards } from "../contents/HomePageCards";
import { HomePageSliders } from "../contents/HomePageSliders";
import TestimonialCard from "../components/molecules/TestimonailCard/TestimonialCard";
import TestimonialSlider from "../components/organisms/TestimonialSlider/TestimonialSlider";
import Testimonials from "../contents/Testimonials";

export default function HomePage() {
  return (
    <>
      <Head title="Home" />
      <Layout>
        <Slider HomePageSlides={HomePageSliders} />
        <Tiles title="Redefining future in IT Learning" tiles={HomePageCards} />
        <CourseCards />
        <TestimonialSlider
          testimonials={Testimonials}
          title="Don’t just take it from us."
        />
      </Layout>
    </>
  );
}
