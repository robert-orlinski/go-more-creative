import { FC } from 'react';
import { ClassicButton } from '../../../Button/Classic';

import { FormButtonsTypes } from '../../types';

import styles from '../../Form.module.scss';

export const NextButton: FC<FormButtonsTypes> = ({ ideaNumber }) => (
  <>{ideaNumber !== 10 && <ClassicButton className={styles.button}>next</ClassicButton>}</>
);
