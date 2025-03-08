import React from 'react';

import Navbar from '@/components/reusable/navbar/nabvar';
import ProductGrid from '@/section/home/all-product';
import CategoryCarouselSection from '@/section/home/home-landing';

function page() {
  return (
    <div>
      <Navbar />
      <CategoryCarouselSection />
      <ProductGrid />
    </div>
  );
}

export default page;
