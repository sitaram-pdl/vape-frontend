import React from 'react';

import { Typography } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import ImageCard from '@/components/reusable/image-card';

const Manufacturing = () => {
  return (
    <div className="container">
      <div className="mx-auto  mt-16 w-full">
        <Breadcrumb
          Link1={{ title: 'Industries', href: '/industries' }}
          Link2={{
            title: 'Manufacturing Industries',
            href: '/industries/manufacture',
          }}
        />
        <div className="mb-12">
          <Typography variant="h3" className="font-bold text-primary-blue">
            Manufacturing Industries
          </Typography>
        </div>

        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="mb-8 w-full md:mb-8 md:w-1/2">
            <ImageCard
              src="/industry/Manufacturing.png"
              alt="Training Image"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="mb-8 object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <Typography
              className="mb-6 text-justify text-primary-blue"
              variant="p"
            >
              Nepal’s manufacturing sector faces evolving regulations, supply
              chain challenges, and regional competition. The manufacturing
              industry is dynamic and highly competitive, requiring businesses
              to adapt to ever-changing market conditions, complex supply
              chains, fluctuating supply costs, constraints of landlocked
              economy, a shortage of skilled labor, competition from neighboring
              market and financial pressures. At S.R. Pandey & Co., Chartered
              Accountants, we have the experience necessary to help you
              transform these challenges into opportunities and to build a solid
              platform for future growth.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacturing;
