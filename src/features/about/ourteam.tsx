'use client';
import { useEffect, useState } from 'react';

import { Typography } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import TeamCard from '@/components/reusable/team/team-card';

function OurTeam() {
  const [isLaptop, setIsLaptop] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkDevice = () => {
      setIsLaptop(window.matchMedia('(min-width: 768px)').matches);
    };

    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);

  const teamMembers = [
    {
      name: 'Sudarsan Raj Pandey',
      position: 'Founding Partner',
      image: '/team-imgs/sudarshan-raj-pandey.png',
      id: 1,
    },
    {
      name: 'Bhaskar Singh Lala',
      position: 'Partner',
      image: '/team-imgs/bhaskar.png',
      id: 2,
    },
    {
      name: 'Rajesh Poudel',
      position: 'Partner',
      image: '/team-imgs/rajesh-poudel.png',
      id: 3,
    },
    {
      name: 'Arun Raut',
      position: 'Partner',
      image: '/team-imgs/arun.png',
      id: 4,
    },
    {
      name: 'Laxmi Prasad Luintel',
      position: 'Partner',
      image: '/team-imgs/laxmi.png',
      id: 5,
    },
    {
      name: 'Sandesh Ratna Shakya',
      position: 'Partner',
      image: '/team-imgs/sandesh-ratna.png',
      id: 6,
    },
  ];

  const teamMembers1 = [
    {
      name: 'Rasmila Maharjan',
      position: 'Manager',
      image: '/team-imgs/rasmila.png',
      id: 7,
    },
    {
      name: 'Astha Bista',
      position: 'Manager',
      image: '/team-imgs/astha.png',
      id: 8,
    },
    {
      name: 'Santosh Sah',
      position: 'Partner',
      image: '/team-imgs/santosh-shah.png',
      id: 9,
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4">
      <div className="mx-auto mt-28">
        <Breadcrumb
          Link1={{ title: 'About Us', href: '/aboutus' }}
          Link2={{ title: 'Our Leadership', href: '/aboutus/ourteam' }}
        />
        <div className="flex flex-col gap-6 md:gap-14">
          <Typography
            variant="h3"
            className="w-full text-left font-bold text-primary-blue"
          >
            Our Leadership
          </Typography>
          <div className="h-px w-full bg-primary-blue/25" />

          <Typography
            variant="h4"
            className="w-full text-left font-bold text-primary-blue"
          >
            Founding Partner
          </Typography>
          <div className="grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 md:grid-cols-3">
            {teamMembers.map((item, index) => (
              <TeamCard
                size={isLaptop ? 216 : 167}
                key={`Founding-team-${index}`}
                name={item.name}
                positionInTeam={item.position}
                image={item.image}
                id={item.id}
              />
            ))}
          </div>
          <div className="h-px w-full bg-primary-blue/25" />

          <Typography
            variant="h4"
            className="w-full text-left  font-bold text-primary-blue"
          >
            Management Team
          </Typography>
          <div className="grid grid-cols-1 place-items-center gap-10 sm:grid-cols-2 md:grid-cols-3">
            {teamMembers1.map((item, index) => (
              <TeamCard
                size={isLaptop ? 216 : 167}
                key={`management-team-${index}`}
                name={item.name}
                positionInTeam={item.position}
                image={item.image}
                id={item.id}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
