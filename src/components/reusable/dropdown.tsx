'use client';

import * as React from 'react';

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

type MenuItem = {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onClick?: (checked: boolean) => void;
};

type UniversalDropdownProps = {
  items: MenuItem[];
  children?: React.ReactNode;
};

export function Dropdown({ items, children }: UniversalDropdownProps) {
  const handleCheckedChange = (label: string, checked: boolean) => {
    const item = items.find((item) => item.label === label);
    item?.onClick?.(checked);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {items.map(({ label, disabled, checked }) => (
          <DropdownMenuCheckboxItem
            key={label + checked?.toString()}
            checked={checked}
            onCheckedChange={(checked) => handleCheckedChange(label, checked)}
            disabled={disabled}
          >
            {label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
