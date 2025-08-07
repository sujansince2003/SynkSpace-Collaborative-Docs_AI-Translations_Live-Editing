/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useUser } from "@clerk/nextjs";
import { SignUpButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "../ui/button";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation"; // Add this import

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const closeMenu = () => setIsMenuOpen(false);
    if (isMenuOpen) {
      document.addEventListener("click", closeMenu);
    }
    return () => document.removeEventListener("click", closeMenu);
  }, [isMenuOpen]);

  const { user } = useUser();
  const pathname = usePathname();
  const isLandingPage = pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? "shadow-md" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <h1 className="text-xl font-bold">SynkSpace</h1>
          </Link>

          {/* Desktop Navigation - Only show on landing page */}
          {isLandingPage && (
            <ul className="hidden md:flex items-center space-x-8">
              <li>
                <Link
                  href="#features"
                  className="text-base font-semibold hover:text-gray-600 transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-base font-semibold hover:text-gray-600 transition-colors"
                >
                  How it works
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-base font-semibold hover:text-gray-600 transition-colors"
                >
                  Reviews
                </Link>
              </li>
              <li>
                <Link
                  href="#faqs"
                  className="text-base font-semibold hover:text-gray-600 transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          )}

          {/* Desktop Right Section */}
          <div className="hidden md:flex items-center space-x-4">
            {user && isLandingPage && (
              <Link href="/docs">
                <Button className="bg-black px-3 py-1 text-base text-white rounded-md hover:bg-gray-800 transition-colors">
                  Go to Docs
                </Button>
              </Link>
            )}
            <SignedOut>
              <Link href="/docs">
                <Button className="bg-black px-4 py-2 text-base text-white rounded-md hover:bg-gray-800 transition-colors">
                  Try Now
                </Button>
              </Link>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && isLandingPage && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="#features"
                className="block px-3 py-2 text-base font-semibold hover:bg-gray-100 rounded-md transition-colors"
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="block px-3 py-2 text-base font-semibold hover:bg-gray-100 rounded-md transition-colors"
              >
                How it works
              </Link>
              <Link
                href="#testimonials"
                className="block px-3 py-2 text-base font-semibold hover:bg-gray-100 rounded-md transition-colors"
              >
                Reviews
              </Link>
              <Link
                href="#faqs"
                className="block px-3 py-2 text-base font-semibold hover:bg-gray-100 rounded-md transition-colors"
              >
                FAQs
              </Link>
              <div className="px-3 py-2">
                <SignedOut>
                  <Link href="/docs">
                    <Button className="w-full bg-black px-4 py-2 text-base text-white rounded-md hover:bg-gray-800 transition-colors">
                      Try Now
                    </Button>
                  </Link>
                </SignedOut>
                <SignedIn>
                  <UserButton />
                </SignedIn>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
