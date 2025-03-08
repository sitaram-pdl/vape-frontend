import { Navbar } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import { Typography } from '@/components/reusable/typography';

const FoundingPartner = () => {
  return (
    <>
      <Navbar type="normal" />
      <div className="h-32"></div>
      <div className="container">
        <div className="mx-auto  mt-16 ">
          <Breadcrumb
            Link1={{ title: 'About', href: '/aboutus' }}
            Link2={{
              title: "Founding Partner's Message",
              href: '/aboutus/founding-partner',
            }}
          />
          <div className="mb-8">
            <Typography variant="h3" className="font-bold text-primary-blue">
              Founding Partner&apos;s Message
            </Typography>
          </div>
          <div className="">
            <div className="mb-5 flex flex-col gap-5 md:mb-5 md:flex-row">
              <div className="basis-1/2 overflow-hidden">
                <div className="h-full min-h-[450px] bg-[#cac9c4] bg-[url('/image/about/founding/partner.png')] bg-center bg-repeat-x "></div>
              </div>
              <div className="basis-1/2">
                <Typography
                  className="mb-4 text-justify text-primary-blue"
                  variant="p"
                >
                  Welcome to S.R. Pandey & Co., Chartered Accountants. For over
                  31 years, we have been a trusted name in providing top-tier
                  accounting, auditing, and taxation services in Nepal. Our
                  unwavering commitment to excellence, integrity, and client
                  success has positioned us as a leading firm in the industry.
                  We have built a reputation for delivering quality professional
                  services suitable for the unique needs of businesses and
                  individuals. Since our inception, we have stood firm in our
                  commitment to offering valuable and insightful solutions that
                  empower private businesses, Government institutions, and
                  Development organizations across Nepal and beyond.
                </Typography>
                <Typography
                  className="mb-4 text-justify text-primary-blue"
                  variant="p"
                >
                  Our strength lies in our people, expertise, and integrity. We
                  uphold the highest professional standards, ensuring that our
                  clients receive dynamic advisory services according to their
                  evolving needs. With a team of highly skilled professionals,
                  we navigate complex regulatory landscapes, foster financial
                  transparency, and contribute to the sustainable growth of
                  businesses and institutions.
                </Typography>
                <Typography
                  className="mb-4 text-justify text-primary-blue"
                  variant="p"
                >
                  In today&apos;s dynamic economic environment, we recognize the
                  importance of innovation, technology, and ethical governance.
                  As Nepal&apos;s financial and regulatory frameworks evolve, we
                  continue to adapt, offering strategic guidance to help our
                  clients stay ahead. Our work extends beyond compliance- we
                  believe in creating lasting value and fostering long-term
                  partnerships built on trust and excellence.
                </Typography>
              </div>
            </div>
            <Typography
              className="mb-4 text-justify text-primary-blue"
              variant="p"
            >
              I extend my sincere gratitude to our clients, stakeholders, and
              dedicated team members who make our journey meaningful. We take
              immense pride in being more than just advisors- we are partners in
              your success. We look forward to assisting you in achieving your
              financial goals.
            </Typography>
          </div>
          <div className="mb-40 text-right">
            <Typography className="text-primary-blue" variant="p">
              Sudarshan Raj Pandey, FCA
            </Typography>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoundingPartner;
