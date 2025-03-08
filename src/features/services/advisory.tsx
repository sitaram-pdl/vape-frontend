import React from 'react';

import { Typography } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import ImageCard from '@/components/reusable/image-card';

const listItems = [
  {
    title: 'Standard Operating Procedure (SOP) Formulation and Compliance Test',
    subList: [
      'S.R. Pandey & Co., Chartered Accountants, provides specialized services in Standard Operating Procedure (SOP) Formulations in businesses to setup the Internal procedures of the organization and to help strength the structures and internal control systems.',
    ],
  },
  {
    title: 'Public Procurement Policy Compliances',
    subList: [
      'We help entities ensure that the procurements of the goods and services of both capital and revenue nature are in compliance with the requirements of the Public Procurement Policies and to ensure that such procurements are made at most economical option available.',
    ],
  },
  {
    title: 'Fraud Risk Assessment',
    subList: [
      'We help entities asses their internal structures and control systems so that loopholes and gaps in their systems may be detected on a timely manner and potential frauds may be avoided beforehand.',
    ],
  },
  {
    title: 'Fraud Investigations',
    subList: [
      'Our services include detailed investigations of fraud and misappropriations in any organizations for assessment of losses and identification of channels that have been put to use in such frauds as well as the individuals.',
    ],
  },
  {
    title: 'Litigation Dispute Advisory',
    subList: [
      'We offer advisory services to clients on legal disputes for quick and economical settlement of the disputes.',
    ],
  },
];

const Advisory = () => {
  return (
    <div className="container">
      <div className="mx-auto  mt-16 w-full ">
        <Breadcrumb
          Link1={{ title: 'Services', href: '/services' }}
          Link2={{
            title: 'Advisory Services',
            href: '/services/advisory',
          }}
        />
        <div className="mb-12">
          <Typography variant="h3" className="font-bold text-primary-blue">
            Advisory Services
          </Typography>
        </div>

        <div className="flex flex-col gap-4 md:flex-row">
          <div className="mb-8 w-full md:mb-8 md:w-1/2">
            <ImageCard
              src="/photos/advisory.jpeg"
              alt="Advisory Services"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="mb-8 object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <Typography
              className="mb-8 text-justify text-primary-blue md:mb-12"
              variant="p"
            >
              We believe that our growth is directly connected to the growth of
              our clients which drives our commitment to providing comprehensive
              advisory services to help businesses navigate changing priorities
              and achieve sustainable growth. To support our clients, we provide
              a wide range of advisory services which includes – Management
              Consulting, Risk Consulting, Compliance Review, Taxation
              Consulting, Strategic Planning and other consultancy as required
              by our clients.
            </Typography>
          </div>
        </div>

        <div className="pb-8">
          <Typography
            className="mb-8 text-justify text-primary-blue"
            variant="p"
          >
            Our advisory services include but are not limited to the following:
          </Typography>

          <ol className="bold-markers list-decimal space-y-4 text-gray-700">
            {listItems.map((each, index) => (
              <li key={index}>
                <Typography
                  className="mb-2 font-bold text-primary-blue"
                  variant="p"
                >
                  {' '}
                  {each.title}
                </Typography>
                <ol className="list-outside list-none text-primary-blue">
                  {each.subList.map((each2, index) => (
                    <li key={index}>
                      <Typography className="text-primary-blue" variant="p">
                        {each2}
                      </Typography>
                    </li>
                  ))}
                </ol>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Advisory;
