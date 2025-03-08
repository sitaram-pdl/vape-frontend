'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Navbar, Typography } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import { navItems } from '@/config/navbaritem';

const AboutIndex = () => {
  const aboutusList =
    navItems.find((item) => item.title === 'About Us')?.subItems || [];
  const router = useRouter();

  return (
    <>
      <Navbar type="normal" />
      <div className="container mx-auto">
        <div className="w-full md:mb-80">
          <Breadcrumb Link1={{ title: 'About', href: '/aboutus' }} />
          <div className="mb-8">
            <Typography variant="h2" className="font-bold text-primary-blue">
              About
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
            {aboutusList.map((about, index) => (
              <div
                key={'about-item' + index}
                className="p-3 hover:bg-bluish-white"
              >
                <button
                  className="flex cursor-pointer items-start gap-4 transition-all"
                  onClick={() => router.push(about.link)}
                >
                  <div className="text-bold mt-1 text-primary-blue">
                    {about.listIcon ?? about.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Typography
                      className="text-left text-lg font-bold text-primary-blue"
                      variant="h5"
                    >
                      {about.title}
                    </Typography>
                    {about.description && (
                      <Typography
                        className="text-left text-sm text-primary-blue"
                        variant="small"
                      >
                        {about.description}
                      </Typography>
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8"></div>
        </div>
      </div>
    </>
  );
};

export default AboutIndex;
