import React from "react";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Button from "../../molecules/Button/Button";

const StyledForm = styled(Form)`
  font-family: ${Styles.FontFamily.Paragraph};
  color: ${Styles.Colors.DefaultFont};

  .form-control {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: ${Styles.Colors.DefaultFont};
    background-color: ${Styles.Colors.BaseWhite};
    background-clip: padding-box;
    border: 1px solid ${Styles.Colors.BaseDisabledGrey};
    border-radius: 0px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .btn-primary {
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

export default function ContactForm() {
  return (
    <>
      <StyledForm name="contact" method="POST" data-netlify="true">
        <Form.Group controlId="firstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>
        <Form.Group controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I agree to signup for newsletter"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </StyledForm>
    </>
  );
}
