import React from "react";
import BaseLink from "../../atoms/BaseLink/BaseLink";
import BaseTitle from "../../atoms/BaseTitle/BaseTitle";
import Paragraph from "../../atoms/Paragraph/Paragraph";

export default function RelatedArticles({ RelatedBlogs, Parent }) {
  return (
    <>
      <BaseTitle title="Related articles:" size="H5" />
      {RelatedBlogs.map((related) => {
        return (
          <>
            <BaseLink key={related.node.slug}
              href={`/${Parent}/${related.node.category.slug}/${related.node.slug}`}>
              <Paragraph>{related.node.title}</Paragraph>
            </BaseLink>
          </>
        );
      })}
      <hr />
    </>
  );
}
