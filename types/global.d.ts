import { DeepMap, FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

export interface SelectivelyVisibleElementType {
  visibleOnClassName:
    | 'visibleOnNarrowerThanMobile'
    | 'visibleOnWiderThanMobile'
    | 'visibleOnNarrowerThanTablet'
    | 'visibleOnWiderThanTablet';
}

export interface MongoIdType {
  _id: string;
}

export interface EntryType {
  topic: string;
  ideas: string[][];
  date: string;
}

export type FetchedEntryType = MongoIdType & EntryType;

export type ListedEntryType = Omit<FetchedEntryType, 'date'> & {
  i: number;
};

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

export interface TopicType extends MongoIdType {
  name: string;
  level: 'easy' | 'normal' | 'hard';
}

export type FormButtonsType = FormPrevButtonType & FormNextButtonType;

export type FormFieldsType = SingleIdeaType[];
