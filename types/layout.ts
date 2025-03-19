export interface NavItem {
  label: string;
  link?: string;
  subItems?: SubNavItem[];
}

export interface SubNavItem {
  label: string;
  link: string;
}
