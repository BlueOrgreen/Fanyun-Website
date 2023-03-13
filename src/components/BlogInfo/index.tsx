import React from "react";
import styles from './index.module.scss';
import useGlobalData from '@docusaurus/useGlobalData';
import Link from '@docusaurus/Link';
import { useThemeConfig } from '@docusaurus/theme-common';
import { Fade } from "react-awesome-reveal";
import useBaseUrl from '@docusaurus/useBaseUrl';


type Count = {
  blog: number;
  tag: number;
  doc: number;
  project: number;
};

export function BlogUser({
  count,
  isNavbar = false,
}: {
  count?: Count;
  isNavbar?: boolean;
}) {
  const {
    navbar: { title, logo = { src: '' } },
  } = useThemeConfig();

  const logoLink = useBaseUrl(logo.src || '/');
  console.log('logoLink===>', useThemeConfig());
  
  return (
    <div className={styles.blogUser}>
      <div className={styles.userContent}>
        <div>
          <Link href="#about">
            <img className={styles.bloginfoImg} src={logoLink} alt="logo"></img>
          </Link>
        </div>
        <div>
          <Link className={styles.bloginfoName} href="about">
            {title}
          </Link>
        </div>
        <div className={styles.blogDescription}>
          <span>种一棵树最好时间是</span>
          <span>十年前, 其次是现在</span>
        </div>
      </div>
    </div>
  )
}

export default function BlogInfo() {
  const globalData = useGlobalData();
  const blogPluginData = globalData?.['docusaurus-plugin-content-blog']?.[
    'default'
  ] as any;

  const count: Count = {
    blog: 1,
    tag: 2 ?? 0,
    doc: 3 ?? 0,
    project: 4 ?? 0,
  };
  return (
    <div className={styles.blogInfo}>
      <Fade direction='right' triggerOnce={true}>
        <BlogUser count={count} />
      </Fade>
    </div>
  )
}