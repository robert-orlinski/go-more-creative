import { FC } from 'react';

import { FormButtonsType } from '../types';

import { PrevButton } from './PrevButton';
import { NextButton } from './NextButton';
import { Submit } from './Submit';

export const Buttons: FC<FormButtonsType> = ({ ideaNumber, setIdeaNumber }) => (
  <footer className="flex">
    <PrevButton ideaNumber={ideaNumber} setIdeaNumber={setIdeaNumber} />
    <NextButton ideaNumber={ideaNumber} setIdeaNumber={setIdeaNumber} />
    <Submit ideaNumber={ideaNumber} />
  </footer>
);
