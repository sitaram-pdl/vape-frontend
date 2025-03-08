import React from 'react';

import { Typography } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import ImageCard from '@/components/reusable/image-card';

const listItems = [
  'Statutory Audits',
  'Internal Audits',
  'Donor Audits',
  'Procurement Audits',
  'Implementation and Compliance of NAS for NPOs',
  'Tax Reporting, Compliance and Planning',
  'Compliance with Value Added Tax Act',
  'Litigation Dispute Advisory',
];

const Development = () => {
  return (
    <>
      <div className="container">
        <div className="mx-auto  mt-16 w-full">
          <Breadcrumb
            Link1={{ title: 'Industries', href: '/industries' }}
            Link2={{
              title: 'Development Sector',
              href: '/industries/development',
            }}
          />
          <div className="mb-12">
            <Typography variant="h3" className="font-bold text-primary-blue">
              Development Sector
            </Typography>
          </div>

          <div className="flex w-full flex-col gap-4 md:flex-row">
            <div className="mb-8 w-full md:mb-8 md:w-1/2">
              <ImageCard
                src="/industry/DevelopmentSector.png"
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
                For Nepal, Development sector and International Agencies,
                including NGOs and INGOs, play a vital role in supporting
                communities, especially as government resources remain limited.
                Further, increased competitiveness, donor perceptions and a real
                demand for improved oversight has caused Development sector and
                International Agencies to call for the best financial service
                they can get.
              </Typography>

              <Typography
                className="mb-6 text-justify text-primary-blue"
                variant="p"
              >
                The professionals of SRP have consistently focused on the
                financial needs and demands of Nepal’s diverse Development
                sector and International Agencies. We recognize that entities’
                members, donors and stakeholders seek assurance of the integrity
                of financial information, clarity in reporting and transparency
                in disclosure.
              </Typography>
            </div>
          </div>

          <div className="pb-8">
            <Typography
              className="mb-4 text-justify text-primary-blue"
              variant="p"
            >
              For decades, our professionals have provided NGOs/INGOs with the
              highest level of audit, tax and advisory services such as:
            </Typography>

            <ul className="list-disc pl-6 text-primary-blue">
              {listItems.map((each, index) => (
                <li key={index}>
                  <Typography
                    className="text-justify text-primary-blue"
                    variant="p"
                  >
                    {each.toString()}
                  </Typography>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Development;
