import React from "react";
import Layout from "../layout";
import { graphql } from "gatsby";

function Category({ pathContext, data }) {
  console.log(pathContext);
  console.log(data);
  const { category, featured_image } = pathContext;
  return (
    <Layout>
      <header
        className="py-13 jarallax"
        data-jarallax
        data-speed=".8"
        style={{ backgroundImage: `url(${featured_image})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="text-center text-white">{category}</h3>
              <ol className="breadcrumb justify-content-center mb-0 text-center text-white font-size-xs">
                <li className="breadcrumb-item">
                  <a className="text-reset" href="#">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">{category}</li>
              </ol>
            </div>
          </div>
        </div>
      </header>
      <section className="py-12">
        <div className="container">
          <div className="row">
            {data.allMarkdownRemark.edges.map((product) => {
              return (
                <div className="col-6 col-md-3 col-lg">
                  <div className="card mb-7" data-toggle="card-collapse">
                    <a
                      href={`/${product.node.frontmatter.category.toLowerCase()}${
                        product.node.fields.slug
                      }`}
                    >
                      <img
                        src={data.file.childImageSharp.fixed.src}
                        alt="..."
                        className="card-img-top"
                      />
                    </a>

                    <div className="card-collapse-parent">
                      <div className="card-body px-0 bg-white text-center">
                        <div className="mb-1 font-weight-bold">
                          <a
                            className="text-body"
                            href={`/${product.node.frontmatter.category.toLowerCase()}${
                              product.node.fields.slug
                            }`}
                          >
                            {product.node.frontmatter.title}
                          </a>
                        </div>

                        <div className="mb-1 font-weight-bold text-muted">
                          £{product.node.frontmatter.price}
                        </div>
                      </div>

                      <div className="card-collapse collapse">
                        <div className="card-footer px-0 pt-0 bg-white text-center">
                          <button
                            className="btn btn-xs btn-link btn-circle"
                            data-toggle="modal"
                            data-target="#modalProduct"
                          >
                            <i className="fe fe-eye"></i>
                          </button>
                          <button
                            className="btn btn-xs btn-link btn-circle"
                            data-toggle="button"
                          >
                            <i className="fe fe-shopping-cart"></i>
                          </button>
                          <button
                            className="btn btn-xs btn-link btn-circle"
                            data-toggle="button"
                          >
                            <i className="fe fe-heart"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query($category: String, $filename: String) {
    file(name: { glob: $filename }) {
      childImageSharp {
        fixed(width: 238, height: 282) {
          src
        }
      }
    }
    allMarkdownRemark(
      filter: {
        frontmatter: {
          template: { eq: "product" }
          category: { eq: $category }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            template
            price
            quantity
            variation_type
            category
            description
            featured_image
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default Category;
