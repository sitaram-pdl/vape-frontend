'use client';

import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

import '@/styles/emba.css';
import '@/styles/globals.css';
import Footer from '@/components/reusable/footer';

const LayoutWrapper = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className="relative">
      <div className="relative">{children}</div>
      {pathname !== '/login' && <Footer />}
    </div>
  );
};

export default LayoutWrapper;
