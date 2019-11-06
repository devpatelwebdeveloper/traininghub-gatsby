import React from "react"
// import Container from "react-bootstrap/Container"
import Head from "../components/organisms/Head/Head"
import Navigation from "../components/organisms/Navigation/Navigation"
import Footer from "../components/organisms/Footer/Footer"
import TopBannerCourse from "../components/organisms/TopBannerCourse/TopBannerCourse"

export default function Courses() {
  return (
    <>
      <Head title="Courses" />
      <Navigation />
      <TopBannerCourse />
      <section>
        <p>Section</p>
      </section>
      <Footer />
    </>
  )
}
