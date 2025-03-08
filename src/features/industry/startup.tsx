import React from 'react';

import { Typography } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import ImageCard from '@/components/reusable/image-card';

const StartUpPage = () => {
  return (
    <div className="container">
      <div className="mx-auto  mt-16 w-full">
        <Breadcrumb
          Link1={{ title: 'Industries', href: '/industries' }}
          Link2={{
            title: 'Startups',
            href: '/industries/startup',
          }}
        />
        <div className="mb-12">
          <Typography variant="h3" className="font-bold text-primary-blue">
            Startups
          </Typography>
        </div>

        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="mb-8 w-full md:mb-8 md:w-1/2">
            <ImageCard
              src="/industry/StartUp.png"
              alt="Startup Image"
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
              A startup is a newly established company focused on developing and
              scaling innovative products or services in an uncertain market. At
              S.R. Pandey & Co., we offer specialized audit services tailored to
              the unique needs of startups. We understand the challenges they
              face, including rapid growth, evolving business models, and
              meeting investor expectations. Our expertise ensures accurate
              financial reporting, regulatory compliance, and strategic insights
              to support their sustainable growth and long-term success.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartUpPage;
