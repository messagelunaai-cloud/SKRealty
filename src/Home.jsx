import React from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/home/HeroSection';
import BrandStory from '@/components/home/BrandStory';
import ServicesSection from '@/components/home/ServicesSection';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/home/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <BrandStory />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
}