import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { RichTextOptions } from "../utilities/richtextFunction";
import Layout from "../components/templates/Layout/Layout";
import Head from "../components/organisms/Head/Head";
import Tiles from "../components/blocks/Tiles/Tiles";
import HomePageSeoContent from "../components/blocks/HomepageSeoContent/HomePageSeoContent";
import Clients from "../components/blocks/Clients/Clients";
import CourseCards from "../components/blocks/CourseCards/CourseCards";
import Slider from "../components/organisms/Slider/Slider";
import { HomePageSliders } from "../contents/HomePageSliders";

import TestimonialSlider from "../components/organisms/TestimonialSlider/TestimonialSlider";
import { Testimonials } from "../contents/ContentfulContents/Testimonials";
import { ClientList } from "../contents/ContentfulContents/Clients";
import { HomePageTiles } from "../contents/ContentfulContents/HomePageCards";
import { HomePageContents } from "../contents/ContentfulContents/HomePageContents";


export default function HomePage() {
  //Home Page Tiles
  const HomePageCards = [];
  const homepagecard = HomePageTiles();
  homepagecard.allContentfulHomePageTiles.edges.forEach((singleCard) => {
    HomePageCards.push({
      image: singleCard.node.image.file.url,
      alt: singleCard.node.title,
      title: singleCard.node.title,
      text:renderRichText(  singleCard.node.text, RichTextOptions),
    });
  });

  //Home Page SEO Content
  const HomePageSeoContentData = [];
  const homepageseocontentfn = HomePageContents();
  homepageseocontentfn.allContentfulHomePageContent.edges.forEach(
    (singleCard) => {
      HomePageSeoContentData.push({
        title: singleCard.node.title,
        description: singleCard.node.description,
        imageLink: singleCard.node.imageLink,
      });
    },
  );

  // Reviews
  const Reviews = [];
  const review = Testimonials();
  review.allContentfulTestimonials.edges.forEach((singleReview) => {
    Reviews.push({
      name: singleReview.node.name,
      avatar: `${singleReview.node.avatar.file.url}?w=120&h=120`,
      quote:renderRichText(singleReview.node.quote, RichTextOptions),
      course: singleReview.node.course ? singleReview.node.course : "",
    });
  });

  const company = [];
  const clients = ClientList();
  clients.allContentfulCompanyClients.edges.forEach((singleCompany) => {
    company.push({
      alt: singleCompany.node.clientName,
      image: `${singleCompany.node.clientLogo.file.url}?h=75`,
    });
  });

  return (
    <>
      <Head
        title="Home"
        metaImage="https://devashish-lms.s3.ca-central-1.amazonaws.com/sqlDeveloper_TrainingHub.jpg"
      />
      <Layout>
        <Slider HomePageSlides={HomePageSliders} />
        <Tiles title="Redefining future in IT Learning" tiles={HomePageCards} />
        <CourseCards />
        <TestimonialSlider
          testimonials={Reviews}
          title="Don’t just take it from us."
        />
        <Clients
          title="Companies where our students work"
          clientList={company}
        />
        <HomePageSeoContent contents={HomePageSeoContentData} />
      </Layout>
    </>
  );
}
