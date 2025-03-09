'use client';
import React from 'react';

import ProductCard from '@/components/ecommerce/product-card';

const products = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  image: 'https://admin.barahifoods.com/uploads/products/1722153268.png',
  weight: `${(Math.random() * 2 + 0.5).toFixed(1)} kg`,
  price: Math.floor(Math.random() * 1500 + 300),
  inStock: index % 3 !== 0,
  shipping: index % 2 === 0 ? 'DRY SHIPPING' : 'CHILLED SHIPPING',
  hasQuantitySelector: true,
  discount: index % 5 === 0 ? 10 : undefined,
  discountedPrice:
    index % 5 === 0
      ? Math.floor((Math.random() * 1500 + 300) * 0.9)
      : undefined,
  description: 'This is a high-quality product with premium ingredients.',
  onAddToCart: (id: number, quantity: number) => {
    console.log(`Added ${quantity} of Product ID ${id} to cart.`);
  },
}));

const ProductGrid = () => {
  return (
    <section className="mx-auto max-w-7xl px-8 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold">All Products</h2>
        <button className="font-medium text-red-500 hover:text-red-600">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
