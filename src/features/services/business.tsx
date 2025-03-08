import React from 'react';

import { Typography } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import ImageCard from '@/components/reusable/image-card';

const listItems = [
  {
    title: 'Business Registration',
    sublist: [
      'We assist in business setup by managing registrations, approvals, and compliance with regulatory requirements.',
    ],
  },
  {
    title: 'Foreign Direct Investment (FDI) Approval',
    sublist: [
      'We simplify the FDI process in Nepal by facilitating due diligence and securing approvals for company registration and banking needs.',
    ],
  },
  {
    title: 'Financial Consulting and Bookkeeping',
    sublist: [
      'Our expertise ensures accurate bookkeeping and compliance with accounting standards and legal requirements.',
    ],
  },
  {
    title: 'Cost Accounting',
    sublist: [
      'We provide Cost accounting services to help businesses track, analyze, and control costs to improve profitability and efficiency.',
    ],
  },
  {
    title: 'HR Management & Payroll Processing',
    sublist: [
      'We offer complete HR solutions, including recruitment, payroll management, and regulatory filings.',
    ],
  },
  {
    title: 'Corporate Legal Compliance and Reporting',
    sublist: [
      'We handle periodic legal reporting, return filings, and compliance, ensuring your business meets all regulatory obligations.',
    ],
  },
];

const Business = () => {
  return (
    <div className="container">
      <div className="mx-auto  mt-16 w-full ">
        <Breadcrumb
          Link1={{ title: 'Services', href: '/services' }}
          Link2={{
            title: 'Business Support and Outsouricng',
            href: '/services/business',
          }}
        />
        <div className="mb-12">
          <Typography variant="h3" className="font-bold text-primary-blue">
            Business Support and Outsourcing
          </Typography>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="mb-8 w-full md:mb-8 md:w-1/2">
            <ImageCard
              src="/photos/business.jpeg"
              alt="Bussiness Support and Outsourcing"
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
            We provide following Business Support and Outsourcing Services:
          </Typography>

          <ol className="bold-markers list-decimal space-y-4  text-gray-700">
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
                  {each.sublist.map((each2, index) => (
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

export default Business;
