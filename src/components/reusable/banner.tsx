interface BannerProps {
  image?: string;
  description?: {
    header?: string;
    desc?: string;
  };
}
import { Typography } from '@/components/reusable/typography';

const Banner: React.FC<BannerProps> = ({
  image = '/image/about/introduction/services.png',
  description,
}) => {
  return (
    <section
      className="relative mb-16 flex h-[60vh] items-center  !bg-cover !bg-center"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="nav-gradient absolute left-0 top-0 z-10 h-48 w-full"></div>
      {description && (
        <div className="container">
          <div className="mx-auto  w-full sm:w-[90%]">
            <Typography variant="h1" className="mb-3 font-bold text-white">
              {description?.header || ''}
            </Typography>
            <Typography variant="p" className=" text-white">
              {description?.desc || ''}
            </Typography>
          </div>
        </div>
      )}
    </section>
  );
};

export default Banner;
