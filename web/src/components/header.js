import { css } from 'emotion'
import { Link } from 'gatsby'
import React from 'react'
import Icon from './icons'
import { cn } from '../lib/helpers'

import styles from './header.module.css'

const headerCss = css`
  background: #ccc;
`;

const Header = ({ onHideNav, onShowNav, showNav, siteTitle }) => (
  <div css={headerCss} className={styles.root}>
    <div className={styles.wrapper}>
      <h1 className={styles.branding}>
        <Link to='/'>{siteTitle}</Link>
      </h1>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            <Link to='/about/'>About</Link>
          </li>
          <li>
            <Link to='/contact/'>Contact</Link>
          </li>
          <li>
            <Link to='/news/'>News</Link>
          </li>
          <li>
            <Link to='/terms/'>Terms and Conditions</Link>
          </li>
          <li>
            <Link to='/application/'>Credit Application</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
