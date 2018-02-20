import React from 'react';
import _ from 'lodash';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { DateTime } from 'luxon';

export default function BlogArchive(props) {
  const { allMarkdownRemark } = props.data;
  const { edges } = allMarkdownRemark;
  const groups = _.groupBy(edges, ({ node }) =>
    DateTime.fromISO(node.frontmatter.date).toFormat('y')
  );
  const years = Object.keys(groups).sort((a, b) => b - a);

  return (
    <div>
      <Helmet title="Blog Archive" />
      <h1>Archive</h1>
      {_.map(years, year => (
        <div key={year}>
          <h2>{year}</h2>
          <ul>
            {groups[year].map(({ node }) => (
              <li key={node.id}>
                <Link to={node.fields.url}>{node.frontmatter.title}</Link> ({DateTime.fromISO(
                  node.frontmatter.date
                ).toFormat('MMMM d')})
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export const pageQuery = graphql`
  query ArchivePosts {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { id: { regex: "/_posts/" } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            url
          }
        }
      }
    }
  }
`;
