import Link from 'next/link';
import React from 'react';

import { Typography } from '@/components/reusable/typography';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

interface AccordionData {
  trigger: string;
  content?: string;
  links?: {
    name: string;
    url: string;
  }[];
}

interface AccordionDataProps {
  data: AccordionData[];
}

const AccordionDemo: React.FC<AccordionDataProps> = ({ data }) => {
  return (
    <Accordion type="single" collapsible className="w-full">
      {data.map((each, index) => (
        <AccordionItem
          value={`item-${index}`}
          key={index}
          className="border-b border-gray-200 transition-all data-[state=open]:bg-bluish-white"
        >
          <AccordionTrigger className=" data-[state=open]:border data-[state=open]:border-b-gray-300">
            <Typography
              variant="h5"
              className=" px-4 font-medium text-primary-blue"
            >
              {each.trigger}
            </Typography>
          </AccordionTrigger>
          <AccordionContent>
            {each.content && (
              <Typography variant="p" className=" px-4 pt-4 text-primary-blue ">
                {each.trigger}
              </Typography>
            )}
            {each.links && each.links?.length > 0 && (
              <>
                {each.links?.map((each, index) => (
                  <Link href={each.url} key={index}>
                    <Typography
                      variant="p"
                      className=" px-4 pt-4 text-primary-blue "
                    >
                      {each.name}
                    </Typography>
                  </Link>
                ))}
              </>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionDemo;
