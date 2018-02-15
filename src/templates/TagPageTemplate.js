import React from 'react';
import GatsbyLink from 'gatsby-link';

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
        <ul>
          {nodes.map(({ id, frontmatter: { title } }) => {
            return (
              <li key={id}>
                <p>{title}</p>
              </li>
            );
          })}
        </ul>
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
