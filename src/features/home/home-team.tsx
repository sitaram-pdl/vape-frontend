import { ArrowUpRight } from 'lucide-react';
import { useParams, useRouter } from 'next/navigation';

import { Typography } from '@/components/reusable';
import TeamCard from '@/components/reusable/team/team-card';

function HomeTeam() {
  const router = useRouter();

  const param = useParams();

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
    {
      name: 'Rasmila Maharjan',
      position: 'Manager',
      image: '/team-imgs/rasmila.png',
      id: 7,
    },
  ];

  return (
    <div className="py-20">
      <div className="container overflow-hidden">
        <div className="flex justify-between">
          <Typography variant="h4" className="font-bold text-primary-blue">
            Meet Other Partners
          </Typography>
          <button
            onClick={() => router.push('/aboutus/ourteam')}
            className="hidden items-center gap-4 sm:flex"
          >
            <Typography variant="p">Meet our leaders</Typography>
            <div className="rounded-full bg-primary p-2">
              <ArrowUpRight size={18} />
            </div>
          </button>
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="mt-10 grid w-fit grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {teamMembers
              .filter((item) => item.id != Number(`${param.teamid}`))
              .map((item, index) => (
                <TeamCard
                  key={index}
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

export default HomeTeam;
