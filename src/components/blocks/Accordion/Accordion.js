import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import Styles from "../../../styles/Styles";
import Section from "../../organisms/Section/Section";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import AccordionItem from "../../molecules/AccordionItem/AccordionItem";

const AccordionList = styled.ul`
  list-style: none;
  margin: 5px;
  padding: 0;
  background-color: transparent;
  max-width: 100%;
  overflow: hidden;
  box-shadow: 0 0 0.8rem 0.1rem
      rgba(darken(${Styles.Colors.BaseLightBlue}, 20%), 0.06),
    0 20px 30px -10px rgba(darken(${Styles.Colors.BaseLightBlue}, 20%), 0.2);

  @media print {
    display: none;
  }
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;
const AccordionSingleList = styled.li`
  border-top: 1px solid ${Styles.Colors.BaseBorderGrey};
`;

const paragraph =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta.";

const data = [
  {
    title: "Pricing plans test",
    paragraph,
  },
];

class Accordion extends React.Component {
  static propTypes = {
    accordions: PropTypes.array,
    title: PropTypes.string,
  };
  static defaultProps = {
    accordions: data,
    title: "Course Content",
  };
  render() {
    const { accordions, title } = this.props;
    return (
      <Section>
        <BaseTitle title={title} size="H3" center underline />
        <AccordionList>
          {accordions.map((accordion, key) => {
            return (
              <AccordionSingleList {...key}>
                <AccordionItem {...accordion} />
              </AccordionSingleList>
            );
          })}
        </AccordionList>
      </Section>
    );
  }
}

export default Accordion;
