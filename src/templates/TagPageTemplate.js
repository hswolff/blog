import React from 'react';
import GatsbyLink from 'gatsby-link';
import BlogListItem from '../components/BlogListItem';

export default function EpisodeTagsTemplate({ pathContext }) {
  const { tags, tag } = pathContext;

  // individual tag page
  if (tag) {
    const { name, nodes } = tag;

    return (
      <div>
        <h1>
          {nodes.length} link{nodes.length === 1 ? '' : 's'} tagged with {name}
        </h1>
        {nodes.map(node => {
          return <BlogListItem {...node} key={node.id} />;
        })}
      </div>
    );
  }

  // all tags page
  return (
    <div>
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
    </div>
  );
}
