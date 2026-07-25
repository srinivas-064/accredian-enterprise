'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Solutions', href: '#solutions' },
    { label: 'Framework', href: '#framework' },
    { label: 'Programs', href: '#programs' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`text-2xl font-extrabold tracking-tight ${
                isScrolled ? 'text-[#1B3B7D]' : 'text-white'
              }`}
            >
              accr
              <span className="bg-gradient-to-r from-[#1B3B7D] to-[#F97316] text-transparent bg-clip-text">
                e
              </span>
              dian
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#F97316] ${
                  isScrolled ? 'text-gray-700' : 'text-gray-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-[#1B3B7D] to-blue-600 hover:from-blue-700 hover:to-blue-600 text-white px-6 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled ? 'text-gray-800' : 'text-white'
              }`}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex justify-end md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          ></div>

          {/* Sliding Menu */}
          <div className="relative w-full max-w-sm bg-white h-full flex flex-col overflow-y-auto shadow-xl animate-[slideIn_0.3s_ease-out]">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-100">
              <span className="text-2xl font-extrabold tracking-tight text-[#1B3B7D]">
                accr<span className="text-[#F97316]">e</span>dian
              </span>
              <button
                type="button"
                className="rounded-md p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 focus:outline-none"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="px-4 py-6 space-y-6 sm:px-6">
              <nav className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-lg font-medium text-gray-900 hover:text-[#F97316] transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <div className="pt-6 border-t border-gray-100">
                <button className="w-full bg-gradient-to-r from-[#1B3B7D] to-blue-600 text-white px-4 py-3 rounded-full font-medium transition-all shadow-md">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <style jsx global>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}
