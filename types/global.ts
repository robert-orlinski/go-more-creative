import { DeepMap, FieldError, FieldValues, UseFormRegister } from 'react-hook-form';
import { Document } from 'mongoose';

export interface SelectivelyVisibleElementType {
  visibleOnClassName:
    | 'visibleOnNarrowerThanMobile'
    | 'visibleOnWiderThanMobile'
    | 'visibleOnNarrowerThanTablet'
    | 'visibleOnWiderThanTablet';
}

export interface AddingEntryType {
  topic: string;
  ideas: string[][];
}

export interface FetchedEntryType extends AddingEntryType {
  _id: number;
}

export interface FetchedEntryTypeWithDate extends FetchedEntryType {
  date: string;
}

export interface ListedEntryType extends FetchedEntryType {
  i: number;
}

export interface SingleIdeaType {
  id: number;
  label: string;
}

export interface FormNextTriggerType {
  goToNextField: () => void;
}

export interface FormFieldType extends SingleIdeaType, FormNextTriggerType {
  register: UseFormRegister<FieldValues>;
  errors: DeepMap<FieldValues, FieldError>;
}

export interface FormFooterType {
  ideaNumber: number;
}

export interface FormPrevButtonType extends FormFooterType {
  goToPrevField: () => void;
}

export interface FormNextButtonType extends FormFooterType, FormNextTriggerType {
  allIdeas: FormFieldsType;
}

export interface FormButtonsType extends FormPrevButtonType, FormNextButtonType {}

export type FormFieldsType = Array<SingleIdeaType>;
