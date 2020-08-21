import React, { useLayoutEffect } from "react";
import Layout from "../layout";
import Flickity from "flickity";
import "./flickity.css";
import { graphql } from "gatsby";

export default function Home({ data }) {
  useLayoutEffect(() => {
    new Flickity(".flickity-buttons-lg", {
      pageDots: false,
      prevNextButtons: true,
      cellAlign: "left",
      wrapAround: true,
    });
  }, []);
  return (
    <Layout>
      <section>
        <div>
          <div
            className="w-100 bg-cover"
            style={{ backgroundImage: "url(/img/covers/cover-5.jpg)" }}
          >
            <div className="container d-flex flex-column">
              <div
                className="row align-items-center py-12"
                style={{ minHeight: "550px" }}
              >
                <div className="col-12 col-md-6 col-lg-5 col-xl-4 offset-md-1">
                  <h1>Summer Sale</h1>

                  <h2 className="display-1 text-primary">-70%</h2>

                  <h5 className="mt-n4 mb-8">with promo code CN67EW*</h5>

                  <a className="btn btn-dark" href="shop.html">
                    Shop Now <i className="fe fe-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="mb-4 text-center">Shop by Category</h2>

              <div className="tab-content">
                <div className="tab-pane fade show active" id="topSellersTab">
                  <div className="flickity-buttons-lg flickity-buttons-offset px-lg-12">
                    {data.allMarkdownRemark.edges.map((category) => {
                      return (
                        <div className="col" style={{ maxWidth: "200px" }}>
                          <div className="card">
                            <img
                              className="card-img-top"
                              src={category.node.frontmatter.featured_image}
                              alt="..."
                            />

                            <div className="card-body py-4 px-0 text-center">
                              <a
                                className="stretched-link text-body"
                                href="shop.html"
                              >
                                <h6>
                                  {category.node.frontmatter.title}{" "}
                                  <small>(58)</small>
                                </h6>
                              </a>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
