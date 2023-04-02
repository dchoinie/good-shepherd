import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { ReactNode } from 'react';

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
  textColor?: string;
  hoverTextColor?: string;
  subBgColor?: string;
}

export interface Button {
  classes?: string[];
  disabled?: boolean;
  download?: boolean;
  endIcon?: IconProp | IconDefinition;
  href?: string;
  label: string;
  link?: string;
  onChange?: any;
  onClick?: any;
  size?: string;
  startIcon?: IconProp | IconDefinition;
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

export interface LectionaryType {
  date: ReactNode;
  epistle: string;
  epistleLink: string;
  holyGospel: string;
  holyGospelLink: string;
  liturgicalColor: string;
  oldTestamentLink: string;
  oldTestamentReading: string;
  sundayName: string;
}
