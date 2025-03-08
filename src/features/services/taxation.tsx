import React from 'react';

import { Navbar } from '@/components/reusable';
import AccordionDemo from '@/components/reusable/accordion';
import Breadcrumb from '@/components/reusable/breadcrumb';
import ImageCard from '@/components/reusable/image-card';
import ListItem from '@/components/reusable/list-item';
import { Typography } from '@/components/reusable/typography';

const taxationList = [
  'Tax Planning and Strategy',
  'Tax Policy Development',
  'Tax Compliance & Reporting',
  'Cross-Border Tax Advisory',
  'Transfer Pricing Services',
  'Tax Dispute Resolution',
  'Mergers & Acquisitions Tax Advisory',
];

const data = [
  {
    trigger: 'Acts',
    links: [
      { url: '#', name: 'Companies Act, 2063' },
      { url: '#', name: 'Securities Act, 2063' },
      { url: '#', name: 'Bank and Financial Instituitions Act, 2073' },
      { url: '#', name: 'Nepal Rastra Bank Act, 2058' },
      { url: '#', name: 'Industrial Enterprise Act, 2076' },
      { url: '#', name: 'Public Procurement Act, 2063' },
      { url: '#', name: 'Cooperative Act, 2063' },
      {
        url: '#',
        name: 'Foreign Investment and Technology Transfer Act (FITTA) Act, 2075',
      },
      { url: '#', name: 'Labour Act, 2074' },
      { url: '#', name: 'Insolvency Act, 2063' },
      { url: '#', name: 'Electronic Transactions Act, 2063' },
      { url: '#', name: 'Anti-Money Laundering (AML) Act, 2064' },
      { url: '#', name: 'Insurance Act, 2079' },
      { url: '#', name: 'Arbitration Act, 2055' },
      { url: '#', name: 'Banking Offence and Punishment Act, 2064' },
      { url: '#', name: 'Financial Intermediary Act, 2055' },
      { url: '#', name: 'International Financial Transaction Act, 2054' },
      { url: '#', name: 'Foreign Exchange Act, 2020' },
      { url: '#', name: 'Income Tax Act, 2058' },
      { url: '#', name: 'Value Added Tax Act, 2052' },
      { url: '#', name: 'Excise Duty Act, 2058' },
    ],
  },
  {
    trigger: 'Tax Facilities',
    links: [
      { url: '#', name: 'Income Tax' },
      { url: '#', name: 'Value Added Tax' },
      { url: '#', name: 'Excise Duty' },
      { url: '#', name: 'Custom Duty' },
      { url: '#', name: 'Digital Service Tax' },
      { url: '#', name: 'Double Taxation Avoidance Agreement' },
      { url: '#', name: 'Transfer Pricing' },
      { url: '#', name: 'Advance Tax' },
      { url: '#', name: 'Tax Deducted at Source (TDS)' },
      { url: '#', name: 'Infrastructure Development Tax' },
      { url: '#', name: 'Health Risk Tax' },
      { url: '#', name: 'Education Service Fees' },
      { url: '#', name: 'Green Tax' },
    ],
  },
  {
    trigger: 'Regulatory Standards and Guidelines',
    links: [
      { url: '#', name: 'Nepal Financial Reporting Standards (NFRS)' },
      { url: '#', name: 'Nepal Standards on Auditing (NSA)' },
      { url: '#', name: 'Inland Revenue Department (IRD) Guidelines' },
      { url: '#', name: 'Nepal Rastra Bank Directives' },
      { url: '#', name: 'Nepal Insurance Authority Guidelines' },
      { url: '#', name: 'Budget Amendments' },
    ],
  },
];

const Taxation = () => {
  return (
    <>
      <Navbar type="normal" />
      <div className="h-32"></div>
      <div className="container">
        <div className="mx-auto  w-full">
          <Breadcrumb
            Link1={{ title: 'Services', href: '/services' }}
            Link2={{
              title: 'Taxation Consultancy Services',
              href: '/services/taxation',
            }}
          />

          <div className="mb-12">
            <Typography variant="h3" className="font-bold text-primary-blue">
              Taxation Consultancy Services
            </Typography>
          </div>

          <div>
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="mb-8 w-full md:mb-8 md:w-1/2">
                <ImageCard
                  src="/photos/taxation.jpeg"
                  alt="Taxation Consultancy Services"
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="mb-8 object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <Typography
                  className="mb-12 text-justify text-primary-blue"
                  variant="p"
                >
                  With a strong foundation in taxation, shaped by our founding
                  partner`s extensive involvement as a Member of the High-level
                  Tax System Review Commission, IRD and Member of the Expert
                  Committee, IRD, Ministry of Finance and with our experience of
                  31 years, the firm offers unparalleled expertise in tax
                  advisory and policy development. <br /> We specialize in
                  helping businesses adhere the complexities of local and
                  international tax regulations, resolve tax disputes, and
                  develop effective tax strategies that supports growth while
                  ensuring compliance. If you are dealing with contentious tax
                  issues, need assistance with policy development, or seek
                  greater transparency in your tax operations, our team of
                  experts is here to help.
                </Typography>
              </div>
            </div>

            <div className="mb-12">
              <Typography
                className="mb-4 text-justify font-semibold text-primary-blue"
                variant="p"
              >
                Our Tax Consulting Expertise on:
              </Typography>
              {taxationList.map((each, index) => (
                <ListItem key={index} item={each} />
              ))}
            </div>

            <div>
              <Typography
                className="mb-4 text-justify font-bold text-primary-blue"
                variant="h4"
              >
                Others
              </Typography>
              <AccordionDemo data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Taxation;
