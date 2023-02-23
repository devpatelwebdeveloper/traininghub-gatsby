import React from "react";
import Styles from "../../../styles/Styles";
import Section from "../../organisms/Section/Section";
import ContentGenericAligned from "../ContentGenericAligned/ContentGenericAligned";
import { RichTextOptions } from "../../../utilities/richtextFunction";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { renderRichText } from "gatsby-source-contentful/rich-text"

export default function HomePageSeoContent({ contents }) {
  return (
    <>
      {contents.map((content, key) => {
        return (
          <Section
            key={key}
            marginTop="50px"
            marginBottom="25px"
            padding="25px"
            background={key % 2 !== 0 && Styles.Colors.BaseLightBlue}>
            <ContentGenericAligned
              imageLeft={key % 2 === 0 ? true : false}
              title={content.title}
              text={renderRichText(content.description, RichTextOptions)}
              image={content.imageLink}
              alt={content.title}
            />
          </Section>
        );
      })}
    </>
  );
}
