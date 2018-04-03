const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Harry Wolff',
    description: 'Personal site of Harry Wolff (hswolff).',
    siteUrl: 'http://hswolff.com',
    keywords:
      'javascript, code, tutorial, review, technology, writing, blog, personal, music',
  },
  plugins: [
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-12625863-1',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: path.join(__dirname, '_posts'),
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: path.join(__dirname, '_pages'),
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: ['gatsby-remark-autolink-headers', 'gatsby-remark-prismjs'],
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(({ node }) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  url: site.siteMetadata.siteUrl + node.fields.url,
                  guid: site.siteMetadata.siteUrl + node.fields.url,
                  category: node.frontmatter.tags,
                });
              });
            },
            query: `
            {
              allMarkdownRemark(
                limit: 10
                sort: { fields: [frontmatter___date], order: DESC }
                filter: { id: { regex: "/_posts/" } }
              ) {
                edges {
                  node {
                    id
                    excerpt(pruneLength: 280)
                    frontmatter {
                      title
                      slug
                      date
                      tags
                    }
                    fields {
                      url
                    }
                  }
                }
              }
            }
          `,
            output: '/rss.xml',
          },
        ],
      },
    },
    'gatsby-plugin-offline',
  ],
};
