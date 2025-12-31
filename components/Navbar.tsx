"use client";

import { useState, useEffect } from "react";
import { Shield } from "lucide-react";
import { NAVIGATION_LINKS } from "@/lib/constants";
import { smoothScrollTo } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const elementId = href.replace("#", "");
    smoothScrollTo(elementId);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-dark-blue/90 backdrop-blur-md border-b border-white/10"
          : "bg-dark-blue/80 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 cursor-pointer">
            <Shield className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">Policy Navigator</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {NAVIGATION_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button className="hidden md:block bg-primary hover:bg-primary/90 text-dark-blue px-6 py-2 rounded-lg font-semibold transition-all">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {NAVIGATION_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="block w-full text-left hover:text-primary transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button className="w-full bg-primary hover:bg-primary/90 text-dark-blue px-6 py-2 rounded-lg font-semibold transition-all">
              Get Started
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
