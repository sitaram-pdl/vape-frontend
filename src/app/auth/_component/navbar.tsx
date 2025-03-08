'use client';
import { LogOut } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';

import { Typography } from '@/components/reusable';
import ProfileAvatar from '@/components/reusable/profile-avatar';
import { useClickOutside } from '@/hooks/use-click-outside';
import { useAuthCookies } from '@/lib/auth-helper';

import { getSelectedItem } from './menu-items';

export default function Navbar(): JSX.Element {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const { logoutHelper } = useAuthCookies();

  const router = useRouter();

  const pathname = usePathname();

  const modalRef = useClickOutside<HTMLDivElement>(() =>
    setDropdownOpen(false),
  );

  const handleLogout = () => {
    logoutHelper();
    router.replace('/login');
  };

  return (
    <div className="flex h-[64px] w-full items-center justify-between border-b border-black/15 bg-white p-4 shadow-sm">
      <Typography variant="h5" className="font-semibold text-primary-blue">
        {getSelectedItem(pathname)}
      </Typography>
      <div ref={modalRef} className="relative">
        {dropdownOpen && (
          <div className="absolute right-0 top-full mt-2 w-48 rounded-lg border bg-white shadow-lg">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-2 p-2 hover:bg-gray-100"
            >
              <LogOut size={20} /> Logout
            </button>
          </div>
        )}
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="flex items-center gap-2"
        >
          <div>Sitaram Poudel</div>

          <ProfileAvatar name="Sitaram Poudel" />
        </button>
      </div>
    </div>
  );
}
