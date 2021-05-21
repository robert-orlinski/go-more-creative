import { Dispatch, SetStateAction } from 'react';

export interface FormFooterType {
  ideaNumber: number;
}

export interface FormButtonsType extends FormFooterType {
  setIdeaNumber: Dispatch<SetStateAction<number>>;
}
