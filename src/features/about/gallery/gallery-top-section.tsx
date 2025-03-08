/* eslint-disable tailwindcss/no-unnecessary-arbitrary-value */

'use client';
import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';

import { Typography } from '@/components/reusable';
import Breadcrumb from '@/components/reusable/breadcrumb';
import { useDotButton } from '@/features/home/emba-dotes';
import { cn } from '@/utils/cn';

function GallertTopSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(),
    Fade(),
  ]);

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi]);
  const sliderData = [
    {
      id: 1,
      title: 'Serene Nature',
      description:
        'A peaceful nature scene with sunlight streaming through lush green trees.',
      url: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg',
    },
    {
      id: 2,
      title: 'Tranquil Beach',
      description:
        'A relaxing beach view with gentle waves and a clear blue sky.',
      url: 'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg',
    },
    {
      id: 3,
      title: 'Lush Forest',
      description:
        'Sunlight peeking through the dense forest, creating a magical glow.',
      url: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg',
    },
    {
      id: 4,
      title: 'Chic City Life',
      description: 'A stylish woman confidently posing in an urban setting.',
      url: 'https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg',
    },
    {
      id: 5,
      title: 'Autumn Beauty',
      description:
        'A majestic tree with vibrant autumn foliage, showcasing nature’s charm.',
      url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    },
  ];
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  return (
    <>
      <div className="embla select-none overflow-hidden">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex">
            {sliderData.map((item) => (
              <div
                className="embla__slide relative h-[70vh] min-w-full"
                key={item.id}
              >
                <div className="absolute left-0 top-0 z-20 size-full bg-[linear-gradient(177.19deg,#000000_-22.39%,rgba(0,0,0,0)_72.22%)]"></div>
                <img
                  className="size-full object-cover"
                  src={item.url}
                  alt={item.title}
                />
                <div className="absolute bottom-10 left-10 w-[75%]  md:w-[50%]">
                  <Breadcrumb
                    color="text-white"
                    Link1={{ title: 'About Us', href: '/aboutus' }}
                    Link2={{ title: 'Our Team', href: '/aboutus/ourteam' }}
                  />

                  <Typography
                    variant="h5"
                    className="-mt-8 font-bold text-white"
                  >
                    {item.title}
                  </Typography>
                  <Typography className="text-white">
                    {item.description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-3  flex w-full items-center justify-center">
        <div className="flex gap-3">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={cn(
                'w-3 h-3 bg-white border-[0.18em] rounded-full cursor-pointer',
                index === selectedIndex
                  ? 'bg-primary border-primary'
                  : 'border-black/60',
              )}
            ></button>
          ))}
        </div>
      </div>
    </>
  );
}

export default GallertTopSection;
