import React from 'react';
import Link from 'gatsby-link';
import { blogContent, bgColor } from '../utils/css';

const Header = () => (
  <div
    css={{
      background: bgColor,
      marginBottom: '1.45rem',
    }}
  >
    <div
      css={`
        ${blogContent};
        padding-top: 1.45rem;
        a {
          box-shadow: none;
        }
      `}
    >
      <h1 css={{ margin: 0 }}>
        <Link
          to="/"
          css={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Harry Wolff
        </Link>
      </h1>
      <div>
        <Link
          to="/blog/"
          css={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Blog
        </Link>
        <Link
          to="/about/"
          css={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          About
        </Link>
        <Link
          to="/talks/"
          css={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Talks
        </Link>
        <Link
          to="/blog/archive/"
          css={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Archive
        </Link>
      </div>
    </div>
  </div>
);

export default Header;
