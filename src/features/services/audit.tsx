import React from 'react';

import { Navbar } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import ImageCard from '@/components/reusable/image-card';
import ListItem from '@/components/reusable/list-item';
import { Typography } from '@/components/reusable/typography';

const auditList = [
  'Regulatory Audit',
  'Risk based Internal Audit',
  'Donor Audit',
  'Fund Audit',
  'Tax Audit',
  'Compliance Audit',
  'Information System Audit',
  'Management Audit',
  'Revenue Audit',
  'Cost Audit',
  'Operation Audit',
  'Social Audit',
  'Project Certifications',
];

const otherList = [
  'NFRS/IFRS Implementation and Compliance',
  'Due Diligence Review',
  'Management Consultancy Service',
  'Agreed upon procedures',
  'Accounting Advisory Services',
  'Project Certifications',
  'Capital and Investment Certifications',
  'Capacity Assessment of Implementing Partners',
  'Micro Assessment',
  'Financial Projections',
];

const Audit = () => {
  return (
    <>
      <Navbar type="normal" />
      <div className="h-32"></div>
      <div className="container">
        <div className="mx-auto w-full">
          <Breadcrumb
            Link1={{ title: 'Services', href: '/services' }}
            Link2={{
              title: 'Audit & Assurance',
              href: '/services/audit',
            }}
          />

          <div className="mb-12">
            <Typography variant="h3" className="font-bold text-primary-blue">
              Audit & Assurance
            </Typography>
          </div>

          <div>
            <div className="flex w-full flex-col gap-4 md:flex-row">
              <div className="mb-8 w-full md:mb-8 md:w-1/2">
                <ImageCard
                  src="/photos/audit.jpeg"
                  alt="Audit & Assurance"
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
                  We provide comprehensive audit and assurance services designed
                  to enhance transparency, strengthen stakeholder trust, and
                  ensure compliance with regulatory standards. Our experienced
                  team is committed to delivering the highest level of accuracy,
                  integrity, and value in every engagement. We follow globally
                  accepted audit procedures aligned with the Nepal Standards on
                  Auditing (NSA)/International Standards on Auditing (ISA) and
                  the professional codes prescribed by the Institute of
                  Chartered Accountants of Nepal. At the core of our services is
                  a steadfast commitment to delivering high-quality assurance.
                </Typography>
              </div>
            </div>

            <div className="mb-8 flex flex-col md:flex-row">
              <div className="w-full md:w-1/4">
                <Typography
                  className="mb-4 text-justify text-primary-blue"
                  variant="p"
                >
                  Audit Services
                </Typography>
                {auditList.map((each, index) => (
                  <ListItem key={index} item={each} />
                ))}
              </div>

              <div className="mt-8  md:mt-0">
                <Typography
                  className="mb-4 text-justify text-primary-blue"
                  variant="p"
                >
                  Other than auditing services, we provide the following
                  additional quality services as well.
                </Typography>
                {otherList.map((each, index) => (
                  <ListItem key={index} item={each} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Audit;
