import React from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-2xl font-bold mb-1">Sabeen Kausar</div>
              <div className="text-amber-500 font-medium">Luxury Real Estate Specialist</div>
            </div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Providing focused, high-level real estate guidance throughout
              McLean, Great Falls, and Northern Virginia&apos;s most sought-after communities.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-amber-600 transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-slate-400 hover:text-amber-500 transition-colors">
                  About Sabeen
                </a>
              </li>
              <li>
                <a href="#services" className="text-slate-400 hover:text-amber-500 transition-colors">
                  Buyer &amp; Seller Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-slate-400 hover:text-amber-500 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-400 hover:text-amber-500 transition-colors">
                  Back to Top
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-400 text-sm">Call Directly</div>
                  <a href="tel:+15716633911" className="font-medium hover:text-amber-500 transition-colors">
                    (571) 663-3911
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-400 text-sm">Email</div>
                  <a href="mailto:sabeen@kw.com" className="font-medium hover:text-amber-500 transition-colors">
                    sabeen@kw.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-slate-400 text-sm">Office</div>
                  <div className="font-medium">
                    1355 Beverly Rd<br />
                    McLean, VA 22101
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Brokerage Info */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="text-red-600 font-bold text-xl">
                KELLER WILLIAMS
              </div>
              <div className="text-slate-500 text-sm">
                McLean/Great Falls
              </div>
            </div>
            <div className="text-center lg:text-right">
              <p className="text-slate-500 text-sm leading-relaxed max-w-xl">
                Each Keller Williams office is independently owned and operated.
                Equal Housing Opportunity.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
            <div>
              © {new Date().getFullYear()} Sabeen Kausar. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-amber-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}