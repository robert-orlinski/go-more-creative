import { FC } from 'react';
import { ClassicButton } from '../../../Button/Classic';

import { FormFooterType } from '../../../../types/global';

import styles from '../../Form.module.scss';

export const Submit: FC<FormFooterType> = ({ ideaNumber }) => (
  <>
    {ideaNumber === 10 && (
      <ClassicButton className={styles.submit} type="submit" testId="submit">
        finished!
      </ClassicButton>
    )}
  </>
);
