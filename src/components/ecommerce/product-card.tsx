'use client';
import { Plus, Minus, ShoppingCart, Heart } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface Product {
  id: number;
  name: string;
  image?: string;
  weight: string;
  price: number;
  inStock: boolean;
  shipping?: 'DRY SHIPPING' | 'CHILLED SHIPPING' | string;
  hasQuantitySelector?: boolean;
  discount?: number;
  discountedPrice?: number;
  description?: string;
  onAddToCart?: (id: number, quantity: number) => void;
  category?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [hydratedProduct, setHydratedProduct] = useState<Product | null>(null);

  // Ensure consistent data after hydration
  useEffect(() => {
    setHydratedProduct(product);
  }, [product]);

  // Avoid rendering mismatched content before hydration
  if (!hydratedProduct) return null;

  const getBadgeColor = (shippingType?: string): string => {
    switch (shippingType) {
      case 'DRY SHIPPING':
        return 'bg-green-500';
      case 'CHILLED SHIPPING':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const handleAddToCart = () => {
    setQuantity(1);
    hydratedProduct.onAddToCart &&
      hydratedProduct.onAddToCart(hydratedProduct.id, 1);
  };

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-all duration-200 hover:shadow-md">
      {/* Image Container */}
      <div className="relative">
        <div className="aspect-square w-full overflow-hidden bg-gray-50">
          <img
            src={hydratedProduct.image || '/api/placeholder/400/400'}
            alt={hydratedProduct.name}
            className="group-hover:scale-102 size-full object-cover transition-transform duration-300"
          />
        </div>

        {/* Favorite Button */}
        <button
          onClick={toggleFavorite}
          className="absolute right-2 top-2 rounded-full bg-white/90 p-1.5 shadow-sm backdrop-blur-sm"
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart
            className={`size-3.5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-500'}`}
          />
        </button>

        {/* Discount Badge */}
        {hydratedProduct.discount && (
          <div className="absolute left-2 top-2 rounded bg-red-500 px-1.5 py-0.5 text-xs font-bold text-white">
            {hydratedProduct.discount}% OFF
          </div>
        )}

        {/* Shipping Badge */}
        {hydratedProduct.shipping && (
          <div
            className={`absolute bottom-2 left-2 rounded px-1.5 py-0.5 text-xs font-medium text-white ${getBadgeColor(hydratedProduct.shipping)}`}
          >
            {hydratedProduct.shipping}
          </div>
        )}
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-3">
        {/* Product Name & Weight */}
        <div className="mb-2">
          <h3 className="line-clamp-1 text-sm font-medium text-gray-900 group-hover:text-red-600">
            {hydratedProduct.name}
          </h3>
          <div className="flex items-center justify-between">
            <span className="mt-1 text-xs text-gray-500">
              {hydratedProduct.weight}
            </span>
            <span
              className={`text-xs font-medium ${hydratedProduct.inStock ? 'text-green-600' : 'text-red-600'}`}
            >
              {hydratedProduct.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="mt-auto flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-base font-bold text-red-600">
              ₹{hydratedProduct.discountedPrice || hydratedProduct.price}
            </span>
            {hydratedProduct.discountedPrice && (
              <span className="text-xs text-gray-500 line-through">
                ₹{hydratedProduct.price}
              </span>
            )}
          </div>

          {/* Quantity Selector or Add to Cart Button */}
          {hydratedProduct.hasQuantitySelector ? (
            quantity === 0 ? (
              <button
                className="flex items-center gap-1 rounded-full bg-red-600 px-2 py-1 text-xs font-medium text-white hover:bg-red-700 disabled:bg-gray-300"
                disabled={!hydratedProduct.inStock}
                onClick={handleAddToCart}
              >
                <ShoppingCart className="size-3" />
                <span>Add</span>
              </button>
            ) : (
              <div className="flex items-center overflow-hidden rounded-full border border-red-600">
                <button
                  className="flex size-6 items-center justify-center text-red-600 hover:bg-red-50"
                  onClick={() =>
                    setQuantity((prev) => (prev > 1 ? prev - 1 : 0))
                  }
                >
                  <Minus className="size-3" />
                </button>
                <span className="w-5 text-center text-xs font-medium">
                  {quantity}
                </span>
                <button
                  className="flex size-6 items-center justify-center text-red-600 hover:bg-red-50"
                  onClick={() => setQuantity((prev) => prev + 1)}
                >
                  <Plus className="size-3" />
                </button>
              </div>
            )
          ) : (
            <button
              className="flex items-center gap-1 rounded-full bg-red-600 px-2 py-1 text-xs font-medium text-white hover:bg-red-700 disabled:bg-gray-300"
              disabled={!hydratedProduct.inStock}
              onClick={() =>
                hydratedProduct.onAddToCart &&
                hydratedProduct.onAddToCart(hydratedProduct.id, 1)
              }
            >
              <ShoppingCart className="size-3" />
              <span>Add</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
