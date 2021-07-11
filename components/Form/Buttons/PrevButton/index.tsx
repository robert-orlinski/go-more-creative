import { FC } from 'react';
import { ClassicButton } from '../../../Button/Classic';

import { FormPrevButtonType } from '../../../../types/global';

import styles from '../../Form.module.scss';

export const PrevButton: FC<FormPrevButtonType> = ({ ideaNumber, goToPrevField }) => (
  <>
    {ideaNumber !== 1 && (
      <ClassicButton
        className={styles.button}
        type="button"
        onClick={goToPrevField}
        tabIndex={2}
        testId="prev"
      >
        previous
      </ClassicButton>
    )}
  </>
);
