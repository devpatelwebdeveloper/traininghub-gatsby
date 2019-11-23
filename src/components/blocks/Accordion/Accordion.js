import React from "react";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
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
`;
const AccordionSingleList = styled.li`
  border-top: 1px solid ${Styles.Colors.BaseBorderGrey};
`;

const paragraph =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet natus sint provident vel ab reprehenderit cum soluta.";

const data = [
  {
    title: "Pricing plans Teast",
    paragraph,
  },
  {
    title: "How to apply asd",
    paragraph,
  },
  {
    title: "Purchasing process",
    paragraph,
  },
  {
    title: "Usage guides test",
    paragraph,
  },
];

class Accordion extends React.Component {
  render() {
    return (
      <AccordionList>
        {data.map((data, key) => {
          return (
            <AccordionSingleList {...key}>
              <AccordionItem {...data} />
            </AccordionSingleList>
          );
        })}
      </AccordionList>
    );
  }
}

export default Accordion;
