import React from 'react';
import Helmet from 'react-helmet';
import { injectGlobal } from 'emotion';
import BlogListItem from '../components/BlogListItem';
import Disqus from '../components/Disqus';

export default function PostTemplate({ data: { markdownRemark } }) {
  const {
    html,
    frontmatter: { title, slug },
    fields: { url },
  } = markdownRemark;

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

      <hr />
      <Disqus url={url} identifier={slug} title={title} />
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
