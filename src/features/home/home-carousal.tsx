import Autoplay from 'embla-carousel-autoplay';
import Fade from 'embla-carousel-fade';
import useEmblaCarousel from 'embla-carousel-react';
import { ArrowUpRight } from 'lucide-react';

import { Typography } from '@/components/reusable';
import { cn } from '@/utils/cn';

import { useDotButton } from './emba-dotes';

export default function HomeCarousal() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay(),
    Fade(),
  ]);
  const sliderData = [
    {
      id: 1,
      title: 'Serene Nature Scene with Sunlight Streaming Through Trees',
      url: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg',
    },
    {
      id: 2,
      title: 'Tranquil Beach with Gentle Waves and Clear Blue Sky',
      url: 'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg',
    },
    {
      id: 3,
      title: 'Lush Forest Scene with Rays of Sunlight Peeking Through',
      url: 'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg',
    },
    {
      id: 4,
      title: 'Elegant Woman in City Setting with a Chic Attitude',
      url: 'https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_1280.jpg',
    },
    {
      id: 5,
      title: 'Majestic Tree in Vibrant Autumn Colors',
      url: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
    },
  ];

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="bg-white">
      <div className="h-36 w-full bg-[#015a77]"></div>
      <div className="relative h-fit">
        <div className="absolute left-0 top-0 h-1/2 w-full bg-[#015a77]"></div>
        <div className="container  flex flex-col gap-10 pb-20">
          <div className="z-20 flex justify-between">
            <Typography variant="h4" className=" font-bold text-white">
              About us
            </Typography>
            <div className="flex items-center gap-4">
              <Typography variant="p" className="text-white">
                Know More
              </Typography>
              <div className="rounded-full bg-primary p-2">
                <ArrowUpRight size={18} />
              </div>
            </div>
          </div>
          <div className="embla">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container ">
                {sliderData.map((item, index) => (
                  <div className="embla__slide relative" key={index}>
                    <img
                      className="embla__slide__img"
                      src={item.url}
                      alt="Your alt text"
                    />
                    <Typography
                      variant="h5"
                      className="absolute bottom-10 left-10 w-3/4 font-bold text-white md:w-1/2"
                    >
                      {item.title}
                    </Typography>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex w-full items-center justify-center">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
