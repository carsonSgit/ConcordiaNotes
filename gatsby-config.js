module.exports = {
    pathPrefix: "/ConcordiaNotes",
    siteMetadata: {
      title: `Concordia Notes`,
      description: `Displaying my notes on a website so its easier to access.`,
      author: `@carsonSgit`,
    },
    plugins: [
      `gatsby-transformer-remark`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-styled-components`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `notes`,
          path: `${__dirname}/Notes`,
        },
      },
    ],
  };
  