import React from 'react';

import { Typography } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import ImageCard from '@/components/reusable/image-card';

const FintechPage = () => {
  return (
    <div className="container">
      <div className="mx-auto  mt-16 w-full">
        <Breadcrumb
          Link1={{ title: 'Industries', href: '/industries' }}
          Link2={{
            title: 'Fintech',
            href: '/industries/fintech',
          }}
        />
        <div className="mb-12">
          <Typography variant="h3" className="font-bold text-primary-blue">
            Fintech
          </Typography>
        </div>

        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="mb-8 w-full md:mb-8 md:w-1/2">
            <ImageCard
              src="/industry/Fintech.png"
              alt="Fintech Industry Image"
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
              Fintech involves the application of technology to transform and
              streamline financial services, including digital payments,
              blockchain solutions, lending platforms, and automated financial
              advice. At S.R. Pandey & Co., we provide comprehensive audit and
              advisory services to businesses in the fintech sector, ensuring
              regulatory compliance, financial accuracy, and operational
              transparency.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FintechPage;
