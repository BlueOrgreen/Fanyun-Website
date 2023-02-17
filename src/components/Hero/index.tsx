import React from "react";
import { useColorMode } from '@docusaurus/theme-common';
import styles from './index.module.css';
import cls  from 'classnames';
import Navbar from "../Navbar";

export default function Hero() {
  const { colorMode } = useColorMode();
  console.log('colorMode===>', colorMode);

  return (
    <div
      style={{ background: colorMode === 'light' ? 'url(/back/page-links-bg-2.png)' : 'url(/back/page-links-bg-1.png)' }}
      className={cls(
        styles.hero,
      )}>
        <Navbar />
      </div>
  )
}