import React from 'react';
import Helmet from 'react-helmet';

import 'prismjs/themes/prism.css';

import '../utils/analytics';
import { blogContent } from '../utils/css';
import Header from '../components/Header';
import Footer from '../components/Footer';

const IndexLayout = ({ children, data: { site: { siteMetadata } } }) => (
  <div>
    <Helmet
      title={siteMetadata.title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        { name: 'description', content: siteMetadata.description },
        { name: 'keywords', content: siteMetadata.keywords },
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
    <Footer />
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
        keywords
      }
    }
  }
`;
