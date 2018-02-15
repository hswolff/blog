import React from 'react';
import Helmet from 'react-helmet';

export default function PostTemplate({ data: { markdownRemark } }) {
  const { html, frontmatter } = markdownRemark;
  const { title } = frontmatter;

  return (
    <div>
      <Helmet title={title} />
      <h1>{title}</h1>
      <div
        className="blog-post-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        title
        slug
        date
        tags
      }
      html
    }
  }
`;
