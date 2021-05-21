export interface ClassNameType {
  className?: string;
}

export interface LinkType extends ClassNameType {
  href: string;
  target?: string;
}

export interface ButtonType extends ClassNameType {
  onClick?: (event: any) => void;
  type?: 'button' | 'submit' | 'reset';
  tabIndex?: number;
}
