import { FC } from 'react';
import { ClassicButton } from '../../../Button/Classic';

import { FormFooterType } from '../../types';

import styles from '../../Form.module.scss';

export const Submit: FC<FormFooterType> = ({ ideaNumber }) => (
  <>
    {ideaNumber === 10 && (
      <ClassicButton className={styles.submit} type="submit">
        finished!
      </ClassicButton>
    )}
  </>
);
