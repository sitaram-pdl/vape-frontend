import React from 'react';

import { Navbar } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import ImageCard from '@/components/reusable/image-card';
import { Typography } from '@/components/reusable/typography';

const serviceSector = () => {
  return (
    <>
      <Navbar type="normal" />
      <div className="h-32"></div>
      <div className="container">
        <div className="mx-auto  mt-16 w-full ">
          <div className="mb-10">
            <Breadcrumb
              Link1={{ title: 'Industries', href: '/industries' }}
              Link2={{
                title: 'Service Sectors',
                href: '/industries/service-sectors',
              }}
            />
          </div>
          <div className="mb-12">
            <Typography variant="h3" className="font-bold text-primary-blue">
              Service Sectors
            </Typography>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="mb-8 w-full md:mb-8 md:w-1/2">
              <ImageCard
                src="/industry/services.png"
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
                The service sector is increasingly recognized as the backbone of
                modern economies, providing essential services that drive both
                business growth and societal well-being. The growing service
                sector presents evolving financial and regulatory challenges
                requiring solutions to ensure sustainable and efficient
                operations. Our expertise in audit, tax advisory, Financial
                Restructuring and business consulting helps organizations
                effectively manage challenges and seize opportunities in this
                ever-evolving industry.
              </Typography>
              <Typography
                className="mb-4 text-justify text-primary-blue"
                variant="p"
              >
                We offer comprehensive solutions designed to optimize
                performance and add long-term value to a wide range of service
                industries, including but not limited to:
              </Typography>
              <Typography
                className="mb-12 text-justify text-primary-blue"
                variant="p"
              >
                <ul className="list-inside list-disc">
                  <li>Health Care</li>
                  <li>Educational entities</li>
                  <li>Hospitality Industries</li>
                </ul>
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default serviceSector;
