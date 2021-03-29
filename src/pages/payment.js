import React, { useState } from "react";
import styled from "styled-components";
import Styles from "../styles/Styles";
import Form from "react-bootstrap/Form";
import Layout from "../components/templates/Layout/Layout";
import Section from "../components/organisms/Section/Section";
import Col from "react-bootstrap/Col";
import Head from "../components/organisms/Head/Head";
import BaseTitle from "../components/atoms/BaseTitle/BaseTitle";
import Paypal from "../components/organisms/Paypal/Paypal";

const CenteredCol = styled(Col)`
  text-align: center;
  align-item: center;
`;
const FourOFour = styled.img`
  width: 50%;
  height: 50%;
`;
const Btns = styled.button`
   {
    color: ${Styles.Colors.BaseWhite};
    font-family: ${Styles.FontFamily.Heading};
    font-size: ${Styles.FontSize.Medium};
    font-weight: ${Styles.FontWeight.Normal};
    background-color: ${Styles.Colors.DefaultFont};
    border: 2px solid transparent;
    border-radius: 0px;
    margin: 10px 10px;
    min-width: 200px;
    height: 48px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:hover {
      color: ${Styles.Colors.DefaultFont};
      background-color: ${Styles.Colors.BaseWhite};
      border: 2px solid ${Styles.Colors.DefaultFont};
    }
    ${Styles.ScreenSizes.small`
  width:100%;
  margin: 10px auto;
   `};
  }
`;

export default function PageNotFound() {
  const [checkout, setCheckout] = useState(false);
  const [course, setCourse] = useState("");
  const [cost, setCost] = useState(0);

  const handleChange = (e) => {
    e.preventDefault();

    setCheckout(true);
  };
  const onChangeCourseName = (event) => {
    setCourse(event.target.value);
  };
  const onChangeCostName = (event) => {
    setCost(event.target.value);
  };
  return (
    <>
      <Head title="Pay now" />
      <Layout>
        <Section>
          <CenteredCol style={{ marginTop: "50px", marginBottom: "50px" }}>
            <BaseTitle title="Payment charging" size="H3" />
            {checkout ? (
              <Paypal coursename={course} price={cost} />
            ) : (
              <>
                <Form.Group controlId="firstName">
                  <Form.Control
                    type="text"
                    placeholder="Course Name"
                    onChange={onChangeCourseName}
                    value={course}
                  />
                </Form.Group>
                <Form.Group controlId="firstName">
                  <Form.Control
                    type="text"
                    placeholder="Course Cost"
                    onChange={onChangeCostName}
                    value={cost}
                  />
                </Form.Group>
                <Btns onClick={handleChange}>Checkout</Btns>
              </>
            )}
          </CenteredCol>
        </Section>
      </Layout>
    </>
  );
}
