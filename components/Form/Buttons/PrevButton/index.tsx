import { FC } from 'react';
import { ClassicButton } from '../../../Button/Classic';

import { FormButtonsTypes } from '../../types';

import styles from '../../Form.module.scss';

export const PrevButton: FC<FormButtonsTypes> = ({ ideaNumber }) => (
  <>{ideaNumber !== 1 && <ClassicButton className={styles.button}>previous</ClassicButton>}</>
);
