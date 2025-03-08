import { Typography } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import ImageCard from '@/components/reusable/image-card';

const listItems = [
  {
    title: 'Pre-merger Advisory Services',
    subList: [
      'Identification and evaluation of potential M & A opportunities and preliminary due diligence.',
    ],
  },
  {
    title: 'Financial Assessment',
    subList: [
      'Financial Due Diligence of the entities.',
      'Analysis of Future Projections of merging entities as well as the newly formed entities to identify synergies and create a vision for the combined entity.',
      'Analysis of compliance of all the statutory requirements of regulatory bodies.',
    ],
  },
  {
    title: 'Post Merger Advisory Services',
    subList: [
      'Negotiation of deal terms.',
      "Develop merged entity's structures.",
      'HR Integration and Management Consultancy.',
      'Merger Implementation of Financial and Accounting Aspects.',
    ],
  },
];

const Mergers = () => {
  return (
    <div className="container">
      <div className="mx-auto  mt-16 w-full ">
        <Breadcrumb
          Link1={{ title: 'Services', href: '/services' }}
          Link2={{
            title: 'Mergers and Acquisitions',
            href: '/services/mergers',
          }}
        />
        <div className="mb-12">
          <Typography variant="h3" className="font-bold text-primary-blue">
            Mergers and Acquisitions
          </Typography>
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="mb-8 w-full md:mb-8 md:w-1/2">
            <ImageCard
              src="/photos/merger.jpeg"
              alt="Merger and Acquisitions"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="mb-8 object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <Typography
              className="mb-8 text-justify text-primary-blue"
              variant="p"
            >
              Merger and Acquisitions are being widely implemented as strategic
              decisions in Nepalese business sectors. S.R. Pandey & Co. & Co.,
              Chartered Accountants has been a pioneer in the Mergers and
              Acquisitions in the country which has assisted in successful
              mergers and acquisitions of numerous entities over the years. Our
              team of expertise with extensive industry knowledge and experience
              help you confidently navigate the complexities of uniting
              organizations. Mergers and acquisitions are significant
              undertakings that can shape the future of your business. To
              navigate these complex transactions for mergers and acquisitions
              successfully, partnering with an experienced and dedicated mergers
              and acquisitions firm is crucial.
            </Typography>
          </div>
        </div>

        <div className="pb-8">
          <Typography
            className="mb-4 text-justify text-primary-blue"
            variant="p"
          >
            Our services include but are not limited to:
          </Typography>

          <ol className="space-y-4 text-gray-700">
            {listItems.map((each, index) => (
              <li key={index}>
                <Typography
                  className="font-semibold text-primary-blue"
                  variant="p"
                >
                  {' '}
                  {index + 1}. {each.title}
                </Typography>
                <ol className="list-outside list-[lower-alpha] pl-6 text-primary-blue">
                  {each.subList.map((each2, index) => (
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

export default Mergers;
