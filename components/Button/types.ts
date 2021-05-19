export interface ClassNameType {
  className?: string;
}

export interface LinkType extends ClassNameType {
  href: string;
  target?: string;
}

export interface ButtonType extends ClassNameType {
  type?: 'button' | 'submit' | 'reset';
}
