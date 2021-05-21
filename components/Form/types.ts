export type FormFieldsType = Array<{ id: number; label: string }>;

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
