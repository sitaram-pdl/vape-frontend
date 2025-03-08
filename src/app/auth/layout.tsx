'use client';

import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

import '@/styles/globals.css';
import { useAuthCookies } from '@/lib/auth-helper';

import Navbar from './_component/navbar';
import Sidebar from './_component/sidebar';

const PrivateLayout = ({ children }: { children: ReactNode }) => {
  const { isUserLoggedIn } = useAuthCookies();

  const authorized = isUserLoggedIn();

  const router = useRouter();

  useEffect(() => {
    if (!authorized) {
      router.replace('/login');
    }
  }, [authorized, router]);

  return (
    <div className="flex h-screen w-screen">
      <Sidebar />
      <div className="flex h-screen w-full flex-col  overflow-y-scroll">
        <Navbar />
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default PrivateLayout;
