import { Typography } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import ImageCard from '@/components/reusable/image-card';

const IctPage = () => {
  return (
    <div className="container">
      <div className="mx-auto  mt-16 w-full">
        <Breadcrumb
          Link1={{ title: 'Industries', href: '/industries' }}
          Link2={{
            title: 'Information, Communication and Technology',
            href: '/industries/ict',
          }}
        />
        <div className="mb-12">
          <Typography variant="h3" className="font-bold text-primary-blue">
            Information, Communication and Technology
          </Typography>
        </div>

        <div className="flex w-full flex-col gap-4 md:flex-row">
          <div className="mb-8 w-full md:mb-8 md:w-1/2">
            <ImageCard
              src="/industry/ICT.png"
              alt="Information, Communication and Technology Image"
              width={600}
              height={400}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="mb-8 object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <Typography
              className="mb-6 text-justify text-primary-blue"
              variant="p"
            >
              The Information, Communication and Technology (ICT) industry
              focuses on the development and use of technology to manage and
              exchange information, including areas like software development,
              telecommunications, and IT services. In the fast-changing world of
              ICT, it’s important to stay on top of things like security,
              compliance, and business operations. At S.R. Pandey & Co. & Co, we
              understand the challenges you face. We offer audit services that
              help ICT companies like yours keep track of financial records,
              ensure data safety, and follow important rules and regulations.
              Our team can also help identify areas to improve your business
              efficiency and reduce risks. With our support, you can focus on
              growing your business, knowing your financial and operational
              processes are well-managed.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IctPage;
