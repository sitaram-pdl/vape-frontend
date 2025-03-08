'use client';
import { Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import IdCardIcon from '@/components/svg/id-card';
import { cn } from '@/utils/cn';

import { Typography } from '../typography';

type TeamCardProps = {
  name?: string;
  positionInTeam?: string;
  size?: number;
  image: string;
  id?: number;
  email?: string;
  phone?: string;
};

function TeamCard({
  name = 'Sudarshan Raj Pandey',
  positionInTeam = 'Tax Director',
  size = 167,
  image = '',
  id,
  email = '',
  phone = '',
}: TeamCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const router = useRouter();
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex h-full w-fit flex-col gap-3 text-left"
    >
      <button onClick={() => router.push(`/aboutus/ourteam/${id}`)}>
        <div style={{ width: size, height: size }} className="bg-primary">
          <Image
            src={image}
            alt="Example Image"
            layout="fit"
            width={0}
            height={0}
            sizes="100vw"
            className={cn(
              'h-full w-full transition-all duration-300 ease-in-out',
              !isHovered ? 'translate-x-1 -translate-y-1' : '',
            )}
          />
        </div>
        <Typography
          className={cn(
            'mt-3 min-h-12 font-bold text-primary-blue underline  underline-offset-4 decoration-2 w-full text-left',
            isHovered ? 'decoration-primary' : 'decoration-transparent',
          )}
        >
          {name}
        </Typography>
      </button>
      <Typography className="text-primary-blue">{positionInTeam}</Typography>

      <div className="flex w-full bg-bluish-white ">
        <button
          className="group flex flex-1 cursor-pointer justify-center py-2 hover:bg-primary-blue"
          onClick={() => (window.location.href = `mailto:${email}`)}
        >
          <Mail
            size={20}
            className="cursor-pointer text-text-body  group-hover:text-white"
          />
        </button>

        <button
          className="group flex flex-1 cursor-pointer justify-center py-2 hover:bg-primary-blue"
          onClick={() => (window.location.href = `tel:${phone}`)}
        >
          <Phone
            size={18}
            className="mt-[2px] cursor-pointer  text-text-body group-hover:text-white"
          />
        </button>

        <button
          className="group flex flex-1 cursor-pointer justify-center py-2 hover:bg-primary-blue"
          onClick={() => router.push(`/aboutus/ourteam/${id}`)}
        >
          <IdCardIcon className=" text-text-body group-hover:text-white " />
        </button>
      </div>
    </div>
  );
}

export default TeamCard;
