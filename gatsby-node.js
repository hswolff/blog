const path = require('path');
const createPaginatedPages = require('gatsby-paginate');

// Lifecycle methods

exports.createPages = async function({ boundActionCreators, graphql }) {
  const result = await graphql(`
    {
      allMarkdownRemark(
        # limit: 5
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { id: { regex: "/_posts/" } }
      ) {
        totalCount
        edges {
          node {
            id
            excerpt
            timeToRead
            frontmatter {
              title
              slug
              date
              tags
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    return Promise.reject(result.errors);
  }

  const { createPage } = boundActionCreators;
  const edges = result.data.allMarkdownRemark.edges;

  createBlogPostPages({
    createPage,
    edges,
  });
  createTagPages({
    createPage,
    edges,
  });

  createPaginatedPages({
    edges,
    createPage: createPage,
    pageTemplate: 'src/templates/index.js',
    pageLength: 6,
    context: {},
    pathPrefix: '/blog/page',
    buildPath: (index, pathPrefix) =>
      index > 1 ? `${pathPrefix}/${index}` : '/',
  });
};

// Implementations

function createBlogPostPages({ edges, createPage }) {
  const component = path.resolve('src/templates/PostTemplate.js');

  edges.forEach(({ node }) => {
    const { slug } = node.frontmatter;

    createPage({
      path: `/${slug}`,
      component,
      context: {
        slug,
      },
    });
  });
}

function createTagPages({ createPage, edges }) {
  const tagTemplate = path.resolve('src/templates/TagPageTemplate.js');

  const tags = {};

  edges.forEach(({ node }) => {
    if (node.frontmatter.tags) {
      node.frontmatter.tags.forEach(tag => {
        if (!tags[tag]) {
          tags[tag] = {
            name: tag,
            slug: `/blog/tag/${tag}`,
            nodes: [],
          };
        }
        tags[tag].nodes.push(node);
      });
    }
  });

  // Create the tags page with the list of tags from our tags object.
  createPage({
    path: '/blog/tags',
    component: tagTemplate,
    context: {
      tags,
    },
  });

  // For each of the tags in the post object, create a tag page.

  for (const tagName in tags) {
    const tag = tags[tagName];

    createPage({
      path: tag.slug,
      component: tagTemplate,
      context: {
        tag,
      },
    });
  }
}
