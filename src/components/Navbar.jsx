import React, { useState } from 'react';
import navicon from '../assets/nav-icon.png';

const Navbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <header className="pb-6 bg-white lg:pb-0">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
        {/* Main Navigation */}
        <nav className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="#" title="Face2Face" className="flex items-center cursor-pointer">
              <img className="w-auto h-8 lg:h-10" src={navicon} alt="Logo" />
              <span className="ml-2 text-xl font-bold text-black transition-all duration-200 hover:text-blue-600 cursor-pointer">Face2Face</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex  lg:items-center lg:ml-auto lg:space-x-10">
            <a href="#" className="text-base font-medium text-black cursor-pointer transition-all duration-200 hover:text-blue-600 focus:text-blue-600 lg:hover:text-blue-600">
              Features
            </a>
            <a href="#" className="text-base font-medium text-black cursor-pointer transition-all duration-200 hover:text-blue-600 focus:text-blue-600 lg:hover:text-blue-600">
              Solutions
            </a>
            <a href="#" className="text-base font-medium text-black cursor-pointer transition-all duration-200 hover:text-blue-600 focus:text-blue-600 lg:hover:text-blue-600">
              Resources
            </a>
            <a href="#" className="text-base font-medium text-black cursor-pointer transition-all duration-200 hover:text-blue-600 focus:text-blue-600 lg:hover:text-blue-600">
              Pricing
            </a>
          </div>

          {/* Get Started Button (Desktop Only) */}
          <a href="#" className="hidden lg:inline-flex items-center justify-center px-4 py-3 ml-10 text-base font-semibold text-white bg-blue-600 border border-transparent rounded-md transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700 cursor-pointer" role="button">
            Get Started
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            className="lg:hidden p-2 text-black focus:outline-none cursor-pointer"
            onClick={() => setExpanded(!expanded)}
          >
            ☰
          </button>
        </nav>

        {/* Mobile Menu */}
        {expanded && (
          <nav className="block lg:hidden pt-4 pb-6 bg-white border border-gray-200 rounded-md shadow-md">
            <div className="flow-root">
              <div className="flex flex-col px-6 space-y-1">
                <a href="#" className="inline-flex py-2 text-base font-medium text-black cursor-pointer transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Features</a>
                <a href="#" className="inline-flex py-2 text-base font-medium text-black cursor-pointer transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Solutions</a>
                <a href="#" className="inline-flex py-2 text-base font-medium text-black cursor-pointer transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Resources</a>
                <a href="#" className="inline-flex py-2 text-base font-medium text-black cursor-pointer transition-all duration-200 hover:text-blue-600 focus:text-blue-600">Pricing</a>
              </div>
            </div>

            <div className="px-6 mt-6">
              <a href="#" className="inline-flex justify-center px-4 py-3 text-base font-semibold text-white bg-blue-600 border border-transparent rounded-md items-center transition-all duration-200 hover:bg-blue-700 focus:bg-blue-700 cursor-pointer" role="button">
                Get Started
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
