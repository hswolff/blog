import React from 'react';
import Helmet from 'react-helmet';

import { blogContent, color } from '../utils/css';
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
    <footer
      css={`
        ${blogContent};
        padding-top: 1.45rem;
        font-size: 0.7rem;
        text-align: center;
        border-top: 1px solid ${color.background};
      `}
    >
      A laugh a day keeps the doctor away.<br />This is not professional medical
      advice.
    </footer>
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
