'use client';
import { ArrowLeft, Mail, Phone } from 'lucide-react';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';

import { Typography } from '@/components/reusable';
import { cn } from '@/utils/cn';

import HomeTeam from '../home/home-team';

import { teamMembersDetails } from './team-member-details';

function TeamProfile() {
  const { teamid } = useParams();

  const id = teamid;

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);
  const router = useRouter();

  const foundUser = teamMembersDetails.find(
    (member) => member.id === Number(id),
  );

  return (
    <div className="container mt-32">
      <div className="mx-auto mt-28  flex flex-col  gap-10 ">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="text-primary-blue" size={16} />
          <Typography className="text-primary-blue">Back</Typography>
        </button>
        <div className="flex flex-wrap gap-10">
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="size-[355px] bg-primary"
          >
            <Image
              src={foundUser?.img || ''}
              alt={foundUser?.name || 'hello'}
              width={355}
              height={355}
              className={cn(
                'w-full h-full object-cover transition-transform duration-300 ease-in-out',
                !isHovered ? 'translate-x-2 -translate-y-2' : '',
              )}
            />
          </div>
          <div className="flex min-w-[250px] flex-1 flex-col gap-3">
            <div className="w-fit">
              <Typography
                variant="h3"
                className={cn(
                  'font-bold text-primary-blue underline  underline-offset-4',
                  isHovered ? 'decoration-primary' : 'decoration-transparent',
                )}
              >
                {foundUser?.name}
              </Typography>
            </div>

            <Typography variant="h5" className="font-bold text-text-body">
              {foundUser?.position}
            </Typography>

            <button
              className="flex items-center gap-2"
              onClick={() =>
                (window.location.href = `mailto:${foundUser?.email}`)
              }
            >
              <Mail size={18} className="text-primary-blue" />
              <Typography className="text-primary-blue">
                {foundUser?.email}
              </Typography>
            </button>

            <button
              className="flex items-center gap-2"
              onClick={() => (window.location.href = `tel:${foundUser?.phone}`)}
            >
              <Phone size={18} className="text-primary-blue" />
              <Typography className="text-primary-blue">
                {foundUser?.phone}
              </Typography>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {!!foundUser?.bio && (
            <Typography className="text-text-body">{foundUser?.bio}</Typography>
          )}

          <div className="flex flex-col gap-4">
            {!!foundUser?.content && (
              <Typography className="font-bold text-text-body">
                Areas of Expertise
              </Typography>
            )}
            <Typography className="ml-4 list-disc text-text-body">
              {foundUser?.expertise?.map((item, index) => (
                <small key={index}>{item}</small>
              ))}
            </Typography>
          </div>

          <div className="flex flex-col gap-4">
            {foundUser?.content && (
              <Typography className="font-bold text-text-body">
                Industry Expertise
              </Typography>
            )}
            <Typography className="ml-4 list-disc text-text-body">
              {foundUser?.industry_expertise?.map((item, index) => (
                <small key={index}>{item}</small>
              ))}
            </Typography>
          </div>
        </div>
      </div>
      <HomeTeam />
    </div>
  );
}

export default TeamProfile;
