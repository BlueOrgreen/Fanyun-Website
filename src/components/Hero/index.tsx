import React from "react";
import { useColorMode } from '@docusaurus/theme-common';
import { useTrail, animated, useTransition } from '@react-spring/web';
import styles from './index.module.css';
import cls  from 'classnames';
import Navbar from "../Navbar";
import cs from 'classnames';
import HeroMain from './img/blog-img.svg';
import { GithubIcon } from "../GithubIcon";
import { BilibliIcon } from "../BilibliIcon";
import Link from "@docusaurus/Link";
import { MdSend, MdMouse, MdKeyboardDoubleArrowDown } from 'react-icons/md';

export default function Hero() {
  const { colorMode } = useColorMode();
  const trails = useTrail(4, {
    from: { opacity: 0, transform: 'translate3d(0px, 2em, 0px)' },
    to: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' },
    config: {
      mass: 3,
      tension: 460,
      friction: 45,
    },
  });

  const trailsSocial = useTrail(1, {
    from: { opacity: 0, transform: 'translate3d(-12rem, 0px, 0px)' },
    to: { opacity: 1, transform: 'translate3d(-6rem, 0px, 0px)' },
    config: {
      mass: 3,
      tension: 400,
      friction: 45,
    },
  });

  return (
    <animated.div
      className={cls(
        styles.hero,
      )}>
        <Navbar />
        <main className={styles.main}>
          {/* Home 部分 */}
          <section className={styles.session}>
            <div className={cs(
              "grid",
              styles.container,
              styles.homeContainer,
            )}>
              <div className={cs(
                "grid",
                styles.homeContent
              )}>
                <animated.div style={trailsSocial[0]} className={styles.homeSocial}>
                  <a
                    href="http://github.com"
                    target="_blank"
                    className={styles.homeSocialIcon}
                  >
                    <GithubIcon />
                  </a>
                  <a
                    href="https://t.bilibili.com/"
                    target="_blank"
                    className={styles.homeSocialIcon}
                  >
                    <BilibliIcon />
                  </a>
                  <a
                    href="https://t.bilibili.com/"
                    target="_blank"
                    className={styles.homeSocialIcon}
                  >
                    <BilibliIcon />
                  </a>
                </animated.div>
                <animated.div style={trails[3]} className={styles.homeImg}>
                  <HeroMain width={400} />
                </animated.div>
                <div className={styles.homeData}>
              <animated.h1 style={trails[0]} className={styles.homeTitle}>
                Hi, 我是帆云
              </animated.h1>
              <animated.h3 style={trails[1]} className={styles.homeSubtitle}>
                全栈开发者
              </animated.h3>
              <animated.p style={trails[2]} className={styles.homeDescription}>
                分享我的的网页设计经验和开发知识，
                致力于能生产高质量的工作。
              </animated.p>
              <animated.div style={trails[3]} >
              <Link  href="#contact" className="button button-flex">
                <div className={styles.contact}>
                  <span>联系我</span>
                  <i className="uil uil-message button__icon"><MdSend /></i>
                </div>
              </Link>
              </animated.div>
                </div>
              </div>
              <div className={styles.homeScroll}>
              <Link href="#about" className={cs("button--flex")}>
                <i className={styles.homeScrollMouse}><MdMouse /></i>
                <span className={styles.homeScrollName}>Scroll down</span>
                <i className={styles.homeScrollArrow}><MdKeyboardDoubleArrowDown /></i>
              </Link>
          </div>
            </div>
          </section>
        </main>
      </animated.div>
  )
}