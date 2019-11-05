/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
// import { FormattedMessage } from 'react-intl';
// import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
// import messages from './messages';
import TopBanner from '../components/organisms/TopBanner/TopBanner';
import Tiles from '../components/blocks/Tiles/Tiles';
import CoursesBlocksTest from '../components/blocks/CoursesBlocks/CourseBlocksTest';
import Clients from '../components/blocks/Clients/Clients';
import BaseTitle from '../components/atoms/BaseTitle/BaseTitle';
import CourseCards from '../components/blocks/CourseCards/CourseCards';
import Navigation from '../components/organisms/Navigation/Navigation';
import Footer from '../components/organisms/Footer/Footer';

export default function HomePage() {
  const Toptitle = "Top Title"; //<FormattedMessage {...messages.title} />;
  const Subtitle = "Sub Title"; //<FormattedMessage {...messages.subtitle} />;
  return (
    <>
      <Navigation />
      <TopBanner
        title={Toptitle}
        subtitle={Subtitle}
        background="https://unsplash.it/1500?random"
      />
      <Clients />
      <CoursesBlocksTest />
      <section>
        <BaseTitle title="Heading test" size="H1" center underline />
        <Container>
          <Tiles />
        </Container>
      </section>
      <CourseCards />

      <Footer />
    </>
  );
}
