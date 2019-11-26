import React from "react";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import Paragraph from "../../atoms/Paragraph/Paragraph";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import plus from "../../../contents/icons/plus.svg";
import minus from "../../../contents/icons/minus.svg";

// AccordionItem (Single) Starts
const AccordionSingle = styled.div``;

const AccordionIcon = styled.span`
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  background-size: cover;
  background-repeat: repeat;
  background-image: url(${plus});
  ${(props) =>
    props.open
      ? `
      transform:rotate(180deg);
      background-image: url(${minus});
  `
      : null};
`;

const TitleSpace = styled.div`
  max-width: 85%;
`;

const AccordionItemTitle = styled.div`
  display: block;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Styles.Colors.BaseLightBlue};
  z-index: 2;
  position: relative;
  cursor: pointer;
`;

const AccordionItemInner = styled.div`
  max-height: 0;
  overflow: hidden;
  text-transform: cubic-bezier(0.95, 0.05, 0.795, 0.035);
  transition-duration: 0.5s;
  transition-property: max-height;
  z-index: 1;
  position: relative;
  ${(props) =>
    props.open
      ? `
      max-height: 100rem;
      transition-timing-function: cubic-bezier(0.895, 0.03, 0.685, 0.22);
      transition-duration: 0.5s;
      transition-property: max-height;
  `
      : null};
`;

const AccordionContent = styled.div`
  background-color: ${Styles.Colors.BaseWhite};
  opacity: 0;
  transform: translateY(-1rem);
  transition-timing-function: linear, ease;
  transition-duration: 0.1s;
  transition-property: opacity, transform;
  transition-delay: 0.5s;
  padding: 24px;
  ${(props) =>
    props.open
      ? `
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.2s;
  transition-timing-function: ease-in-out;
  transition-duration: 0.2s;
  transition-property: opacity, transform;
  `
      : null};
`;
// AccordionItem (Single) Ends

class AccordionItem extends React.Component {
  state = {
    opened: false,
  };

  render() {
    const {
      props: { paragraph, title },
      state: { opened },
    } = this;

    return (
      <AccordionSingle
        onClick={() => {
          this.setState({ opened: !opened });
        }}>
        <AccordionItemTitle>
          <TitleSpace>
            <BaseTitle title={title} size="H5" />
          </TitleSpace>
          <AccordionIcon
            {...(opened
              ? { open: true, title: "Close" }
              : { open: false, title: "Open" })}
          />
        </AccordionItemTitle>
        <AccordionItemInner {...(opened ? { open: true } : { open: false })}>
          <AccordionContent {...(opened ? { open: true } : { open: false })}>
            <Paragraph>{paragraph}</Paragraph>
          </AccordionContent>
        </AccordionItemInner>
      </AccordionSingle>
    );
  }
}

export default AccordionItem;
