import React from 'react';

import { Typography } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import ImageCard from '@/components/reusable/image-card';

const TrainingSeminar = () => {
  return (
    <div className="container">
      <div className="mx-auto  mt-16 w-full">
        <Breadcrumb
          Link1={{ title: 'Services', href: '/services' }}
          Link2={{
            title: 'Training and Seminar',
            href: '/services/training-seminar',
          }}
        />
        <div className="mb-12">
          <Typography variant="h3" className="font-bold text-primary-blue">
            Training and Seminar
          </Typography>
        </div>

        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="mb-8 w-full md:mb-8 md:w-1/2">
            <ImageCard
              src="/photos/training.jpg"
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
              We have been actively providing various trainings designed for
              professionals, business and regulators to equip with practical
              skills in taxation, financial reporting, business structuring/
              restructuring, merger and acquisition, financial management and
              regulatory compliance with the goal of promoting financial
              expertise, ensuring smooth operations and long-term business
              success.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingSeminar;
