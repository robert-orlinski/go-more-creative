import React from 'react';
import classNames from 'classnames';
import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={classNames('wrapper', styles.footer)}>
    <p className="textCenter">
      made with a little bit of creativity, by:&nbsp;
      <a href="https://github.com/robert-orlinski" target="_blank" rel="noreferrer">
        robert orliński
      </a>
    </p>
  </footer>
);
