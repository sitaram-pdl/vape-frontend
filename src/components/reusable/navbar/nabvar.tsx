'use client';
import { ShoppingBag, User, Menu, X, ChevronDown, Search } from 'lucide-react';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0,
  );
  const [searchValue, setSearchValue] = useState('');
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const categories = [
    'Grocery',
    'Snacks',
    'Beverages',
    'Fresh Food',
    'Dairy',
    'Spices',
  ];

  return (
    <div className="w-full bg-red-800">
      <div className="container relative mx-auto">
        {/* Main Navbar */}
        <div className="flex items-center justify-between px-4 py-3 text-white md:px-6 lg:px-10">
          {/* Logo */}
          <div className="flex items-center md:w-1/4">
            <a href="/" className="flex items-center">
              <div className="mr-2 text-xl font-bold">Vape</div>
              <div className="mt-1 text-sm font-light">Studio</div>
            </a>
          </div>

          {/* Search Bar - Centered for larger screens */}
          <div className="relative hidden justify-center md:flex md:w-2/4">
            <div className="w-full max-w-lg">
              <div className="flex">
                <div className="relative inline-block">
                  <button
                    className="flex items-center rounded-l-md border border-gray-300 bg-white px-4 py-2 text-gray-700"
                    onClick={() => setShowCategories(!showCategories)}
                  >
                    <span className="mr-1 whitespace-nowrap">
                      Select a Category
                    </span>
                    <ChevronDown size={16} />
                  </button>
                  {showCategories && (
                    <div className="absolute left-0 z-10 mt-1 w-48 rounded-md bg-white shadow-lg">
                      {categories.map((category) => (
                        <button
                          key={category}
                          className="w-full cursor-pointer px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                          onClick={() => setShowCategories(false)}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <input
                  type="text"
                  placeholder="Enter your product name..."
                  className="flex-1 border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button className="rounded-r-md border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700">
                  <Search size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Cart and User for larger screens */}
          <div className="hidden items-center justify-end space-x-5 md:flex md:w-1/4">
            {/* Cart */}
            <div className="relative">
              <ShoppingBag size={24} />
              <span className="absolute -right-2 -top-2 flex size-5 items-center justify-center rounded-full bg-white text-xs font-bold text-red-800">
                1
              </span>
            </div>

            {/* User */}
            <User size={24} />
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute z-10 w-full bg-red-700 p-4 text-white md:hidden">
            {/* Search Bar for Mobile */}
            <div className="mb-4">
              <div className="flex flex-col">
                <div className="mb-2">
                  <button
                    className="flex w-full items-center justify-between rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700"
                    onClick={() => setShowCategories(!showCategories)}
                  >
                    <span>Select a Category</span>
                    <ChevronDown size={16} />
                  </button>
                  {showCategories && (
                    <div className="mt-1 w-full rounded-md bg-white shadow-lg">
                      {categories.map((category) => (
                        <button
                          key={category}
                          className="w-full cursor-pointer px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                          onClick={() => setShowCategories(false)}
                        >
                          {category}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex">
                  <input
                    type="text"
                    placeholder="Enter your product name..."
                    className="flex-1 rounded-l-md border border-gray-300 px-4 py-2 text-gray-700 focus:outline-none"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <button className="rounded-r-md border border-gray-300 bg-gray-100 px-4 py-2 text-gray-700">
                    <Search size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* User and Cart for Mobile */}
            <div className="flex justify-around">
              <div className="flex items-center">
                <User size={20} className="mr-2" />
                <span>Account</span>
              </div>
              <div className="flex items-center">
                <div className="relative">
                  <ShoppingBag size={20} className="mr-2" />
                  <span className="absolute -right-1 -top-2 flex size-4 items-center justify-center rounded-full bg-white text-xs font-bold text-red-800">
                    1
                  </span>
                </div>
                <span>Cart</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
