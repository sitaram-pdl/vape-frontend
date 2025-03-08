import React from 'react';

import { Navbar } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import ImageCard from '@/components/reusable/image-card';
import { Typography } from '@/components/reusable/typography';

const trading = () => {
  return (
    <>
      <Navbar type="normal" />
      <div className="h-32"></div>
      <div className="container">
        <div className="mx-auto mt-16 w-full">
          <Breadcrumb
            Link1={{ title: 'Industries', href: '/industries' }}
            Link2={{
              title: 'Trading',
              href: '/industries/trading',
            }}
          />
          <div className="mb-12">
            <Typography variant="h3" className="font-bold text-primary-blue">
              Trading Entities
            </Typography>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="mb-8 w-full md:mb-8 md:w-1/2">
              <ImageCard
                src="/industry/trading.png"
                alt="Service Sectors"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 50vw"
                className="mb-8 object-cover"
              />
            </div>
            <div className="w-full md:w-1/2">
              <Typography
                className="mb-4 text-justify text-primary-blue"
                variant="p"
              >
                Trading companies play a vital role in the supply chain, dealing
                with diverse products for consumers, businesses, and government
                entities. As key intermediaries in production and distribution,
                maintaining efficiency in organization is essential for their
                success. We assist trading businesses in managing financial
                complexities, meeting regulatory requirements, and overcoming
                operational challenges. With our expertise in audit, tax
                advisory, litigation dispute advisory, financial advisory, and
                business consulting, we help streamline operations, improve
                financial efficiency, and adapt to the ever-changing trading
                environment.
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default trading;
