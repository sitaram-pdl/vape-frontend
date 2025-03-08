'use client';
import { useRouter } from 'next/navigation';
import { ReactNode, Suspense, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { Spinner } from '@/components/ui/spinner';
import { useAuthCookies } from '@/lib/auth-helper';

import AuthLayout from './_component/layout';

const AuthLayoutWrapper = ({ children }: { children: ReactNode }) => {
  const { isUserLoggedIn } = useAuthCookies();

  const authorized = isUserLoggedIn();

  const router = useRouter();

  useEffect(() => {
    if (authorized) {
      router.replace('/auth/dashboard');
    }
  }, [authorized, router]);

  return (
    <Suspense
      fallback={
        <div className="flex size-full items-center justify-center">
          <Spinner size="xl" />
        </div>
      }
    >
      <ErrorBoundary fallback={<div>Something went wrong!</div>}>
        <AuthLayout>{children}</AuthLayout>
      </ErrorBoundary>
    </Suspense>
  );
};

export default AuthLayoutWrapper;
