import { FC } from 'react';

import { FormButtonsTypes } from '../types';

import { PrevButton } from './PrevButton';
import { NextButton } from './NextButton';
import { Submit } from './Submit';

export const Buttons: FC<FormButtonsTypes> = ({ ideaNumber }) => (
  <footer className="flex">
    <PrevButton ideaNumber={ideaNumber} />
    <NextButton ideaNumber={ideaNumber} />
    <Submit ideaNumber={ideaNumber} />
  </footer>
);
