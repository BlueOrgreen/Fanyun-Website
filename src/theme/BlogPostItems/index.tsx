import React from 'react';
// @ts-ignore
import { BlogPostProvider } from '@docusaurus/theme-common/internal';
import BlogPostItem from '@theme/BlogPostItem';
import type { Props } from '@theme/BlogPostItems';
import { Fade } from "react-awesome-reveal";

export default function BlogPostItems({
  items,
  component: BlogPostItemComponent = BlogPostItem,
}: Props): JSX.Element {
  console.log('items', items);
  
  return (
    <>
      {items.map(({ content: BlogPostContent },) => (
        <BlogPostProvider
          key={BlogPostContent.metadata.permalink}
          content={BlogPostContent}>

          <Fade direction="left" duration={800} triggerOnce={true}>
            <BlogPostItemComponent>
              <BlogPostContent />
            </BlogPostItemComponent>
          </Fade>
        </BlogPostProvider>
      ))}
    </>
  );
}