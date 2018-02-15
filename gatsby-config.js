const path = require('path');

module.exports = {
  siteMetadata: {
    title: 'Harry Wolff',
    description: 'Me me me.',
    siteUrl: 'http://hswolff.com',
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
      options: {},
    },
    /*
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
            serialize: ({ query: { site, allEpisodesJson } }) => {
              return allEpisodesJson.edges.map(edge => {
                return Object.assign({}, edge.node, {
                  description: `Episode ${edge.node.fields.episodeNumber}.`,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                });
              });
            },
            query: `
            {
              allEpisodesJson(sort: {fields: [date___end], order: DESC}) {
                edges {
                  node {
                    title
                    fields {
                      episodeNumber
                      slug
                    }
                    youtube {
                      id
                    }
                    date {
                      start
                      end
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
    */
  ],
};
