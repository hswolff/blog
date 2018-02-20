import React from 'react';
import Helmet from 'react-helmet';

import Header from '../components/Header';

const IndexLayout = ({ children, data: { site: { siteMetadata } } }) => (
  <div>
    <Helmet
      title={siteMetadata.title}
      meta={[
        { name: 'description', content: siteMetadata.description },
        { name: 'keywords', content: 'Harry Wolff, javascript' },
      ]}
    />
    <Header />
    <div
      css={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '0px 1.0875rem 1.45rem',
        paddingTop: 0,
      }}
    >
      {children()}
    </div>
  </div>
);

export default IndexLayout;

export const pageQuery = graphql`
  query TemplateSiteMetadata {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
