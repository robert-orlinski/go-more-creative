import { FC } from 'react';
import { ClassicButton } from '../../../Button/Classic';

import { FormButtonsType } from '../../types';

import styles from '../../Form.module.scss';

export const PrevButton: FC<FormButtonsType> = ({ ideaNumber, setIdeaNumber }) => (
  <>
    {ideaNumber !== 1 && (
      <ClassicButton
        className={styles.button}
        type="button"
        onClick={() => setIdeaNumber(--ideaNumber)}
        tabIndex={2}
      >
        previous
      </ClassicButton>
    )}
  </>
);
