import React from 'react';

import { Typography } from '@/components/reusable/typography';
interface ListItemProps {
  item: string;
}

const ListItem: React.FC<ListItemProps> = ({ item }) => {
  return (
    <div className="mb-1 flex items-center gap-3">
      <div className="size-1 rounded-full bg-primary-blue"></div>
      <Typography className=" text-justify text-primary-blue" variant="p">
        {item}
      </Typography>
    </div>
  );
};

export default ListItem;
