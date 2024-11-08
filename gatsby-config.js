/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: "My First Gatsby Site!!",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-plugin-client-side-redirect`,
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID || "7q02eeb2", // Correct
        dataset: process.env.GATSBY_SANITY_DATASET || "production", // Correct
        token: process.env.GATSBY_SANITY_TOKEN || "skjc67ZklIOBqSmFxdxbFT0yDGhRaLikWCsjobN6Xe57EfuxsWO74LY2L2oa1eMRq4OCTElA9Lj13E6ZYEMewePLezfrKGUY04Q3zKXIJ5WzYDrUViOoTG1n3j9Nn219aLJDuVtt2bTGiWPT7GlTHlSaGhUrrnOMeTUj04PH9LvgSk9tmvYC", // Correct
        apiVersion: '2022-03-07', // Optional: specific API version
      },
      
    },
  ],
}
