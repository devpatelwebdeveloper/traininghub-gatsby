import React from "react";
import Layout from "../components/templates/Layout/Layout";
import Head from "../components/organisms/Head/Head";
import TopBanner from "../components/organisms/TopBanner/TopBanner";
import Tiles from "../components/blocks/Tiles/Tiles";
import Clients from "../components/blocks/Clients/Clients";
import CourseCards from "../components/blocks/CourseCards/CourseCards";
import Slider from "../components/organisms/Slider/Slider";
import { HomePageCards } from "../contents/HomePageCards";
import { HomePageSliders } from "../contents/HomePageSliders";

export default function HomePage() {
  return (
    <>
      <Head title="Home" />
      <Layout>
        <Slider HomePageSlides={HomePageSliders} />
        <Tiles title="Redifining future in IT Learning" tiles={HomePageCards} />
        <CourseCards />
      </Layout>
    </>
  );
}
