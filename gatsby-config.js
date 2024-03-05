/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Voltaic Solar Energy Solutions`,
    description: `Leading provider of modern, affordable, and green energy solutions for homes and businesses.`,
    author: `@voltaic`,
    siteUrl: `https://www.voltaicpowered.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-NNSY085EY1",  // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
        },
      },
    },
      `gatsby-plugin-react-helmet`,
     {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/content/blog`, 
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`, // Adjust based on your directory structure
      },
    },
    
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              withWebp: true, // Serve WebP images
              // Options for gatsby-remark-images
            },
          },
          // Other plugins...
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.voltaicpowered.com',
        sitemap: 'https://www.voltaicpowered.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Voltaic Solar Energy Solutions`,
        short_name: `Voltaic`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#004c3f`,
        display: `minimal-ui`,
        icon: `src/images/voltaiclogo.png`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    'gatsby-transformer-sharp',
    `gatsby-plugin-image`,
    `gatsby-plugin-offline`,
    "gatsby-plugin-graphql-loader",
  ]
};