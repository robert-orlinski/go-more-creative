export interface ButtonType {
  href: string;
  target?: string;
}

export interface MainWrapperType {
  theme: 'left' | 'center';
}

export interface HamburgerType {
  onClick: () => void;
  isActive: boolean;
}

export interface SelectivelyVisibleElementType {
  visibleOnClassName:
    | 'visibleOnNarrowerThanMobile'
    | 'visibleOnWiderThanMobile'
    | 'visibleOnNarrowerThanTablet'
    | 'visibleOnWiderThanTablet';
}

export interface NavListType {
  isVisible: boolean;
}
