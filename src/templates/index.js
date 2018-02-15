import React from 'react';
import Link from 'gatsby-link';

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};

export default ({ pathContext }) => {
  const { group, index, first, last, pageCount, pathPrefix } = pathContext;
  const previousUrl = index - 1 == 1 ? '' : (index - 1).toString();
  const nextUrl = `${pathPrefix}/${index + 1}`;

  return (
    <div>
      <h4>
        Page {index} of {pageCount}
      </h4>

      {group.map(({ node }) => (
        <div key={node.id} className="blogListing">
          <div className="date">{node.frontmatter.date}</div>
          <Link className="blogUrl" to={node.frontmatter.slug}>
            {node.frontmatter.title}
          </Link>
          <div>{node.excerpt}</div>
        </div>
      ))}
      <div className="previousLink">
        <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
      </div>
      <div className="nextLink">
        <NavLink test={last} url={nextUrl} text="Go to Next Page" />
      </div>
    </div>
  );
};
