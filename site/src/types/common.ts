import { IconProp } from '@fortawesome/fontawesome-svg-core';

export interface SubLinkType {
  external: boolean;
  id: string;
  label: string;
  link: string;
}

export interface NavItemType {
  external: boolean;
  id: string;
  label: string;
  link: string;
  order: number;
  subLinks?: SubLinkType[];
}

export interface Button {
  classes?: string[];
  disabled?: boolean;
  download?: boolean;
  endIcon?: IconProp;
  href?: string;
  label: string;
  link?: string;
  onChange?: any;
  onClick?: any;
  size?: string;
  startIcon?: IconProp;
  theme?: string;
  disableTargetBlank?: boolean;
  submissionInProgress?: boolean;
  pill?: boolean;
}

export interface BeliefCardType {
    title: string;
    subTitle: string;
    image: any;
    description: string | JSX.Element;
}
