'use client';

import { User } from '@/api';

export function useAuthCookies() {
  const loginHelper = (user: User, token: string) => {
    localStorage.setItem('authToken', token);
    localStorage.setItem('user', JSON.stringify(user));
  };

  const logoutHelper = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
  };

  const isUserLoggedIn = () => {
    if (typeof window !== 'undefined') {
      return !!localStorage.getItem('authToken');
    }
    return false;
  };
  return {
    loginHelper,
    logoutHelper,
    isUserLoggedIn,
  };
}
