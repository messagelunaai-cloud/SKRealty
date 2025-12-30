import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Calendar, MapPin, Award, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1920&q=80&fit=crop"
          alt="Luxury Home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-amber-500/10 to-red-800/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-slate-500/10 to-slate-700/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            <div className="space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-2"
              >
                <div className="h-px w-12 bg-gradient-to-r from-amber-500 to-red-700" />
                <span className="text-amber-500 font-medium tracking-widest text-sm uppercase">
                  Keller Williams McLean/Great Falls
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight"
              >
                Your Northern Virginia{' '}
                <span className="font-semibold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                  Luxury Home
                </span>{' '}
                Specialist
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-slate-300 leading-relaxed max-w-xl"
            >
              Guiding clients through McLean, Great Falls, and surrounding markets
              with expertise, discretion, and exceptional care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-6 text-lg rounded-full shadow-2xl shadow-amber-900/30 transition-all duration-300 hover:scale-105"
                onClick={scrollToContact}
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book a Private Consultation
              </Button>
              <a href="tel:+15716633911">
                <Button
                  size="lg"
                  className="bg-slate-900/80 hover:bg-slate-900 text-white px-8 py-6 text-lg rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  (571) 663-3911
                </Button>
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-12 pt-8 border-t border-white/10"
            >
              {[
                { value: 'Over 1,000', label: 'Families Served' },
                { value: '$1B+', label: 'Closed Sales Volume' },
                { value: '890', label: 'Listings Taken' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-400 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 via-red-700/20 to-amber-500/20 rounded-3xl blur-2xl" />

              {/* Glass Card */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl max-w-sm">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden ring-4 ring-amber-500/30">
                    <img
                      src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693ab4e598142137e8e6eda8/7b231892a_491955810_23907280568875662_3693371082470697198_n.jpg"
                      alt="Sabeen Kausar"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-lg">
                    <Star className="w-4 h-4 inline mr-1" />
                    Top Producer
                  </div>
                </div>

                {/* Info */}
                <div className="text-center space-y-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Sabeen Kausar</h3>
                    <p className="text-amber-400 font-medium">Luxury Real Estate Specialist</p>
                  </div>

                  <div className="flex items-center justify-center gap-2 text-slate-300">
                    <MapPin className="w-4 h-4 text-amber-500" />
                    <span>McLean & Great Falls, VA</span>
                  </div>

                  <div className="flex justify-center gap-3 pt-4">
                    {[
                      { icon: Award, label: 'Certified' },
                      { icon: Star, label: 'Top Rated' },
                    ].map((badge, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 rounded-full border border-white/10"
                      >
                        <badge.icon className="w-4 h-4 text-amber-500" />
                        <span className="text-xs text-slate-300">{badge.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Keller Williams Badge */}
                <div className="mt-6 pt-6 border-t border-white/10 text-center">
                  <div className="text-red-600 font-bold text-lg">KELLER WILLIAMS</div>
                  <div className="text-slate-400 text-sm">McLean/Great Falls</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 bg-amber-500 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}