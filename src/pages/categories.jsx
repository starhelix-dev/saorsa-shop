import React from "react";
import Layout from "../layout";
import { graphql } from "gatsby";

function Categories({ data }) {
  const categories = data.allMarkdownRemark.edges;
  console.log(categories);
  // function renderCategories() {

  // }
  return (
    <Layout>
      <div className="py-11">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row align-items-center mb-7">
                <div className="col-12 col-md">
                  <h3>Categories</h3>
                  <ol className="breadcrumb mb-md-0 font-size-xs text-gray-400">
                    <li className="breadcrumb-item">
                      <a className="text-gray-400" href="/">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active">Categories</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {categories.map((category) => {
              return (
                <div className="col-12 col-md-4">
                  <div className="card card-lg">
                    <div className="card-circle card-circle-lg card-circle-right">
                      <span className="font-size-h6 font-weight-bold">
                        5 items
                      </span>
                    </div>
                    <img
                      className="card-img-top"
                      src={category.node.frontmatter.featured_image}
                      alt={category.node.frontmatter.title}
                    />
                    <div class="card-body position-relative mx-6 mx-lg-10 mt-n11 bg-white text-center">
                      <h4 className="mb-0">
                        {category.node.frontmatter.title}
                      </h4>

                      <a
                        className="btn btn-link stretched-link px-0 text-reset"
                        href={category.node.fields.slug}
                      >
                        View <i class="fe fe-arrow-right ml-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const query = graphql`
  {
    allMarkdownRemark(
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
            featured_image
          }
        }
      }
    }
  }
`;

export default Categories;
