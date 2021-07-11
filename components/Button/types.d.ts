import { TestIdType } from '../../types/global';

export interface ClassNameType {
  className?: string;
}

export interface LinkType extends ClassNameType {
  href: string;
  target?: string;
}

export interface ButtonType extends ClassNameType, TestIdType {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  tabIndex?: number;
}
