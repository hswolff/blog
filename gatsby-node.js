const path = require('path');
const _ = require('lodash');
const createPaginatedPages = require('gatsby-paginate');

const createFullUrl = relativePath => `/blog/${relativePath}/`;

// Lifecycle methods

exports.onCreateNode = function() {
  return Promise.all([addUrlToBlogPost].map(fn => fn.apply(this, arguments)));
};

function addUrlToBlogPost({ node, boundActionCreators }) {
  if (node.internal.type !== 'MarkdownRemark') {
    return;
  }

  const { createNodeField } = boundActionCreators;

  const { slug } = node.frontmatter;

  createNodeField({
    node,
    name: 'url',
    value: createFullUrl(slug),
  });

  createNodeField({
    node,
    name: 'tagsUrls',
    value: node.frontmatter.tags
      ? node.frontmatter.tags.map(tag => `/blog/tag/${tag}/`)
      : [],
  });
}

exports.createPages = async function({ boundActionCreators, graphql }) {
  const results = await Promise.all([
    graphql(getMarkdownQuery({ regex: '/_posts/' })),
    graphql(getMarkdownQuery({ regex: '/_pages/' })),
  ]);

  const error = results.filter(r => r.errors);
  if (error.length) {
    return Promise.reject(error[0].errors);
  }

  const [blogPostResults, pageResults] = results;

  const { createPage } = boundActionCreators;
  const blogPostEdges = blogPostResults.data.allMarkdownRemark.edges;
  const pageEdges = pageResults.data.allMarkdownRemark.edges;

  createBlogPostPages({
    createPage,
    edges: blogPostEdges,
  });

  createTagPages({
    createPage,
    edges: blogPostEdges,
  });

  createPaginatedPages({
    edges: blogPostEdges,
    createPage: createPage,
    pageTemplate: 'src/templates/BlogListTemplate.js',
    pageLength: 6,
    context: {},
    pathPrefix: createFullUrl('page'),
    buildPath: (index, pathPrefix) =>
      index > 1 ? `${pathPrefix}${index}` : '/blog/',
  });

  createPagePages({
    createPage,
    edges: pageEdges,
  });
};

// Implementations

function getMarkdownQuery({ regex } = {}) {
  return `
    {
      allMarkdownRemark(
        # limit: 36
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { id: { regex: "${regex}" } }
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
            fields {
              url
              tagsUrls
            }
          }
        }
      }
    }
  `;
}

function createBlogPostPages({ edges, createPage }) {
  const component = path.resolve('src/templates/PostTemplate.js');

  edges.forEach(({ node }) => {
    const { slug } = node.frontmatter;

    createPage({
      path: createFullUrl(slug),
      component,
      context: {
        slug,
      },
    });
  });
}

function createPagePages({ edges, createPage }) {
  const component = path.resolve('src/templates/PageTemplate.js');

  edges.forEach(({ node }) => {
    const { slug, title } = node.frontmatter;
    const pagePath = slug || _.kebabCase(title);

    createPage({
      path: pagePath,
      component,
      context: {
        title,
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
            slug: createFullUrl(`tag/${tag}`),
            nodes: [],
          };
        }
        tags[tag].nodes.push(node);
      });
    }
  });

  // Create the tags page with the list of tags from our tags object.
  createPage({
    path: createFullUrl('tags'),
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
