const path = require("path");
const REPO_ABSOLUTE_PATH = path.join(process.cwd(), "../..");
console.log(REPO_ABSOLUTE_PATH);
/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    {
      resolve: "gatsby-plugin-tinacms",
      options: {
        sidebar: true,
        enabled: process.env.NODE_ENV !== "production",
      },
    },
    {
      resolve: "gatsby-tinacms-git",
      options: {
        pathToRepo: REPO_ABSOLUTE_PATH,
        pathToContent: "/",
        defaultCommitMessage: "Edited with TinaCMS",
        defaultCommitName: "TinaCMS",
        defaultCommitEmail: "git@tinacms.org",
        pushOnCommit: false,
      },
    },
    "gatsby-tinacms-json",
    "gatsby-tinacms-remark",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/src/content/products`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `categories`,
        path: `${__dirname}/src/content/categories`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/public/uploads`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
  ],
};
