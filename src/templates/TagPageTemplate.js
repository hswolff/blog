import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/Layout';
import BlogListItem from '../components/BlogListItem';

export default function EpisodeTagsTemplate({ pageContext }) {
  const { tags, tag } = pageContext;

  // individual tag page
  if (tag) {
    const { name, nodes } = tag;

    return (
      <Layout>
        <Helmet title={`tag: ${name}`} />
        <h1>
          {nodes.length} link{nodes.length === 1 ? '' : 's'} tagged with {name}
        </h1>
        {nodes.map(node => {
          return <BlogListItem {...node} key={node.fileAbsolutePath} />;
        })}
      </Layout>
    );
  }

  // all tags page
  return (
    <Layout>
      <Helmet title="All Tags" />
      <h1>Tags</h1>
      <ul className="tags">
        {Object.keys(tags).map(tagName => {
          const tag = tags[tagName];
          return (
            <li key={tagName}>
              <GatsbyLink to={tag.slug}>
                {tag.name} ({tag.nodes.length})
              </GatsbyLink>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
}
