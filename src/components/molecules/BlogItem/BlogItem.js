import React from "react";
import PropTypes from "prop-types";
import EnhancedTiles from "../EnhancedTiles/EnhancedTiles";

export default function BlogItem({ blog }) {
  return (
    <>
      <EnhancedTiles
        image={
          blog.blogImages
            ? blog.blogImages.file.url
            : "https://devashish-lms.s3.ca-central-1.amazonaws.com/sqlDeveloper_TrainingHub.jpg"
        }
        alt={blog.title}
        title={blog.title}
        text={blog.shortDescription.shortDescription}
        btnlink={`/blogs/${blog.category.slug}/${blog.slug}`}
        btntext="Read more"
      />
    </>
  );
}
