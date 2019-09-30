const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  // For education Json
  const result = await graphql(`{
    allEducationJson {
      edges {
        node {
          slug
        }
      }
    }
  }`);

  // For acerca de 
  const aboutQuery = await graphql(`{
    allAcercadeJson {
      edges {
        node {
          slug
        }
      }
    }
  }`);

  result.data.allEducationJson.edges.forEach(element => {
    const { node } = element;
    actions.createPage({
      path: node.slug,
      component: path.resolve('./src/components/templates/education.jsx'),
      context: {
        slug: node.slug
      }
    });
  })

  aboutQuery.data.allAcercadeJson.edges.forEach(element => {
    const { node } = element;
    actions.createPage({
      path: node.slug,
      component: path.resolve('./src/components/templates/acerca.jsx'),
      context: {
        slug: node.slug
      }
    });
  });

}