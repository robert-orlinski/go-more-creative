import { DeepMap, FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

export interface SelectivelyVisibleElementType {
  visibleOnClassName:
    | 'visibleOnNarrowerThanMobile'
    | 'visibleOnWiderThanMobile'
    | 'visibleOnNarrowerThanTablet'
    | 'visibleOnWiderThanTablet';
}

export interface SingleIdeaType {
  id: number;
  label: string;
}

export interface FormFieldType extends SingleIdeaType {
  register: UseFormRegister<FieldValues>;
  errors: DeepMap<FieldValues, FieldError>;
}

export interface FormFooterType {
  ideaNumber: number;
}

export interface FormPrevButtonType extends FormFooterType {
  goToPrevField: () => void;
}

export interface FormNextButtonType extends FormFooterType {
  goToNextField: () => void;
  allIdeas: FormFieldsType;
}

export interface FormButtonsType extends FormPrevButtonType, FormNextButtonType {}

export type FormFieldsType = Array<SingleIdeaType>;
