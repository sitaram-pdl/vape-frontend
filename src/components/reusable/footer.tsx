import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-red-800 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="mb-6 text-2xl font-bold">Barahi Foods</h2>

            {/* Social Media Icons */}
            <div className="mb-6 flex space-x-4">
              <a
                href="#"
                className="rounded-full border border-white p-2 hover:bg-white hover:text-red-800"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="rounded-full border border-white p-2 hover:bg-white hover:text-red-800"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="rounded-full border border-white p-2 hover:bg-white hover:text-red-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide"
                >
                  <path d="M15 10.5a3.5 3.5 0 0 0-5 0v2a.5.5 0 0 0 1 0v-2a2.5 2.5 0 0 1 3 0v3a2.5 2.5 0 0 1-2.5 2.5H8.5a.5.5 0 0 0 0 1h3a3.5 3.5 0 0 0 3.5-3.5v-3z"></path>
                  <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="rounded-full border border-white p-2 hover:bg-white hover:text-red-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide"
                >
                  <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                </svg>
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 text-sm md:text-base">
              <div className="flex items-center">
                <MapPin className="mr-2" size={18} />
                <p>Tokyo, Shinjuku, Hyakunincho 2-10-9 101</p>
              </div>
              <div className="flex items-center">
                <Phone className="mr-2" size={18} />
                <p>03-3363-1145, 090-6094-9954</p>
              </div>
              <div className="flex items-center">
                <Mail className="mr-2" size={18} />
                <p>barahistore@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="mb-6 text-2xl font-bold">Company</h2>
            <ul className="space-y-3 text-center md:text-left">
              <li>
                <a href="#" className="hover:underline">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Delivery Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Map */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="mb-6 text-2xl font-bold">Find Us Here</h2>
            <div className="h-64 w-full overflow-hidden rounded-md bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.6528197382515!2d83.98433371523556!3d28.20959368259207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399594d865f61a7f%3A0x54bfaebb33e3d6d2!2sBarahi%20Foods!5e0!3m2!1sen!2snp!4v1710123456789"
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Barahi Foods Location"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-red-700 py-4">
        <div className="container mx-auto flex flex-col items-center justify-between px-4 text-sm md:flex-row">
          <p>©2023 Barahi Foods. All Rights Reserved.</p>
          <p className="mt-2 md:mt-0">
            Powered By: Two Ace Solutions Pvt. Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
