/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { ChevronDown } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';

import { Typography } from '@/components/reusable';
import useScreenSize from '@/hooks/use-screen-size';
import { cn } from '@/utils/cn';

import {
  getSelectedItem,
  getSelectedItemFromChildren,
  menuItems,
} from './menu-items';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();
  const router = useRouter();
  const screenWidth = useScreenSize();

  const [selected, setSelected] = useState(getSelectedItem(pathname));
  const [selectedSubItem, setSelectedSubItem] = useState(
    getSelectedItemFromChildren(pathname),
  );
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    setSelected(getSelectedItem(pathname));
  }, [pathname]);

  useEffect(() => {
    setSelectedSubItem(getSelectedItemFromChildren(pathname));
  }, [pathname]);

  useEffect(() => {
    if (screenWidth < 768) {
      setIsOpen(false);
      return;
    }
    setIsOpen(true);
  }, [screenWidth]);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div className="relative">
      <div
        className={cn(
          'h-screen overflow-y-scroll border-r border-gray-200 transition-all duration-300',
          isOpen ? 'w-60' : 'w-16',
        )}
      >
        <button className="p-4" onClick={() => setIsOpen(!isOpen)}>
          <Typography variant="small" className="font-bold text-primary-blue">
            {isOpen ? 'S.R. PANDEY & CO.' : 'S.R.'}
          </Typography>
        </button>

        <nav className="mt-10">
          {menuItems.map((item, index) => (
            <div key={index}>
              <button
                className={cn(
                  'w-full flex items-center px-4 py-2 text-primary-blue hover:bg-primary-blue hover:text-white',
                  selected === item.label ? 'bg-primary-blue text-white' : '',
                  selected === item.label && item.hasDropdown
                    ? 'bg-primary-blue/80'
                    : '',
                )}
                onClick={() =>
                  item.hasDropdown
                    ? toggleDropdown(item.label)
                    : router.push(item.link)
                }
              >
                <span className="mr-3">{item.icon}</span>

                <span className="flex-1 text-left text-sm">{item.label}</span>

                {item.hasDropdown && isOpen && (
                  <ChevronDown
                    size={16}
                    className={cn(
                      'transition-transform',
                      openDropdown === item.label && 'rotate-180',
                    )}
                  />
                )}
              </button>
              {item.hasDropdown && openDropdown === item.label && (
                <div className="">
                  {item.children?.map((child, childIndex) => (
                    <button
                      key={childIndex}
                      className={cn(
                        'w-full flex items-center px-4 py-2 text-primary-blue hover:bg-primary-blue hover:text-white',
                        selectedSubItem === child.label
                          ? 'bg-primary-blue text-white'
                          : '',
                      )}
                      onClick={() => router.push(child.link)}
                    >
                      <span className={cn(isOpen && 'mr-3 pl-4')}>
                        {child.icon}
                      </span>
                      {isOpen && <span className="text-sm">{child.label}</span>}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
