import { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';

import { LinkType } from '../types';

import styles from '../Button.module.scss';

export const LinkButton: FC<LinkType> = ({ children, href, target, className }) => (
  <>
    {target ? (
      <a href={href} target={target} className={classNames(styles.button, className)}>
        {children}
      </a>
    ) : (
      <Link href={href}>
        <a className={classNames(styles.button, className)}>{children}</a>
      </Link>
    )}
  </>
);
