import React from 'react';
import Helmet from 'react-helmet';

import { blogContent } from '../utils/css';
import Header from '../components/Header';

const IndexLayout = ({ children, data: { site: { siteMetadata } } }) => (
  <div>
    <Helmet
      title={siteMetadata.title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        { name: 'description', content: siteMetadata.description },
        { name: 'keywords', content: 'Harry Wolff, javascript' },
      ]}
    />
    <Header />
    <main
      className={blogContent}
      css={{
        paddingTop: 0,
      }}
    >
      {children()}
    </main>
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
