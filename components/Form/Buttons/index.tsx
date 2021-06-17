import React from 'react';

import classNames from 'classnames';
import { FC } from 'react';

import { FormButtonsType } from '../../../types/global';

import { PrevButton } from './PrevButton';
import { NextButton } from './NextButton';
import { Submit } from './Submit';

import styles from '../Form.module.scss';

export const Buttons: FC<FormButtonsType> = ({
  ideaNumber,
  allIdeas,
  goToPrevField,
  goToNextField,
}) => (
  <footer className={classNames('flex', styles.buttons)}>
    <PrevButton ideaNumber={ideaNumber} goToPrevField={goToPrevField} />
    <NextButton ideaNumber={ideaNumber} allIdeas={allIdeas} goToNextField={goToNextField} />
    <Submit ideaNumber={ideaNumber} />
  </footer>
);
