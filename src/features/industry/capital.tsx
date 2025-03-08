import React from 'react';

import { Navbar } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import ImageCard from '@/components/reusable/image-card';
import { Typography } from '@/components/reusable/typography';

const Capital = () => {
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
                title: 'Capital Market/Private Equity/Venture Capital',
                href: '/industries/capital',
              }}
            />
          </div>
          <div className="mb-12">
            <Typography variant="h3" className="font-bold text-primary-blue">
              Capital Market/Private Equity/Venture Capital
            </Typography>
          </div>
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="mb-8 w-full md:mb-8 md:w-1/2">
              <ImageCard
                src="/industry/capital.png"
                alt="NFRS/IFRS Implementation"
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
                We have been at the forefront of financial reporting
                transformation in Nepal, actively contributing to the adoption
                and implementation of NFRS/IFRS. Our team of skilled
                professionals lead by partners with extensive expertise in the
                field has strengthened our ability to guide businesses through
                complex financial reporting challenges.
              </Typography>
              <Typography
                className="mb-12 text-justify text-primary-blue"
                variant="p"
              >
                Whether in preparing for initial adoption or enhancing
                compliance with NFRS/IFRS, our expertise ensures that your
                financial reporting aligns with global standards. We have track
                record of successfully implementing NFRS in banks, insurance
                companies, micro finance companies, investment companies,
                capital markets, mutual funds and other service industries. We
                have been delivering specialized training on NFRS/IFRS to
                various regulatory organizations, banks, insurance companies,
                microfinance institutions, investment firms, capital markets,
                mutual funds, and other service industries, while also providing
                comprehensive assistance to ensure a smooth and efficient
                NFRS/IFRS implementation
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Capital;
