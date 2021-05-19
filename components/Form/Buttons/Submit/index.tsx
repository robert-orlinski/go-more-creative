import { FC } from 'react';
import { ClassicButton } from '../../../Button/Classic';

import { FormButtonsTypes } from '../../types';

import styles from '../../Form.module.scss';

export const Submit: FC<FormButtonsTypes> = ({ ideaNumber }) => (
  <>{ideaNumber === 10 && <ClassicButton className={styles.submit}>finished!</ClassicButton>}</>
);
