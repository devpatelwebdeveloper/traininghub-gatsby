import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styled from 'styled-components';

const ClientContainer = styled.section`
  background: #f4f4f4;
  padding: 25px;
  margin-bottom: 25px;
  display: flex;
  align-item: center;
`;
const ClientLogo = styled.img`
  display: block;
  width: 100%;
  height: auto;
  padding: 10px;
`;

export default function Logo() {
  return (
    <ClientContainer>
      <Container>
        <Row>
          {clientList.map(client => (
            <Col md={2} sm={6}>
              <ClientLogo src={client.image} alt={client.alt} />
            </Col>
          ))}
        </Row>
      </Container>
    </ClientContainer>
  );
}

const clientList = [
  {
    image:
      'https://brainstation.io/Content/images/v3/companies/faded/facebook.svg',
    alt: 'Client1',
  },
  {
    image:
      'https://brainstation.io/Content/images/v3/companies/faded/microsoft.svg',
    alt: 'Client2',
  },
  {
    image: 'https://brainstation.io/Content/images/v3/companies/faded/ibm.svg',
    alt: 'Client3',
  },
  {
    image:
      'https://brainstation.io/Content/images/v3/companies/faded/facebook.svg',
    alt: 'Client4',
  },
  {
    image:
      'https://brainstation.io/Content/images/v3/companies/faded/facebook.svg',
    alt: 'Client5',
  },
  {
    image:
      'https://brainstation.io/Content/images/v3/companies/faded/facebook.svg',
    alt: 'Client6',
  },
];
