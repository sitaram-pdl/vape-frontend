'use client';

import { ReactNode } from 'react';

import { SRPandeyLogo } from '@/components/svg';

type LayoutProps = {
  children: ReactNode;
};

const AuthLayout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-50 py-12 sm:px-6 lg:px-8">
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
          <div className="mb-6 sm:mx-auto sm:w-full sm:max-w-md">
            <SRPandeyLogo />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};
export default AuthLayout;
