const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/noteTemplate.js`),
      context: {
        id: node.id,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const fileNode = getNode(node.parent);
    const slug = `/ConcordiaNotes/notes/${fileNode.relativeDirectory}/${fileNode.name}`;

    createNodeField({
      node,
      name: "slug",
      value: slug,
    });
  }
};
