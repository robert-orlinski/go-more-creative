import classNames from 'classnames';
import styles from './Footer.module.scss';

export const Footer = () => (
  <footer className={classNames('wrapper', styles.footer)}>
    <p className="textCenter">
      made with some creativity, by:
      <a href="https://github.com/robert-orlinski" target="_blank">
        {` robert orliński`}
      </a>
    </p>
  </footer>
);
