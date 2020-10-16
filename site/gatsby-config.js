/*eslint no-template-curly-in-string:0*/
module.exports = {
  siteMetadata: {
    title: `AstraCodeClub 2020`,
    description: `Let's learn together to build some apps with Astra`,
    author: `@technibelle`,
    siteUrl: `https://admiring-lumiere-13f880.netlify.app/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-custom-tailwind`,
        short_name: `gct`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#000`,
        display: `minimal-ui`,
        icon: `src/images/ring.ico`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/style.css`],
      },
    },
    `gatsby-plugin-offline`,
  ],
};
