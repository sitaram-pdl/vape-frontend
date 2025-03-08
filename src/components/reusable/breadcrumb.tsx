import { ChevronRight } from 'lucide-react';
import React from 'react';

import { Typography } from '@/components/reusable/typography';

interface BreadcrumbProps {
  Link1: { title: string; href: string };
  Link2?: { title: string; href: string };
  color?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  Link1,
  Link2,
  color = 'text-primary-blue',
}) => {
  return (
    <div className="mb-10 flex items-center gap-3">
      <Typography variant="a" className={color} href="/">
        Home
      </Typography>
      <ChevronRight size={16} className={color} />
      <Typography variant="a" className={color} href={Link1.href}>
        {Link1.title}
      </Typography>
      {Link2 && (
        <>
          <ChevronRight size={16} className={color} />
          <Typography variant="a" className={color} href={Link2.href}>
            {Link2.title}
          </Typography>
        </>
      )}
    </div>
  );
};

export default Breadcrumb;
