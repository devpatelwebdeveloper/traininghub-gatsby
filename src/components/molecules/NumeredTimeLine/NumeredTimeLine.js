import React from "react";
import styled from "styled-components";
import Styles from "../../../styles/Styles";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";
const StyledOl = styled.ol`
  list-style: none;
  margin-top: 50px;
  padding: 0;
  border-left: 3px solid ${Styles.Colors.BrandGrey};
  counter-reset: numbered-list;
  margin-left: 10px;
  position: relative;
  li {
    font-size: 16px;
    line-height: 1.2;
    margin-bottom: 30px;
    padding-left: 30px;
    &:last-child {
        border-left: 3px solid white;
        margin-left: -3px;
    }
    &:before {
        background-color: ${Styles.Colors.DefaultFont};
        border: 3px solid ${Styles.Colors.BaseLightBlue};
        border-radius: 50%;
        color: ${Styles.Colors.BaseLightBlue};
        content: counter(numbered-list,decimal);
        counter-increment: numbered-list;
        display: block;
        font-weight: ${Styles.FontWeight.Bold};
        font-size:${Styles.FontSize.Large};
  width: 50px;
  height: 50px;
  margin-top: -10px;
  line-height: 40px;
  position: absolute;
  left: -28px;
  text-align: center;
  letter-spacing:-2px;
}
`;

export default function NumberedTimeLine() {
  return (
    <>
      <StyledOl>
        <li>
          <BaseTitle title="Help people feel good about themselves" size="H3" />
          <Paragraph>
            People who feel happy and confident are more likely to try new
            things. They are more likely to form effective teams. They are
            better equipped to face challenges. The key to being a great manager
            is to help people feel good about themselves.
          </Paragraph>
        </li>
        <li>
          <BaseTitle title="Believe the best and trust others" size="H3" />
          <Paragraph>
            When we get annoyed with people for being ‘stupid’ or ‘slow’, we are
            in fact getting annoyed with our own inability to pass on
            information easily. Recognizing our own shortcomings, we should
            trust that people always do the best they can. ‘Mental blocks’ offer
            us the opportunity to find new ways to overcome them.
          </Paragraph>
        </li>
        <li>
          <BaseTitle title="Create customer delight" size="H3" />
          <Paragraph>
            We aim not just to give ‘customer satisfaction’, but to delight
            customers and exceed expectations with every interaction.
          </Paragraph>
        </li>
        <li>
          <BaseTitle title="Celebrate mistakes" size="H3" />
          <Paragraph>
            We’re conditioned from an early age to scold or punish mistakes.
            However, mistakes are the greatest way of learning! Training and
            managing should encourage people to try something new. The best way
            to be bold is to minimize fear of failure and to celebrate mistakes.
          </Paragraph>
        </li>
        <li>
          <BaseTitle title="Make the world a better place" size="H3" />
          <Paragraph>
            We are committed to supporting the local community, offering free IT
            training, support and consultancy sessions to charities through our
            Timebank scheme.
          </Paragraph>
        </li>
      </StyledOl>
    </>
  );
}
