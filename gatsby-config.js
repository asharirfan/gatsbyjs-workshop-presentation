module.exports = {
  siteMetadata: {
    name: `Ashar Irfan`,
    title: `🚀 Gatsby.js — Blazing Fast Static Site Generator`,
    date: `October 17, 2018`,
  },
  plugins: [
    `gatsby-plugin-layout`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `slides`,
        path: `${__dirname}/src`,
      },
    },
  ],
};
