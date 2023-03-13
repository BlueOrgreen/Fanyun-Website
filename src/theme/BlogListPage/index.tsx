/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { FC, useCallback, useEffect } from 'react';
import clsx from 'clsx';
import BackToTopButton from '@theme/BackToTopButton';
import type { Props as BlogPostItemsProps } from '@theme/BlogPostItems';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
  useColorMode,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogInfo from '@site/src/components/BlogInfo';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import type {Props} from '@theme/BlogListPage';
import Link from '@docusaurus/Link';
import BlogPostItems from '@theme/BlogPostItems';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Layout from '@theme/Layout';
import { Fade } from "react-awesome-reveal";
import styles from './index.module.scss';
// @ts-ignore
import {useBlogPost} from '@docusaurus/theme-common/internal';
import Hero from '@site/src/components/Hero';


function BlogListPageMetadata(props: Props): JSX.Element {
  const {metadata} = props;
  const {
    siteConfig: {title: siteTitle},
  } = useDocusaurusContext();
  const {blogDescription, blogTitle, permalink} = metadata;
  const isBlogOnlyMode = permalink === '/';
  const title = isBlogOnlyMode ? siteTitle : blogTitle;
  
  return (
    <>
      <PageMetadata title={title} description={blogDescription} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogPostGridItems({ items }: BlogPostItemsProps): JSX.Element {

  return (
    <>
    <Fade direction='left' triggerOnce={true}>
      {items.map(({ content: BlogPostContent }, index) => {
        const { metadata: blogMetaData, frontMatter, assets } = BlogPostContent;
        const { title, image, description } = frontMatter;
        const { permalink, date, tags } = blogMetaData;
        const dateObj = new Date(date);
        const dateString = `${dateObj.getFullYear()}-${('0' + (dateObj.getMonth() + 1)).slice(-2)}-${('0' + dateObj.getDate()).slice(-2)}`;
        
        return (
          <div className={styles.postListItem} key={blogMetaData.permalink}>
            <div className={styles.itemImage}>
              <img src={image} alt="" />
            </div>
            <div className={styles.itemContent}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' }}>
                <div className={styles.itemTime}>{dateString}</div>
                <div className={styles.itemTags}>
                  {tags.length > 0 &&
                    tags
                      .slice(0, 2)
                      .map(({ label, permalink: tagPermalink }, index) => (
                        <Link
                          key={tagPermalink}
                          className={`post__tags ${index < tags.length ? 'margin-right--sm' : ''}`}
                          to={tagPermalink}
                          style={{ color: 'black', fontSize: '0.75em', fontWeight: 500 }}>
                          {label}
                        </Link>
                      ))}
                </div>
              </div>
              <Link to={permalink} className={styles.itemTitle}>
                {title}
              </Link>
              <div className={styles.itemContentText}>
                {description}
              </div>
            </div>
          </div>
        );
      })}
      </Fade>
    </>
  );
}

function BlogListPageContent(props: Props): JSX.Element {
  const { metadata, items, sidebar } = props;
  return (
    <Layout wrapperClassName="blog=-list__page">
      <Hero />
      <BackToTopButton />

      {/* 博客 */}
      <div className={styles.containerWrapper}>
        <div className={styles.blogsContainerHead}>
        <h2 className={styles.blogsTitle}>
          博客列表
        </h2>
          <div className={styles.blogsSubTitle}>我的个人记录</div>
        </div>
      <div className='row'>
      
        <div className='col' style={{ transition: 'all 0.3s ease', flex: 3 }}>
          <div className="bloghome__posts">
            <div className="bloghome__posts-grid">
                <BlogPostGridItems items={items} />
            </div>
          </div>
        </div>
          <div className='col' style={{ flex: 1 }}>
            <BlogInfo />
          </div >
      </div>
      </div>
    </Layout>
  );
}

export default function BlogListPage(props: Props): JSX.Element {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogListPageContent {...props} />
    </HtmlClassNameProvider>
  );
}
