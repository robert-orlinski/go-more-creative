import { FC } from 'react';

import { ClassicButton } from '../../../Button/Classic';

import { FormNextButtonType } from '../../../../types/global';

import styles from '../../Form.module.scss';

export const NextButton: FC<FormNextButtonType> = ({ ideaNumber, allIdeas, goToNextField }) => {
  return (
    <>
      {ideaNumber !== allIdeas.length && (
        <ClassicButton className={styles.button} type="button" onClick={goToNextField}>
          next
        </ClassicButton>
      )}
    </>
  );
};
