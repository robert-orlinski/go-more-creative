import { FC } from 'react';
import { ClassicButton } from '../../../Button/Classic';

import { FormButtonsType } from '../../types';

import styles from '../../Form.module.scss';

export const NextButton: FC<FormButtonsType> = ({ ideaNumber, setIdeaNumber }) => (
  <>
    {ideaNumber !== 10 && (
      <ClassicButton
        className={styles.button}
        type="button"
        onClick={() => setIdeaNumber(++ideaNumber)}
      >
        next
      </ClassicButton>
    )}
  </>
);
