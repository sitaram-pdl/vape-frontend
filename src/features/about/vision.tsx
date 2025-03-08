import Image from 'next/image';
import React from 'react';

import { Navbar } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import { Typography } from '@/components/reusable/typography';

import { vision } from './data';

const Vision = () => {
  return (
    <>
      <Navbar type="normal" />
      <div className="h-32"></div>
      <div className="container">
        <div className="mx-auto  mt-16 w-full">
          <Breadcrumb
            Link1={{ title: 'About', href: '/aboutus' }}
            Link2={{
              title: 'Vision, Mission and Values',
              href: '/aboutus/vision',
            }}
          />
          <div className="mb-16">
            <Typography variant="h3" className="font-bold text-primary-blue">
              Vision, Mission and Values
            </Typography>
          </div>

          {vision.map((each) => (
            <div
              className="mb-16 flex flex-col-reverse gap-10 md:mb-20 md:flex-row"
              key={each.id}
            >
              <div className="basis-1/2">
                <Image
                  src={each.image}
                  alt="Vision Mission Values Image"
                  layout="fit"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="h-auto w-full"
                />
              </div>
              <div className="basis-1/2">
                <div className="flex flex-col items-start gap-7">
                  <div className="bg-bluish-white p-3">
                    {React.createElement(each.icon, {
                      size: 40,
                      className: 'text-primary-blue',
                    })}
                  </div>
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
        </div>
      </div>
    </>
  );
};

export default Vision;
