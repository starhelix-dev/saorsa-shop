import React, { useEffect, useState } from "react";
import NavItem from "./components/NavItem";
import { useStaticQuery, graphql } from "gatsby";

const Header = () => {
  const categories = useStaticQuery(graphql`
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
  `);
  const [snipcartCount, setSnipcartCount] = useState("");

  useEffect(() => {
    window.setTimeout(() => {
      setSnipcartCount(
        document.querySelector(".snipcart-items-count").innerHTML
      );
    }, 800);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-xl navbar-light zindex-fixed">
        <div className="container">
          <a className="navbar-brand" href="/">
            Saorsa.
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarBoxedTopCollapse"
            aria-controls="navbarBoxedTopCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarBoxedTopCollapse">
            <ul className="navbar-nav mx-auto">
              <a className="nav-link" href="/">
                Home
              </a>
              <NavItem
                link="categories"
                title="Categories"
                group={categories}
              />
            </ul>
            <ul className="navbar-nav nav-divided">
              <li className="nav-item dropdown">
                <a
                  className="nav-link text-body dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  USD
                </a>

                <div className="dropdown-menu">
                  <div className="card card-lg">
                    <div className="card-body">
                      <ul className="list-styled font-size-sm">
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="#!">
                            USD
                          </a>
                        </li>
                        <li className="list-styled-item">
                          <a className="list-styled-link" href="#!">
                            EUR
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>

            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal" href="#modalSearch">
                  <i className="fe fe-search"></i>
                </a>
              </li>
              <li className="nav-item ml-lg-n4">
                <a className="nav-link" href="./account-orders.html">
                  <i className="fe fe-user"></i>
                </a>
              </li>
              <li className="nav-item ml-lg-n4">
                <a className="nav-link" href="./account-wishlist.html">
                  <i className="fe fe-heart"></i>
                </a>
              </li>
              <li className="nav-item ml-lg-n4">
                <a
                  className="nav-link"
                  data-toggle="modal"
                  href="#modalShoppingCart"
                >
                  <div className="snipcart-summary" style={{ display: "none" }}>
                    <span className="snipcart-items-count"></span>
                  </div>
                  <span
                    className="snipcart-checkout"
                    data-cart-items={snipcartCount}
                  >
                    <i className="fe fe-shopping-cart"></i>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
