import React from 'react';

import { Navbar } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import ImageCard from '@/components/reusable/image-card';
import ListItem from '@/components/reusable/list-item';
import { Typography } from '@/components/reusable/typography';

const sectors = [
  {
    id: 1,
    title: 'Banking',
    image: '/industry/bank.png',
    alt: 'Banking',
    description:
      'The Banking and Financial Institutions sector is one of the most dynamic and regulated industries, requiring expertise in compliance, risk management, and financial transparency. We specialize in providing comprehensive audit, assurance, compliance, and advisory services tailored to the needs of banks, financial institutions, and non-banking financial entities. With a proven track record of working with top-tier financial institutions, our firm ensures compliance with evolving regulations while enhancing operational efficiency and growth strategies.',
  },
  {
    id: 2,
    title: 'Insurance',
    image: '/industry/insurance.png',
    alt: 'Insurance',
    description:
      'Nepal’s insurance industry is transforming rapidly, with new regulations, higher capital requirements and extensive reporting framework. As the sector evolves, businesses must adapt to changing rules and increasing competition. We provide expert guidance to help insurance companies manage regulatory compliance, financial planning, and operational challenges. With deep industry experience, we help insurance companies simplify operations, manage risks effectively, and improve overall performance. The Insurance sector, both life and non-life, is one of the most dynamic and regulated industries, requiring expertise in compliance, risk management, and financial transparency. We specialize in providing comprehensive audit, assurance, compliance, and advisory services tailored to the needs of Insurance Companies.',
  },
];

const listRender = [
  ' Statutory Audits',
  'Risk based Internal Audit',
  'Revenue Audit',
  'NFRS Convergence and Compliance',
  'Concurrent Audits',
  'Merger and Acquisitions',
  ' Due Diligence Review',
  'Project Certification Assignments',
  'Fixed Assets Codification and Verification',
  'Due Diligence of Borrowers',
  'Tax and Financial Consultancy Services',
  'Financial Irregularity Investigation',
];

const Bank = () => {
  return (
    <>
      <Navbar type="normal" />
      <div className="h-32"></div>
      <div className="container">
        <div className="mx-auto  mt-16 w-full ">
          <Breadcrumb
            Link1={{ title: 'Industries', href: '/industries' }}
            Link2={{
              title: 'Banks and Financial Institutions',
              href: '/industries/bank',
            }}
          />
          <div className="mb-14">
            <Typography variant="h3" className="font-bold text-primary-blue">
              Banking and Insurance
            </Typography>
          </div>

          {sectors.map((each) => (
            <div
              className="mb-16 flex flex-col-reverse gap-4 md:mb-20 md:flex-row"
              key={each.id}
            >
              <div className="basis-1/2">
                <ImageCard
                  src={each.image}
                  alt={each.alt}
                  width={600}
                  height={400}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="mb-8 object-cover"
                />
              </div>
              <div className="basis-1/2">
                <div className="flex flex-col items-start gap-7">
                  <Typography
                    variant="h4"
                    className="font-bold text-primary-blue"
                  >
                    {each.title}
                  </Typography>
                  <Typography
                    className="mb-4 text-justify text-primary-blue"
                    variant="p"
                  >
                    {each.description}
                  </Typography>
                </div>
              </div>
            </div>
          ))}

          <div className="pb-12">
            <Typography
              className="mb-6 text-justify text-primary-blue"
              variant="p"
            >
              We have successfully collaborated with nearly all the leading
              entities in these sectors, providing a comprehensive range of
              essential services, including:
            </Typography>
            {listRender.map((each, index) => (
              <ListItem key={index} item={each} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Bank;
