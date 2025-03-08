import { ArrowRight } from 'lucide-react';
import React from 'react';

import { Typography } from '@/components/reusable/typography';
import ChatIcon from '@/components/svg/chat';
import { Button } from '@/components/ui/button';

type ChatboxProps = {
  classNames?: string;
};

function Chatbox({ classNames }: ChatboxProps) {
  return (
    <div
      className={`flex justify-between bg-light-blue ${classNames} items-center gap-6 p-6`}
    >
      <ChatIcon />
      <div className="flex flex-col gap-4 lg:flex-row">
        <Typography variant="h5" className="font-bold">
          Whatever your question our global team will point you in the right
          direction
        </Typography>
        <Button className="w-fit">
          <div className="flex items-center gap-2">
            Start the conversation <ArrowRight size={16} />{' '}
          </div>
        </Button>
      </div>
    </div>
  );
}

export default Chatbox;
