'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Navbar, Typography } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import { navItems } from '@/config/navbaritem';

const IndustryIndex = () => {
  const industries =
    navItems.find((item) => item.title === 'Industries')?.subItems || [];
  const router = useRouter();

  return (
    <>
      <Navbar type="normal" />
      <div className="container mx-auto">
        <div className="w-full md:mb-80">
          <Breadcrumb Link1={{ title: 'Industries', href: '/industries' }} />
          <div className="mb-8">
            <Typography variant="h2" className="font-bold text-primary-blue">
              Industries
            </Typography>
          </div>

          <div className="m-10 grid h-96 grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <div
                key={'industry-item' + index}
                className="p-3 hover:bg-bluish-white"
              >
                <button
                  className="flex cursor-pointer items-start gap-4 transition-all"
                  onClick={() => router.push(industry.link)}
                >
                  <div className="text-bold mt-1 text-primary-blue">
                    {industry.listIcon ?? industry.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Typography
                      className="text-left text-lg font-bold text-primary-blue"
                      variant="h5"
                    >
                      {industry.title}
                    </Typography>
                    {industry.description && (
                      <Typography
                        className="text-left text-sm text-primary-blue"
                        variant="small"
                      >
                        {industry.description}
                      </Typography>
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustryIndex;
