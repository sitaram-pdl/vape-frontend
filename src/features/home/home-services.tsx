import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowUpRight, CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import React from 'react';

import { Typography } from '@/components/reusable';

type ServiceCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  linkUrl: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  linkUrl,
}) => {
  return (
    <div className=" mx-3 flex min-w-[99%] flex-col justify-between overflow-hidden rounded-md bg-[#DFEFF4] md:min-w-[46%] lg:min-w-[32%]">
      <div className="flex flex-col gap-4">
        <div className="h-52 overflow-hidden rounded-md">
          <img src={imageSrc} alt={title} className="size-full object-cover" />
        </div>
        <div className="p-4">
          <Typography className="mb-2 font-bold text-[#005A77]">
            {title}
          </Typography>
          <Typography variant="small" className="text-primary-blue">
            {description}
          </Typography>
        </div>
      </div>
      <a
        href={linkUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline"
      >
        <Typography
          variant="small"
          className="mx-4 mb-4 mt-2 flex items-center gap-4 font-semibold text-primary-blue"
        >
          Explore
          <div className="rounded-full bg-yellow-400 p-1">
            <ArrowUpRight size={15} className="rounded-full text-black" />
          </div>
        </Typography>
      </a>
    </div>
  );
};

type Service = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  linkUrl: string;
};

const ServiceCardsCarousel: React.FC = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      loop: true,
      containScroll: 'trimSnaps',
    },
    [Autoplay({ delay: 3000 })],
  );

  const handleLeftClick = () => {
    emblaApi?.scrollPrev();
  };

  const handleRightClick = () => {
    emblaApi?.scrollNext();
  };

  const services: Service[] = [
    {
      id: 1,
      title: 'Audit and Assurance',
      description:
        'Comprehensive financial audit services and assurance solutions to ensure compliance, transparency, and accuracy in your business operations, helping you maintain the trust of stakeholders and meet regulatory requirements.',
      imageSrc: '/photos/audit.jpeg',
      linkUrl: '/services/audit',
    },
    {
      id: 2,
      title: 'Taxation Audit Services',
      description:
        'Expert tax audit assistance and consultation to help businesses navigate complex tax regulations, identify opportunities for tax savings, and optimize their tax positions while ensuring full compliance with tax laws.',
      imageSrc: '/photos/taxation.jpeg',
      linkUrl: '/services/taxation',
    },
    {
      id: 3,
      title: 'Mergers and Acquisition',
      description:
        'Strategic M&A advisory services offering in-depth due diligence, valuation analysis, and transaction support to ensure successful business combinations, from deal sourcing to post-merger integration.',
      imageSrc: '/photos/merger.jpeg',
      linkUrl: '/services/mergers',
    },
    {
      id: 4,
      title: 'Business Support and Outsourcing',
      description:
        'Streamlined business support solutions and outsourcing services designed to enhance operational efficiency, reduce overhead costs, and allow you to focus on your core business activities while we manage the non-core functions.',
      imageSrc: '/photos/business.jpeg',
      linkUrl: '/services/business',
    },
    {
      id: 5,
      title: 'Advisory Services',
      description:
        'Professional business advisory services offering tailored strategic insights, actionable recommendations, and solutions for sustainable growth, operational excellence, and improved business performance in a competitive market.',
      imageSrc: '/photos/advisory.jpeg',
      linkUrl: '/services/advisory',
    },
    {
      id: 6,
      title: 'NFRS/IFRS Implementation',
      description:
        'Expert guidance and support for implementing NFRS/IFRS standards, ensuring your financial reporting is fully compliant, accurate, and aligned with international best practices for global business operations.',
      imageSrc: '/image/about/nfrs.png',
      linkUrl: '/services/nfrs',
    },
  ];

  return (
    <div className="container  mx-auto px-4 py-8">
      <Typography variant="h4" className="mb-6 font-bold  text-primary-blue">
        Our Services
      </Typography>
      <div className="relative">
        <button onClick={handleLeftClick}>
          <CircleArrowLeft className="absolute left-10 top-1/2 hidden cursor-pointer text-text-body lg:flex" />
        </button>
        <button onClick={handleRightClick}>
          <CircleArrowRight className="absolute right-10 top-1/2 hidden cursor-pointer text-text-body lg:flex" />
        </button>

        <div className=" mx-auto w-[88%] overflow-hidden p-2" ref={emblaRef}>
          <div className="flex">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                imageSrc={service.imageSrc}
                linkUrl={service.linkUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardsCarousel;
