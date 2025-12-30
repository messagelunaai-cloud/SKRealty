import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Home', href: '#' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/50'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <a href="#" className="flex items-center gap-3">
              <div className="flex flex-col">
                <span className={`text-xl font-bold transition-colors ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
                  Sabeen Kausar
                </span>
                <span className={`text-xs font-medium transition-colors ${isScrolled ? 'text-amber-600' : 'text-amber-400'}`}>
                  Luxury Real Estate
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-medium transition-colors hover:text-amber-500 ${
                    isScrolled ? 'text-slate-700' : 'text-white/90'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+15716633911"
                className={`flex items-center gap-2 font-medium transition-colors ${
                  isScrolled ? 'text-slate-700' : 'text-white'
                }`}
              >
                <Phone className="w-4 h-4" />
                <span>(571) 663-3911</span>
              </a>
              <Button
                className={`rounded-full px-6 transition-all duration-300 ${
                  isScrolled
                    ? 'bg-amber-600 hover:bg-amber-700 text-white'
                    : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30'
                }`}
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Schedule Consultation
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors ${
                isScrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-md" onClick={() => setIsMobileMenuOpen(false)} />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-80 bg-white shadow-2xl"
            >
              <div className="p-6 pt-24">
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-lg font-medium text-slate-900 hover:bg-amber-50 hover:text-amber-600 rounded-xl transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-slate-100 space-y-4">
                  <a
                    href="tel:+15716633911"
                    className="flex items-center gap-3 px-4 py-3 text-slate-700"
                  >
                    <Phone className="w-5 h-5 text-amber-600" />
                    <span className="font-medium">(571) 663-3911</span>
                  </a>
                  <Button
                    className="w-full bg-amber-600 hover:bg-amber-700 text-white py-6 rounded-xl"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      const el = document.getElementById('contact');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Schedule Consultation
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}