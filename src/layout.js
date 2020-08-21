import React from "react";
import "../static/css/theme.min.css";

import { Helmet } from "react-helmet";
import Header from "./header";
import Footer from "./footer";
import { withPlugin } from "tinacms";
import { RemarkCreatorPlugin } from "gatsby-tinacms-remark";

let slug;

const CreateBlogButton = new RemarkCreatorPlugin({
  label: "Add New Product",
  filename: (name) => {
    //replace all spaces for hyphen
    slug = name.title.replace(/\s+/g, "-").toLowerCase();

    return `content/products/${slug}.md`;
  },
  fields: [
    // Commented out until we find a solution for previewSrc
    {
      name: "featureImage",
      description: "Main product image",
      label: "Main Image",
      component: "image",
      // Generate the frontmatter value based on the filename
      parse: (filename) => {
        return `/content/products/${slug}/${filename}`;
      },
      // Decide the file upload directory for the image
      uploadDir: () => {
        return `/content/products`;
      },
      // Todo: Fix the preview source
      previewSrc: (postInfo) => {
        return postInfo.featureImage;
      },
    },
    {
      label: "Title",
      name: "title",
      component: "text",
      required: true,
    },
  ],
  frontmatter: (postInfo) => {
    return {
      title: postInfo.title,
    };
  },
});

const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Saorsa Jewellery</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link rel="stylesheet" href="/css/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="/css/all.min.css" />
        <link rel="stylesheet" href="/css/flickity.min.css" />
        <link rel="stylesheet" href="/css/vs2015.css" />
        <link rel="stylesheet" href="/css/simplebar.min.css" />
        <link rel="stylesheet" href="/css/flickity-fade.css" />
        <link rel="stylesheet" href="/fonts/feather/feather.css" />
        <link rel="stylesheet" href="/css/theme.min.css" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link
          rel="stylesheet"
          href="https://cdn.snipcart.com/themes/v3.0.19/default/snipcart.css"
          type="text/css"
        />
        <script src="https://cdn.snipcart.com/themes/v3.0.19/default/snipcart.js"></script>
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default withPlugin(Layout, CreateBlogButton);
