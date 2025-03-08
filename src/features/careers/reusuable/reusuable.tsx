'use client';
import { useEffect, useMemo, useState } from 'react';

import { Typography } from '@/components/reusable';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { cn } from '@/utils/cn';

import { faqDataArray } from './data';
import WorkTogether from './work-together';

const ReusuableFaq = () => {
  const faqArray = useMemo(() => faqDataArray, []);
  const [selectedFaq, setSelectedFaq] = useState('Services');
  const [myData, setMyData] = useState(
    faqArray.find((each) => each.title === 'Services'),
  );

  useEffect(() => {
    const selectData = faqArray.find((each) => each.title === selectedFaq);
    setMyData(selectData);
  }, [selectedFaq, faqArray]);

  return (
    <>
      <Typography variant="h3" className="mb-11 font-bold">
        Frequently asked questions
      </Typography>
      <div className="mb-12">
        <div className="mb-8 flex flex-wrap gap-4">
          {faqArray.map((each, index) => (
            <button
              className={cn(
                `border border-bluish-white px-4 py-2 `,
                each.title === selectedFaq
                  ? 'border-black'
                  : 'border-bluish-white',
              )}
              key={index}
              onClick={() => setSelectedFaq(each.title)}
            >
              {each.title}
            </button>
          ))}
        </div>
        <Accordion type="single" collapsible className="w-full">
          {myData?.qa?.map((each, index) => (
            <AccordionItem
              value={`item-${index}`}
              key={index}
              className="mb-8 border-b border-gray-200 transition-all"
            >
              <AccordionTrigger className="bg-bluish-white">
                <Typography
                  variant="p"
                  className="flex  items-center px-4 text-primary-blue"
                >
                  <span className="mr-3 inline-block size-2 rounded-full bg-primary"></span>
                  {each.question}
                </Typography>
              </AccordionTrigger>
              <AccordionContent className="bg-bluish-white">
                <Typography
                  variant="p"
                  className=" mt-3 px-4 pt-4 text-primary-blue "
                >
                  {each.answer}
                </Typography>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <WorkTogether />
    </>
  );
};

export default ReusuableFaq;
