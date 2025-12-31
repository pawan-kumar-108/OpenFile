"use client";

import { Shield } from "lucide-react";
import { FOOTER_SECTIONS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="container mx-auto">
        {/* Footer Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-6 h-6 text-primary" />
              <span className="font-bold">Policy Navigator</span>
            </div>
            <p className="text-sm text-gray-400">
              Empowering citizens with AI-powered guidance through government
              benefits and policies.
            </p>
          </div>

          {/* Footer Sections */}
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-400">
          <p>
            © 2024 Policy Navigator. A Public Good Initiative. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
