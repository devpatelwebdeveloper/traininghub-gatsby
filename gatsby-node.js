// createPage({
//   path: "/about-us",
//   component: path.resolve(`./src/pages/about-us.js`),
//   context: {},
// });

const path = require("path");

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const quizTemplate = path.resolve("./src/templates/QuizMaker.js");

  //Quix from Contentful
  const quizSlugs = await graphql(`
    query {
      allContentfulQuiz {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  quizSlugs.data.allContentfulQuiz.edges.forEach((edge) => {
    createPage({
      component: quizTemplate,
      path: `/quiz/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });

  //Blogs
  const BlogsTemplate = path.resolve("./src/templates/BlogTemplate.js");
  const BlogSlugs = await graphql(`
    query {
      allContentfulBlogs {
        edges {
          node {
            slug
            category {
              slug
            }
          }
        }
      }
    }
  `);
  BlogSlugs.data.allContentfulBlogs.edges.forEach((edge) => {
    createPage({
      component: BlogsTemplate,
      path: `/blog/${edge.node.category.slug}/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
