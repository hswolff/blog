import React from 'react';
import Link from 'gatsby-link';

const Header = () => (
  <div
    css={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      css={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 css={{ margin: 0 }}>
        <Link
          to="/"
          css={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Gatsby
        </Link>
      </h1>
      <div>
        <Link
          to="/about"
          css={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          About
        </Link>
        <Link
          to="/talks"
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
