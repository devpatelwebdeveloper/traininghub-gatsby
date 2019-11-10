import React from "react";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import Section from "../../organisms/Section/Section";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const StyledCol = styled(Col)`
  margin: auto;
`;
const ClientLogo = styled.img`
  display: block;
  width: 100%;
  height: auto;
  padding: 10px;
`;

export default function Logo() {
  return (
    <Section
      background={Styles.Colors.BaseElement}
      padding="20px"
      marginBottom="50px">
      <Container>
        <Row>
          {clientList.map((client) => (
            <StyledCol md={2} sm={6} xs={4}>
              <ClientLogo src={client.image} alt={client.alt} />
            </StyledCol>
          ))}
        </Row>
      </Container>
    </Section>
  );
}

const clientList = [
  {
    image:
      "https://brainstation.io/Content/images/v3/companies/faded/facebook.svg",
    alt: "Client1",
  },
  {
    image:
      "https://brainstation.io/Content/images/v3/companies/faded/microsoft.svg",
    alt: "Client2",
  },
  {
    image: "https://brainstation.io/Content/images/v3/companies/faded/ibm.svg",
    alt: "Client3",
  },
  {
    image:
      "https://brainstation.io/Content/images/v3/companies/faded/facebook.svg",
    alt: "Client4",
  },
  {
    image:
      "https://brainstation.io/Content/images/v3/companies/faded/facebook.svg",
    alt: "Client5",
  },
  {
    image:
      "https://brainstation.io/Content/images/v3/companies/faded/facebook.svg",
    alt: "Client6",
  },
];
