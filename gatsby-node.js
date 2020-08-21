const path = require("path");
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async function ({ actions, graphql }) {
  const templates = {
    categories: path.resolve("./src/templates/category.jsx"),
    product: path.resolve("./src/templates/product.jsx"),
  };
  const { data } = await graphql(`
    {
      categories: allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { template: { eq: "categories" } } }
      ) {
        edges {
          node {
            excerpt(format: PLAIN)
            fileAbsolutePath
            fields {
              slug
            }
            frontmatter {
              title
              template
              featured_image
            }
          }
        }
      }
      products: allMarkdownRemark(
        limit: 1000
        filter: { frontmatter: { template: { eq: "product" } } }
      ) {
        edges {
          node {
            excerpt(format: PLAIN)
            fileAbsolutePath
            fields {
              slug
            }
            frontmatter {
              template
              title
              price
              category
              description
              featured_image
            }
          }
        }
      }
    }
  `);
  data.categories.edges.forEach((edge) => {
    const slug = edge.node.fields.slug;
    console.log(`$category: ${slug}`);
    actions.createPage({
      path: `${slug}`,
      component: templates.categories,
      context: {
        category: edge.node.frontmatter.title,
        featured_image: edge.node.frontmatter.featured_image,
        filename: edge.node.frontmatter.featured_image
          .match(/[\w-]+\.(?!\.)/g)[0]
          .slice(0, -1),
      },
    });
  });

  data.products.edges.forEach((edge) => {
    const slug = edge.node.fields.slug;
    console.log(slug);
    actions.createPage({
      path: `/${edge.node.frontmatter.category.toLowerCase()}${slug}`,
      component: templates.product,
      context: { slug: slug, ...edge.node.frontmatter },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};
