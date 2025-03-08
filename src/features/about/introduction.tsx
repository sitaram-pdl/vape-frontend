import Image from 'next/image';

import { Navbar } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import { Typography } from '@/components/reusable/typography';

const Introduction = () => {
  return (
    <>
      <Navbar type="normal" />
      <div className="h-32"></div>
      <div className="container">
        <div className="mx-auto  w-full">
          <Breadcrumb
            Link1={{ title: 'About', href: '/aboutus' }}
            Link2={{ title: 'Introduction', href: '/aboutus/introduction' }}
          />

          <div className="mb-16">
            <Typography variant="h3" className="font-bold text-primary-blue">
              Introduction
            </Typography>
          </div>
          <div className="mb-16 flex flex-col-reverse gap-10 md:mb-20 md:flex-row">
            <div className="basis-1/2">
              <Typography
                variant="h4"
                className="mb-4 font-bold text-primary-blue"
              >
                Who We Are
              </Typography>
              <Typography
                className="mb-4 text-justify text-primary-blue"
                variant="p"
              >
                S. R. Pandey & Co., Chartered Accountants is a Nepal based firm,
                located in Kathmandu. The firm was founded in 1993 AD, which has
                grown into one of the largest and leading independent accounting
                firms in Nepal. The firm is a member of HLB International, the
                global advisory and accounting network since 2024. We have a
                network of specialists and highly qualified professionals in
                diverse fields, and we offer comprehensive services to our
                valued clients. At SRP, client satisfaction has always been our
                prime goal, and we pride ourselves on the level of experience
                and qualitative professional services that we offer to our
                clients, and this experience is enriched by an impressive record
                of consistent leadership team.
              </Typography>
              <Typography
                className="mb-4 text-justify text-primary-blue"
                variant="p"
              >
                We have consistently been the trusted choice for advisory,
                audit, and consulting services. Our mission is to not just meet
                but exceed client expectations by embodying our firm’s core
                values through tailored services, expertise, collaboration,
                professionalism, and specialization. We prioritize integrity and
                confidentiality, ensuring transparency in every client
                interaction, while proactively identifying and addressing their
                unique needs. With a wealth of collective experience of 31
                years, we deliver innovative and practical solutions. Every
                assignment is managed by highly skilled professionals, selected
                specifically to align with the unique demands of the project,
                ensuring optimal results for our clients.
              </Typography>
            </div>
            <div className="basis-1/2">
              <Image
                src="/image/about/introduction/whoweare.png"
                alt="Who We Are"
                layout="fit"
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full"
              />
            </div>
          </div>
          <div className="mb-16 flex flex-col gap-10 md:mb-20 md:flex-row">
            <div className="basis-1/2">
              <Image
                src="/image/about/introduction/services1.png"
                alt="Example Image"
                layout="fit"
                width={0}
                height={0}
                sizes="100vw"
                className="h-auto w-full"
              />
            </div>
            <div className="basis-1/2 ">
              <Typography
                variant="h4"
                className="mb-4 font-bold text-primary-blue"
              >
                HLB International
              </Typography>
              <Typography
                className="mb-4 text-justify text-primary-blue"
                variant="p"
              >
                HLB International is a global network of independent advisory
                and accounting firms, committed to helping businesses grow and
                succeed across borders. With a presence in 157 countries and a
                team of over 46,755 professionals, HLB combines deep local
                expertise with global capabilities to provide high-quality,
                tailored solutions. Through collaborative effort it aims to
                provide professional support businesses need to thrive in the
                ever-evolving global landscape.
              </Typography>
              <Typography
                className="mb-4 text-justify text-primary-blue"
                variant="p"
              >
                Membership in an HLB International has enhanced our firm’s
                credibility and has also ensured adherence to globally
                recognized standards. It has equipped us with up-to-date
                knowledge of international regulations and best practices
                allowing us to deliver high-quality, compliant services to our
                clients.
              </Typography>
            </div>
          </div>
          <div className="mb-16">
            <Typography
              variant="h4"
              className="mb-4 font-bold text-primary-blue"
            >
              History of S.R. Pandey & Co. and Co., Chartered Accountants
            </Typography>
            <Typography
              className="mb-4 text-justify text-primary-blue"
              variant="p"
            >
              S.R. Pandey & Co., Chartered Accountants was established in 1993
              by Sudarshan Raj Pandey. Established with a vision to provide
              high-quality financial and advisory services, the firm has played
              a pivotal role in shaping the country s accounting and taxation
              landscape.
            </Typography>
            <Typography
              className="mb-4 text-justify text-primary-blue"
              variant="p"
            >
              Over the years, S.R. Pandey & Co. has built a reputation for
              excellence, specializing in taxation, due diligence audits, and
              the implementation of Nepal Financial Reporting Standards
              (NFRS)/International Financial Reporting Standards (IFRS).
              Strengthening its global outlook, the firm has partnered with
              several international accounting and advisory networks on diverse
              assignments, bringing global expertise and best practices to its
              clients. This collaboration has enabled the firm to deliver
              innovative, high-quality financial solutions aligned with
              international standards.
            </Typography>
            <Typography
              className="mb-4 text-justify text-primary-blue"
              variant="p"
            >
              In 2024, S.R. Pandey & Co. became a member of HLB International, a
              global network of independent accounting and advisory firms. This
              milestone has further enhanced the firm’s ability to serve clients
              with cross-border expertise and broadened its global reach.
            </Typography>
            <Typography
              className="mb-4 text-justify text-primary-blue"
              variant="p"
            >
              As the firm grew, it welcomed six highly qualified professional
              partners, each contributing to its legacy of expertise and
              integrity. Today, S.R. Pandey & Co. continues to be a trusted
              advisor for businesses, ensuring financial transparency,
              regulatory compliance, and sustainable growth in Nepal`s evolving
              financial sector. With over three decades of experience the firm
              is dedicated to fostering long-term relationships and upholding
              its values of professionalism and trust
            </Typography>
          </div>
          <div className="mb-16 ">
            <Typography
              variant="h5"
              className="mb-5 font-bold text-primary-blue"
            >
              How we work together
            </Typography>
            <Typography
              className="mb-4 text-justify text-primary-blue"
              variant="p"
            >
              At S.R. Pandey & Co., Chartered Accountants collaboration is at
              the heart of everything we do. Our team thrives on open
              communication and mutual respect, fostering an inclusive
              environment where every voice is valued, and every individual is
              empowered to contribute their unique expertise. This collaborative
              approach not only enhances productivity and innovation but also
              strengthens team bonds and creates a fulfilling work environment
              for all. A healthy work environment fosters psychological safety,
              allowing employees to express ideas and feedback without fear of
              negative repercussions. We have policies that support flexibility
              by helping employees manage their personal and professional lives
              effectively, leading to higher job satisfaction.
            </Typography>
            <Typography
              className="mb-4 text-justify text-primary-blue"
              variant="p"
            >
              We focus on building trusted, long-term relationships by taking
              the time to understand the client business and specific needs. Our
              responsive approach ensures that client queries are addressed
              promptly, with clear communication and expert guidance. With a
              focus on transparency, accountability, and continuous improvement,
              we ensure that every project is handled efficiently and
              effectively. We work with clients with a collaborative approach
              offering strategic insights and practical guidance to help them
              make informed financial decisions.
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
