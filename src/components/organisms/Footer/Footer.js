import React from "react";
import { Link } from "gatsby";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import { Courses } from "../../../contents/Courses";
import { Icon } from "react-icons-kit";
import { facebookSquare } from "react-icons-kit/fa/facebookSquare";
import { twitterSquare } from "react-icons-kit/fa/twitterSquare";
import { linkedinSquare } from "react-icons-kit/fa/linkedinSquare";

const FooterStyle = styled.footer`
  background: ${Styles.Colors.BaseLightBlue};
  color: ${Styles.Colors.DefaultFont};
  margin: none;
  overflow: hidden;
  bottom: 0;
  width: 100%;

  ul {
    font-family: ${Styles.FontFamily.Paragraph};
    list-style: none;
    padding: 0px;
  }
  p {
    font-size: ${Styles.FontSize.Small};
  }
  a {
    color: ${Styles.Colors.DefaultFont};
    font-size: ${Styles.FontSize.Small};
    &:hover {
      color: ${Styles.Colors.BrandOrange};
    }
  }
  ${Styles.ScreenSizes.medium`
  position: inherit;
   `};
`;
const FooterMain = styled(Container)`
  margin: 20px auto;
`;
const AddressCol = styled(Col)`
  margin: 20px auto;
  p {
    margin: 20px auto;
  }
`;

const FooterLogo = styled.img`
  max-width: 200px;
`;

const FeaturedLinks = styled(Col)`
  margin: 20px auto;
`;

const CoursesLink = styled(Col)`
  margin: 20px auto;
`;
const FooterLegal = styled(Container)`
  margin: 20px auto;
  border-top: 1px solid ${Styles.Colors.BaseBorderGrey};
  padding-top: 10px;
`;

export default function Footer() {
  return (
    <FooterStyle>
      <FooterMain>
        <Row>
          <AddressCol md={4} sm={6}>
            <FooterLogo
              src="https://devashish-lms.s3.ca-central-1.amazonaws.com/logo_TrainingHub.png"
              alt="TrainingHub.io"
            />
            <Paragraph>
              TrainingHub thrives helping great minds to upgrade / change their
              career in field of IT. We empower our students to succeed in this
              digital age.
            </Paragraph>
          </AddressCol>
          <FeaturedLinks md={2} sm={6}>
            <BaseTitle title="Company" size="H5" />
            <ul>
              <li>
                <Link to="/about-us">About us</Link>
              </li>
              <li>
                <Link to="/employers">Employers</Link>
              </li>
              <li>
                <Link to="/job-seeker">Job Seeker</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact us</Link>
              </li>
              <li>
                <Link to="/careers">Work with us</Link>
              </li>
            </ul>
          </FeaturedLinks>
          <CoursesLink md={6} sm={12}>
            <BaseTitle title="Courses" size="H5" />

            <Row>
              <Col md={6}>
                <ul>
                  <li>
                    <Link to="/courses">All Courses</Link>
                  </li>
                </ul>
                <BaseTitle title="Microsoft" size="H6" />
                <ul>
                  <li>
                    <Link to="/courses/microsofttechnologies/sqlserverdevelopment">
                      Microsoft SQL Developer
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/microsofttechnologies/businessintelligence">
                      MSBI
                    </Link>
                  </li>
                </ul>
                <BaseTitle title="Python" size="H6" />
                <ul>
                  <li>
                    <Link to="/courses/python">Python & Data Science</Link>
                  </li>
                </ul>
              </Col>
              <Col md={6}>
                <BaseTitle title="Data" size="H6" />
                <ul>
                  <li>
                    <Link to="/courses/data/big-data-hadoop-spark">
                      Big Data Hadoop & Spark
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/data/data-warehousing">
                      Microsoft DWH
                    </Link>
                  </li>
                </ul>
                <BaseTitle title="Web Development" size="H6" />
                <ul>
                  <li>
                    <Link to="/courses/webdevelopment/javascript">
                      JavaScript
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/webdevelopment/fullstack-development">
                      Fullstack Developer
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/webdevelopment/react-redux">
                      React Redux
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </CoursesLink>
        </Row>
      </FooterMain>
      <FooterLegal>
        <Row>
          <Col md={8}>
            <Paragraph>
              {`All Content © TrainingHub.io ${new Date().getFullYear()}. 'TrainingHub.io',
              TrainingHub.io logo and 'We Deliver What We Promise' are
              trademarks of TrainingHub.io All Rights Reserved.`}
            </Paragraph>
          </Col>
          <Col md={2}>
            <Paragraph>
              <Link to="/privacy">Privacy</Link>
            </Paragraph>
          </Col>
          <Col md={2}>
            <a
              href="https://www.facebook.com/TrainingHubCanada/"
              target="_blank"
              rel="noopener noreferrer">
              <Icon size={32} icon={facebookSquare} />
            </a>
            <a
              href="https://twitter.com/TrainingHubCan"
              target="_blank"
              rel="noopener noreferrer">
              <Icon size={32} icon={twitterSquare} />
            </a>
            <a
              href="https://www.linkedin.com/company/traininghubcan/"
              target="_blank"
              rel="noopener noreferrer">
              <Icon size={32} icon={linkedinSquare} />
            </a>
          </Col>
        </Row>
      </FooterLegal>
    </FooterStyle>
  );
}
