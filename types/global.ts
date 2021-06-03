import { DeepMap, FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

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

export interface AddedEntryType extends AddingEntryType {
  date: string;
  _id: number;
}

export interface ListedEntryType extends AddedEntryType {
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
