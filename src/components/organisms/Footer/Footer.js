import React from "react";
import { Link } from "gatsby";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import BaseLink from "../../atoms/BaseLink/BaseLink";

const FooterStyle = styled.footer`
  background: ${Styles.Colors.BaseLightBlue};
  color: ${Styles.Colors.DefaultFont};
  margin: none;
  overflow: hidden;
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
  width: 250px;
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
            <BaseTitle title="About" size="H5" />
            <ul>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/recruitment">Recruitment</Link>
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
                <BaseTitle title="Microsoft" size="H6" />
                <ul>
                  <li>
                    <Link to="/courses/microsofttechnologies/sqlserverdevelopment">
                      Microsoft SQL Developer
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/microsofttechnologies">
                      SQL Server Integration Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/microsofttechnologies">
                      SQL Server Reporting Services
                    </Link>
                  </li>
                  <li>
                    <Link to="/courses/microsofttechnologies">
                      SQL Server Analysis Services
                    </Link>
                  </li>
                </ul>
              </Col>
              <Col md={6}>
                <BaseTitle title="QA" size="H6" />
                <ul>
                  <li>
                    <Link to="/courses/qualityengineering">
                      Quality Engineering
                    </Link>
                  </li>
                </ul>
                <BaseTitle title="Web Development" size="H6" />
                <ul>
                  <li>
                    <Link to="/courses/webdevelopment">HTML & CSS</Link>
                  </li>
                  <li>
                    <Link to="/courses/webdevelopment">JavaScript</Link>
                  </li>
                  <li>
                    <Link to="/courses/webdevelopment">
                      Fullstack Developer
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
              All Content © TrianingHub.io 2019. "TrainingHub.io",
              TrainingHub.io logo and "We Deliver What We Promise" are
              trademarks of TrainingHub.io All Rights Reserved.
            </Paragraph>
          </Col>
          <Col md={2}>
            <Paragraph>
              <Link to="/privacy">Privacy</Link>
            </Paragraph>
          </Col>
          <Col md={2}>
            <Paragraph>Social</Paragraph>
          </Col>
        </Row>
      </FooterLegal>
    </FooterStyle>
  );
}
