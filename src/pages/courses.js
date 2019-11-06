import React from "react"
// import Container from "react-bootstrap/Container"
import Head from "../components/organisms/Head/Head"
import Navigation from "../components/organisms/Navigation/Navigation"
import Footer from "../components/organisms/Footer/Footer"
import TopBannerCourse from "../components/organisms/TopBannerCourse/TopBannerCourse"
import CourseBlock from "../components/blocks/CoursesBlocks/CoursesBlocks"

export default function Courses() {
  return (
    <>
      <Head title="Courses" />
      <Navigation />
      <TopBannerCourse />
      <section>
        <CourseBlock />
      </section>
      <Footer />
    </>
  )
}
