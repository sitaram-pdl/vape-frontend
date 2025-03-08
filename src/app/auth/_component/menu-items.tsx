import {
  LayoutDashboard,
  BookOpen,
  FileImage,
  Users,
  Bell,
  Briefcase,
  Image as ImageIcon,
  User,
  FileText,
  Briefcase as BriefcaseIcon,
} from 'lucide-react';

export const menuItems = [
  {
    icon: <LayoutDashboard size={18} />,
    label: 'Dashboard',
    link: '/auth/dashboard',
  },
  { icon: <BookOpen size={18} />, label: 'Blogs', link: '/auth/blogs' },
  {
    icon: <FileImage size={18} />,
    label: 'Media Library',
    link: '/auth/media-library',
  },
  { icon: <Users size={18} />, label: 'Users', link: '/auth/users' },
  { icon: <Bell size={18} />, label: 'Notices', link: '/auth/notices' },
  {
    icon: <ImageIcon size={18} />,
    label: 'Galleries',
    link: '/auth/galleries',
  },
  {
    icon: <Briefcase size={18} />,
    label: 'Career',
    link: '/auth/career',
    hasDropdown: true,
    children: [
      {
        icon: <User size={16} />,
        label: 'Career Intern',
        link: '/auth/career/intern',
      },
      {
        icon: <FileText size={16} />,
        label: 'Career Article',
        link: '/auth/career/article',
      },
      {
        icon: <BriefcaseIcon size={16} />,
        label: 'Other Careers',
        link: '/auth/career/others',
      },
    ],
  },
];

export const getSelectedItem = (pathname: string) => {
  return (
    menuItems.find((item) => item.link && pathname.startsWith(item.link))
      ?.label || 'Dashboard'
  );
};

export const getSelectedItemFromChildren = (pathname: string) => {
  const matchedItem = menuItems
    .flatMap((item) => item.children || [])
    .find((child) => pathname.startsWith(child.link));

  return matchedItem?.label || 'Dashboard';
};
