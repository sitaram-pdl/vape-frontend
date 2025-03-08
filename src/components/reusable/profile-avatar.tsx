import React from 'react';

import { Typography } from './typography';

type ProfileAvatarProps = {
  name: string;
};

const getInitials = (name: string): string => {
  if (!name) return '';
  const words = name.split(' ').filter(Boolean);
  return words.length === 1
    ? words[0].charAt(0).toUpperCase()
    : words.map((word) => word.charAt(0).toUpperCase()).join('');
};

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({ name }) => {
  const initials = getInitials(name);

  return (
    <div className="flex items-center justify-center rounded-full bg-gray-200 p-3 text-lg font-bold text-white">
      <Typography className="text-primary-blue">{initials}</Typography>
    </div>
  );
};

export default ProfileAvatar;
