// createPage({
//   path: "/about-us",
//   component: path.resolve(`./src/pages/about-us.js`),
//   context: {},
// });

const path = require("path");

//Blogs from Contentful
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const quizTemplate = path.resolve("./src/templates/QuizMaker.js");

  //Blogs from Contentful
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

  //   //Resources
  //   const resourceTemplate = path.resolve("./src/templates/resourcesTemplate.js");
  //   const resourceSlugs = await graphql(`
  //     query {
  //       allContentfulResources {
  //         edges {
  //           node {
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   `);
  //   resourceSlugs.data.allContentfulResources.edges.forEach((edge) => {
  //     createPage({
  //       component: resourceTemplate,
  //       path: `/resources/${edge.node.slug}`,
  //       context: {
  //         slug: edge.node.slug,
  //       },
  //     });
  //   });
};
