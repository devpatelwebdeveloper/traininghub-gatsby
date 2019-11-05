import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const FooterStyle = styled.footer`
  background: rgb(35, 39, 42);
  color: #ffffff;
  margin: none;
  overflow: hidden;
  ul {
    list-style: none;
    padding: 0px;
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
  width: 150px;
  height: 50px;
`;

const FeaturedLinks = styled(Col)`
  margin: 20px auto;
  h6 {
    color: #00aeef;
  }
`;

const CoursesLink = styled(Col)`
  margin: 20px auto;
`;
const FooterLegal = styled(Container)`
  margin: 20px auto;
  border-top: 1px solid #ffffff;
`;

export default function Footer() {
  return (
    <FooterStyle>
      <FooterMain>
        <Row>
          <AddressCol md={4}>
            <FooterLogo src="https://unsplash.it/1500?random" alt="" />
            <p>
              BrainStation is the global leader in digital skills training. We
              empower businesses and brands to succeed in the digital age.
            </p>
          </AddressCol>
          <FeaturedLinks md={2}>
            <h6>About</h6>
            <ul>
              <li>About us</li>
              <li>Recruitment</li>
              <li>Work with us</li>
            </ul>
          </FeaturedLinks>
          <CoursesLink md={6}>
            <h6>Courses</h6>
            <Row>
              <Col md={6}>
                <h6>Mircosoft</h6>
                <ul>
                  <li>Microsoft SQL Developer</li>
                  <li>SQL Server Integration Services</li>
                  <li>SQL Server Reporting Services</li>
                  <li>SQL Server Analysis Services</li>
                </ul>
              </Col>
              <Col md={6}>
                <h6>QE</h6>
                <ul>
                  <li>Microsoft SQL Developer</li>
                  <li>Test 2</li>
                  <li>Test 3</li>
                </ul>
              </Col>
            </Row>
          </CoursesLink>
        </Row>
      </FooterMain>
      <FooterLegal>
        <Row>
          <Col md={8}>
            <p>
              All Content © TrianingHub.io 2019. "TrainingHub.io",
              TrainingHub.io logo and "We Deliver What We Promise" are
              trademarks of TrainingHub.io All Rights Reserved.
            </p>
          </Col>
          <Col md={2}>
            <p>Privacy</p>
          </Col>
          <Col md={2}>
            <p>Social</p>
          </Col>
        </Row>
      </FooterLegal>
    </FooterStyle>
  );
}
