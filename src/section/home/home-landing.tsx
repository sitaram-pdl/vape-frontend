'use client';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useCallback, useEffect, useState } from 'react';

const CategoryCarouselSection = () => {
  // Embla carousel setup
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  // Category list
  const categories = [
    'Vegetables',
    'Meat',
    'Frozen Veg Items',
    'Rice and Dal',
    'Spices',
    'Atta and Flour',
    'Snacks and Sweets',
    'Tea and cold drinks',
    'Ghee and Oil',
    'Sauce and Pickles',
    'Thai Products',
    'Tabacco',
    'Nepali Items',
    'Dry fruits and nuts',
  ];

  // Carousel slides - in a real application these would likely come from props or an API
  const slides = [
    {
      image:
        'https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg',
      alt: 'Serene Nature Scene with Sunlight Streaming Through Trees',
      title: 'A healthier you starts with organic',
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2013/07/18/20/26/sea-164989_1280.jpg',
      alt: 'Tranquil Beach with Gentle Waves and Clear Blue Sky',
      title: 'Farm fresh produce delivered to your doorstep',
    },
    {
      image:
        'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg',
      alt: 'Majestic Tree in Vibrant Autumn Colors',
      title: 'Authentic spices for authentic flavors',
    },
  ];

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="flex w-full flex-col lg:flex-row">
          {/* Categories Sidebar */}
          <div className="w-full border-b border-gray-200 bg-white p-4 lg:w-1/4 lg:max-w-xs lg:border-b-0 lg:border-r">
            <h2 className="mb-4 text-xl font-bold text-red-800">Categories</h2>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-1">
              {categories.map((category, index) => (
                <div
                  key={index}
                  className="rounded transition-colors hover:bg-gray-100"
                >
                  <a
                    href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="block px-2 text-red-800 hover:text-red-600"
                  >
                    {category}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Embla Carousel */}
          <div className="relative w-full lg:w-3/4">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {slides.map((slide, index) => (
                  <div className="relative min-w-0 flex-[0_0_100%]" key={index}>
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="aspect-[16/9] w-full object-cover"
                    />
                    <div className="absolute bottom-0 right-0 max-w-md p-4 sm:p-6 lg:p-10">
                      <div className="mb-2">
                        <img
                          src="/api/placeholder/120/40"
                          alt="Barahi Foods Logo"
                          className="h-8 sm:h-10"
                        />
                      </div>
                      <h3 className="text-xl font-bold text-white drop-shadow-lg sm:text-2xl lg:text-4xl">
                        {slide.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation Buttons */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1 text-red-800 shadow-md transition-all hover:bg-white sm:left-4 sm:p-2"
              onClick={scrollPrev}
              disabled={!prevBtnEnabled}
            >
              <ChevronLeft size={20} className="sm:size-6" />
            </button>
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1 text-red-800 shadow-md transition-all hover:bg-white sm:right-4 sm:p-2"
              onClick={scrollNext}
              disabled={!nextBtnEnabled}
            >
              <ChevronRight size={20} className="sm:size-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryCarouselSection;
