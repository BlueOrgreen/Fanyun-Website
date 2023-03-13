import React, {type ReactNode} from 'react';
import {HtmlClassNameProvider, ThemeClassNames} from '@docusaurus/theme-common';
// @ts-ignore
import {BlogPostProvider, useBlogPost} from '@docusaurus/theme-common/internal';
import clsx from 'clsx';
import BlogLayout from '@theme/BlogLayout';
import BlogPostItem from '@theme/BlogPostItem';
import BlogPostPaginator from '@theme/BlogPostPaginator';
import BlogPostPageMetadata from '@theme/BlogPostPage/Metadata';
import BackToTopButton from '@theme/BackToTopButton';
import type {BlogSidebar} from '@docusaurus/plugin-content-blog';
import type {Props} from '@theme/BlogPostPage';

function BlogPostPageContent({
  sidebar,
  children,
}: {
  sidebar: BlogSidebar;
  children: ReactNode;
}): JSX.Element {
  const {metadata, toc} = useBlogPost();
  const {nextItem, prevItem, frontMatter} = metadata;
  console.log('yunfan BlogPostPageContent', children);
  
  return (
  <BlogLayout
     // sidebar={sidebar}
  >
    <BlogPostItem>{children}</BlogPostItem>
    {(nextItem || prevItem) && (
      <BlogPostPaginator nextItem={nextItem} prevItem={prevItem} />
    )}
    {/* <Comment /> */}
    <BackToTopButton />
  </BlogLayout>
  )
}


export default function BlogPostPage(props: Props): JSX.Element {
  const BlogPostContent = props.content;
  console.log('Yun fan BlogPostPage props', props);

  return (
    <BlogPostProvider content={props.content} isBlogPostPage>
      <HtmlClassNameProvider
        className={clsx(
          ThemeClassNames.wrapper.blogPages,
          ThemeClassNames.page.blogPostPage,
        )}>
        {/* <BlogPostPageMetadata /> */}
        <BlogPostPageContent sidebar={props.sidebar}>
          <BlogPostContent />
        </BlogPostPageContent>
      </HtmlClassNameProvider>
    </BlogPostProvider>
  )
}