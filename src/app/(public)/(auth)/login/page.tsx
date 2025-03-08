'use client';
import { useRouter } from 'next/navigation';

import { successToast } from '@/components/reusable';
import { LoginForm } from '@/features/auth/login/login';

const LoginPage = () => {
  const router = useRouter();

  const onSuccess = () => {
    router.replace(`/auth/dashboard`);
    successToast('login successful');
  };

  return <LoginForm onSuccess={onSuccess} />;
};

export default LoginPage;
