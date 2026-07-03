import React from "react";

const Footer = () => {
  return (
    <footer className="border-t bg-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">
            Job <span className="text-red-500">Portal</span>
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Find your dream job with us.
          </p>
        </div>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="/" className="text-gray-600 hover:text-red-500">
            Home
          </a>
          <a href="/jobs" className="text-gray-600 hover:text-red-500">
            Jobs
          </a>
          <a href="/browse" className="text-gray-600 hover:text-red-500">
            Browse
          </a>
          <a href="/contact" className="text-gray-600 hover:text-red-500">
            Contact
          </a>
        </div>
      </div>

      <div className="border-t text-center py-3 text-sm text-gray-500">
        © {new Date().getFullYear()} Job Portal. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;