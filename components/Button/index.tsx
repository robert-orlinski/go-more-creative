import Link from 'next/link';
import styles from './button.module.scss';

import { ButtonType } from '../../types/types';

export const Button: React.FC<ButtonType> = ({ children, href, target }) => (
  <>
    {target ? (
      <a href={href} target={target} className={styles.button}>
        {children}
      </a>
    ) : (
      <Link href={href}>
        <a className={styles.button}>{children}</a>
      </Link>
    )}
  </>
);
