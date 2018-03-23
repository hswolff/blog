import React from 'react';
import Link from 'gatsby-link';
import styled from 'react-emotion';
import { color } from '../utils/css';
import { lighten } from 'polished';

import BlogListItem from '../components/BlogListItem';

const lighterBgColor = lighten(0.4, color.background);

export default ({ pathContext }) => {
  const { group, index, first, last, pageCount, pathPrefix } = pathContext;
  const previousUrl = index - 1 == 1 ? '/blog/' : `${pathPrefix}${index - 1}/`;
  const nextUrl = `${pathPrefix}${index + 1}/`;

  const navProps = { first, previousUrl, index, pageCount, last, nextUrl };

  return (
    <div>
      {!first && <BlogListNavigation {...navProps} />}
      {group.map(({ node }) => <BlogListItem key={node.id} {...node} />)}
      <BlogListNavigation {...navProps} />
    </div>
  );
};

const BlogListNavigation = ({
  first,
  previousUrl,
  index,
  pageCount,
  last,
  nextUrl,
}) => (
  <div
    css={`
      margin: 40px 0;
      display: flex;
      justify-content: space-between;
      align-content: center;
      font-size: 80%;
      &, a {
        color: ${lighterBgColor};
    `}
  >
    <NavButton>
      <NavLink test={first} url={previousUrl} text="Go to Previous Page" />
    </NavButton>
    <div css={{ marginTop: '5px' }}>
      Page {index} of {pageCount}
    </div>
    <NavButton>
      <NavLink test={last} url={nextUrl} text="Go to Next Page" />
    </NavButton>
  </div>
);

const NavLink = props => {
  if (!props.test) {
    return <Link to={props.url}>{props.text}</Link>;
  } else {
    return <span>{props.text}</span>;
  }
};

const NavButton = styled('div')`
  border-width: 1px;
  border-style: solid;
  border-color: ${lighterBgColor};
  padding: 5px 10px;
  border-radius: 4px;
  transition: border-color 0.2s ease-in-out;
  &:hover {
    border-color: ${color.background};
    a {
      color: ${color.background};
    }
  }
  a {
    box-shadow: none;
  }
`;
