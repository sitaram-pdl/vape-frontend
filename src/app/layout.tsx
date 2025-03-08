import { Montserrat } from 'next/font/google'; // Importing font from Google Fonts
import { ReactNode } from 'react';

import { AppProvider } from '@/app/provider';
import { Toaster } from '@/components/reusable';
import { TooltipProvider } from '@/components/ui/tooltip';
import '@/styles/globals.css';

const montserrat = Montserrat({
  subsets: ['vietnamese'],
});
export const metadata = {
  title: 'S.R. Pandey & Co. ',
  description: 'S.R. Pandey & Co. pvt ltd',
};

const RootLayout = async ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <TooltipProvider>
          <AppProvider>
            {children}
            <Toaster position="bottom-right" />
          </AppProvider>
        </TooltipProvider>
      </body>
    </html>
  );
};

export default RootLayout;

export const dynamic = 'force-dynamic';
