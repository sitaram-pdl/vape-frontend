import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState } from 'react';

import { Typography } from '@/components/reusable';
import QuoteSvg from '@/components/svg/quote';
import { Button } from '@/components/ui/button';
import useScreenSize from '@/hooks/use-screen-size';
import { cn } from '@/lib/utils';

function HomeLanding() {
  const router = useRouter();
  const screenSize = useScreenSize();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  const ismobile = useMemo(() => screenSize < 700, [screenSize]);

  return (
    <div
      className={cn(
        'relative z-0 flex h-screen flex-col bg-primary-blue overflow-hidden',
        hydrated && screenSize < 1024 && 'max-h-[900px]',
        hydrated && ismobile && 'max-h-[740px]',
      )}
    >
      <div className="relative">
        <img
          className="-z-10 w-full object-cover"
          src="/home/home.png"
          alt="Beautiful home landing view"
        />
        <img
          src="/home/bg-overlay.png"
          className={cn(
            'pointer-events-none absolute -bottom-1/4 left-0 z-10 w-full object-contain',
            hydrated && ismobile && '-bottom-28',
          )}
          alt="layer"
        />
      </div>
      <div className="absolute bottom-0 left-0 z-10 h-fit w-full text-white">
        <div className="container">
          <div className="flex flex-col gap-4">
            <Typography variant="h1" className="font-bold">
              Welcome to
              <br />
              S.R. Pandey & Co., {hydrated && screenSize < 1024 && <br />}
              Chartered Accountants
            </Typography>
            <Button className="w-fit">Find out more</Button>
            <div className="flex flex-col gap-4">
              <QuoteSvg />
              <Typography variant="h3" className="font-bold">
                Message from Founding Partner
              </Typography>
              <Typography>
                Welcome to S.R. Pandey & Co., Chartered Accountants. For over 31
                years, we have
                <br /> been a trusted name in providing top-tier accounting,
                auditing, and taxation <br /> services in Nepal...
                <span
                  onClick={() => router.push('/aboutus/founding-partner')}
                  onKeyDown={(e) =>
                    e.key === 'Enter' &&
                    router.push('/aboutus/founding-partner')
                  }
                  role="link"
                  tabIndex={0}
                  className="cursor-pointer text-sm italic underline"
                >
                  Read More
                </span>
              </Typography>
              <div className="mb-5 flex w-full justify-end">
                <Typography className="font-semibold">
                  - Sudarshan Raj Pandey
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLanding;
