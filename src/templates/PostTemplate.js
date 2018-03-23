import React from 'react';
import Helmet from 'react-helmet';
import { injectGlobal } from 'emotion';
import BlogListItem from '../components/BlogListItem';

export default function PostTemplate({ data: { markdownRemark } }) {
  const { html, frontmatter } = markdownRemark;
  const { title } = frontmatter;

  return (
    <div>
      <Helmet title={title} />
      <BlogListItem asPage {...markdownRemark} />
      <div
        css={`
          margin-top: 20px;
        `}
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      timeToRead
      frontmatter {
        title
        slug
        date
        tags
      }
      fields {
        url
        tagsUrls
      }
    }
  }
`;

injectGlobal`
.anchor {
  box-shadow: none;
}
`;
