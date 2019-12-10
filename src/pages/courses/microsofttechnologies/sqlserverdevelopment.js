import React from "react";
import Layout from "../../../components/templates/Layout/Layout";
import Section from "../../../components/organisms/Section/Section";
import Head from "../../../components/organisms/Head/Head";
import TopBannerCourse from "../../../components/organisms/TopBannerCourse/TopBannerCourse";
import ContentGenericAligned from "../../../components/blocks/ContentGenericAligned/ContentGenericAligned";
import BaseTitle from "../../../components/atoms/BaseTitle/BaseTitle";
import StudentJourney from "../../../components/blocks/StudentJourney/StudentJourney";
import RelatedCourses from "../../../components/blocks/RelatedCourses/RelatedCourses";
import Accordion from "../../../components/blocks/Accordion/Accordion";
import { SqlServerDeveloper } from "../../../contents/Accordions/Accordions";
import { Courses } from "../../../contents/Courses";
import SingleCoursePage from "../../../components/templates/Layout/SingleCoursePage";

export default function SqlServerDevelopment() {
  return <SingleCoursePage courseName="Microsoft SQL Developer" />;
}
