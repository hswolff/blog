import React from 'react';
import Link from 'gatsby-link';
import { DateTime } from 'luxon';

export default ({ pathContext }) => {
  const { group, index, first, last, pageCount, pathPrefix } = pathContext;
  const previousUrl = index - 1 == 1 ? '/blog/' : `${pathPrefix}${index - 1}/`;
  const nextUrl = `${pathPrefix}${index + 1}/`;

  return (
    <div>
      <h4>
        Page {index} of {pageCount}
      </h4>

      {group.map(({ node }) => <BlogListItem key={node.id} {...node} />)}
      <div>
        <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
      </div>
      <div>
        <NavLink test={last} url={nextUrl} text="Go to Next Page" />
      </div>
    </div>
  );
};

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};

function formatDate(date) {
  return DateTime.fromISO(date).toFormat('LLLL d y');
}

const BlogListItem = props => (
  <div>
    <div>{formatDate(props.frontmatter.date)}</div>
    <Link to={props.fields.url}>{props.frontmatter.title}</Link>
    <div>{props.excerpt}</div>
    <ul>
      {props.frontmatter.tags.map((tag, index) => (
        <li key={tag}>
          <Link to={props.fields.tagsUrls[index]}>{tag}</Link>
        </li>
      ))}
    </ul>
    <div>Read time {props.timeToRead}</div>
  </div>
);
