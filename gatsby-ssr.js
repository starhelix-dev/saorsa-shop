import React from "react";
export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script src="/js/jquery.min.js"></script>,
    <script src="/js/jquery.fancybox.min.js"></script>,
    <script src="/js/bootstrap.bundle.min.js"></script>,
    <script src="/js/flickity.pkgd.min.js"></script>,
    <script src="/js/highlight.pack.min.js"></script>,
    <script src="/js/jarallax.min.js"></script>,
    <script src="/js/list.min.js"></script>,
    <script src="/js/simplebar.min.js"></script>,
    <script src="/js/smooth-scroll.min.js"></script>,
    <script src="/js/flickity-fade.js"></script>,
    <script src="/js/theme.min.js"></script>,
    <div
      id="snipcart"
      data-api-key="MzYxNGZmODEtZTE0MC00ZmEwLWFhMWMtYzI2M2U3OWIxNDNiNjM3MzMyMTkyOTczNDMzMDU4"
      hidden
    ></div>,
  ]);
};
