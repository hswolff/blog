import React, { Component } from 'react';
import _ from 'lodash';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { DateTime } from 'luxon';

export default class BlogArchive extends Component {
  state = {
    '2018': true,
    '2017': true,
  };

  render() {
    const { allMarkdownRemark } = this.props.data;
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
            <h2
              css={`
                cursor: pointer;
                opacity: ${this.state[year] ? '1' : '0.6'};
                transition: ease-in-out 0.2s opacity;
                &:hover {
                  opacity: 1;
                }
              `}
              onClick={() => this.setState(state => ({ [year]: !state[year] }))}
            >
              {year}
            </h2>
            {this.state[year] && (
              <ul>
                {groups[year].map(({ node }) => (
                  <li key={node.id}>
                    <Link to={node.fields.url}>{node.frontmatter.title}</Link> ({DateTime.fromISO(
                      node.frontmatter.date
                    ).toFormat('MMMM d')})
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    );
  }
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
