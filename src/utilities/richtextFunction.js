import React from "react";

import { BLOCKS } from "@contentful/rich-text-types";

import Paragraph from "../components/atoms/Paragraph/Paragraph";
import BaseTitle from "../components/atoms/BaseTitle/BaseTitle";

const RichTextParagraph = ({ children }) => <Paragraph>{children}</Paragraph>;
const RichTextTitle = ({ children, size }) => (
  <BaseTitle title={children} size={size} />
);

const RichTextOptions = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => (
      <RichTextParagraph>{children}</RichTextParagraph>
    ),
    [BLOCKS.HEADING_1]: (node, children) => (
      <RichTextTitle size="H1">{children}</RichTextTitle>
    ),
    [BLOCKS.HEADING_2]: (node, children) => (
      <RichTextTitle size="H2">{children}</RichTextTitle>
    ),
    [BLOCKS.HEADING_3]: (node, children) => (
      <RichTextTitle size="H3">{children}</RichTextTitle>
    ),
    [BLOCKS.HEADING_4]: (node, children) => (
      <RichTextTitle size="H4">{children}</RichTextTitle>
    ),
    [BLOCKS.HEADING_5]: (node, children) => (
      <RichTextTitle size="H5">{children}</RichTextTitle>
    ),
    [BLOCKS.HEADING_6]: (node, children) => (
      <RichTextTitle size="H6">{children}</RichTextTitle>
    ),
    // "embedded-asset-block": (node) => {
    //   const alt = node.data.target.fields.title["en-US"];
    //   const url = node.data.target.fields.file["en-US"].url;
    //   return (
    //     <img
    //       alt={alt}
    //       src={url}
    //       style={{
    //         maxWidth: "100%",
    //         marginLeft: "auto",
    //         marginRight: "auto",
    //       }}
    //     />
    //   );
    // },
  },
};

export { RichTextOptions };
