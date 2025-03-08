export const metadata = {
  title: 'S.R. Pandey & Co. | Home',
  description: 'S.R. Pandey & Co. Pvt Ltd',
};

import { ReactNode } from 'react';

import LayoutWrapper from './layout-wrapper';

const Layout = ({ children }: { children: ReactNode }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
