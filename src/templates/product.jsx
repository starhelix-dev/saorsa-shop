import React from "react";
import Layout from "../layout";
import { Helmet } from "react-helmet";

function Product({ pathContext }) {
  const { title, description, price, featured_image } = pathContext;
  return (
    <Layout>
      <Helmet htmlAttributes={{ lang: "en" }}></Helmet>
      <div className="top-banner-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="top-banner-content">
                <h2>Products Listing</h2>
                <ul>
                  <li className="home">
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Shop</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-details-area">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 col-xs-12">
              <div className="picture-tab">
                <div className="tab-content">
                  <div id="pic1" className="tab-pane fade in active">
                    <div className="single-product">
                      <div className="single-product-img">
                        <a href="#">
                          <img src={featured_image} alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="pic2" className="tab-pane fade">
                    <div className="single-product">
                      <div className="single-product-img">
                        <a href="#">
                          <img src="/bin" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div id="pic3" className="tab-pane fade">
                    <div className="single-product">
                      <div className="single-product-img">
                        <a href="#">
                          <img src="/img/pro-det/big3.jpg" alt="" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="pic-tabs clearfix">
                  <li className="active">
                    <a data-toggle="tab" href="#pic1">
                      <img src="/img/pro-det/small1.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#pic2">
                      <img src="/img/pro-det/small2.jpg" alt="" />
                    </a>
                  </li>
                  <li>
                    <a data-toggle="tab" href="#pic3">
                      <img src="/img/pro-det/small3.jpg" alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-8 col-sm-6 col-xs-12">
              <div className="product-details-info">
                <h2 className="prodet-title">{title}</h2>
                <h3 className="prodet-price">£{price}</h3>
                <p>{description}</p>
                <div className="prodet-add">
                  <button
                    className="snipcart-add-item"
                    data-item-id={title}
                    data-item-price={price}
                    data-item-url="/paintings/starry-night"
                    data-item-description={description}
                    data-item-image={featured_image}
                    data-item-name={title}
                    data-item-custom1-name="Frame color"
                    data-item-custom1-options="Black|Brown|Gold"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Product;
