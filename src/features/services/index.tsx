'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

import { Navbar, Typography } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import { navItems } from '@/config/navbaritem';

const ServiceIndex = () => {
  const services =
    navItems.find((item) => item.title === 'Services')?.subItems || [];
  const router = useRouter();

  return (
    <>
      <Navbar type="normal" />
      <div className="container mx-auto mb-11 h-max">
        <div className="w-full md:mb-80">
          <Breadcrumb Link1={{ title: 'Services', href: '/services' }} />
          <div className="mb-8">
            <Typography variant="h2" className="font-bold text-primary-blue">
              Services
            </Typography>
          </div>

          <div className="grid grid-cols-1 gap-11 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={'service-item' + index}
                className="p-3 hover:bg-bluish-white"
              >
                <button
                  key={'service-item' + index}
                  className="flex cursor-pointer items-start gap-4 transition-all"
                  onClick={() => router.push(service.link)}
                >
                  <div className="text-bold mt-1 text-primary-blue">
                    {service.listIcon ?? service.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Typography
                      className="text-left text-lg font-bold text-primary-blue"
                      variant="h5"
                    >
                      {service.title}
                    </Typography>
                    {service.description && (
                      <Typography
                        className="text-left text-sm text-primary-blue"
                        variant="small"
                      >
                        {service.description}
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

export default ServiceIndex;
