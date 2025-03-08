import { ReactNode } from 'react';

export type NavItem = {
  title: string;
  link?: string;
  subItems?: {
    title: string;
    icon?: ReactNode;
    description?: string;
    link: string;
  }[];
}[];
