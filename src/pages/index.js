import React from "react"
import Container from "react-bootstrap/Container"
import Head from "../components/organisms/Head/Head"
import TopBanner from "../components/organisms/TopBanner/TopBanner"
import Tiles from "../components/blocks/Tiles/Tiles"
import Clients from "../components/blocks/Clients/Clients"
import BaseTitle from "../components/atoms/BaseTitle/BaseTitle"
import CourseCards from "../components/blocks/CourseCards/CourseCards"
import Navigation from "../components/organisms/Navigation/Navigation"
import Footer from "../components/organisms/Footer/Footer"

export default function HomePage() {
  const Toptitle = "Top Title"
  const Subtitle = "Sub Title"
  return (
    <>
      <Head title="Home" />
      <Navigation />
      <TopBanner
        title={Toptitle}
        subtitle={Subtitle}
        background="https://unsplash.it/1500?random"
      />
      <Clients />
      <section>
        <BaseTitle title="Heading test" size="H1" center underline />
        <Container>
          <Tiles />
        </Container>
      </section>
      <CourseCards />

      <Footer />
    </>
  )
}
