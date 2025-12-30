import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, MapPin, Handshake, Quote, Star } from 'lucide-react';

const trustBadges = [
  { icon: Shield, title: 'Market Expert', description: 'Deep local knowledge' },
  { icon: Target, title: 'Top Negotiator', description: 'Best deals for clients' },
  { icon: MapPin, title: 'Local Specialist', description: 'Northern Virginia focus' },
  { icon: Handshake, title: 'Trusted Advisor', description: 'Straightforward guidance' },
];

const testimonials = [
  {
    quote: 'Sabeen made our home buying experience absolutely seamless. Her knowledge of McLean was invaluable.',
    author: 'The Richardson Family',
    location: 'McLean, VA',
    rating: 5,
  },
  {
    quote: 'Professional, responsive, and incredibly knowledgeable. Sabeen sold our home above asking in just 5 days.',
    author: 'Michael & Sarah Chen',
    location: 'Great Falls, VA',
    rating: 5,
  },
  {
    quote: 'Working with Sabeen felt like having a trusted friend guide us through the entire process.',
    author: 'Dr. Amanda Foster',
    location: 'Vienna, VA',
    rating: 5,
  },
];

export default function BrandStory() {
  return (
    <section id="about" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-slate-50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-amber-50 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-500" />
            <span className="text-amber-600 font-medium tracking-widest text-sm uppercase">
              Why Choose Sabeen
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            A Commitment to <span className="font-semibold">Excellence</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Every client, every home, and every move matters. The focus is simple:
            honest advice, clear expectations, and a calm, organized process from
            first conversation to closing.
          </p>
        </motion.div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
          {/* Left - Story */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="relative">
              <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-500 to-red-700 rounded-full" />
              <div className="pl-8 space-y-6">
                <h3 className="text-2xl font-semibold text-slate-900">
                  A Personal Approach to Luxury Real Estate
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  Over the years, Sabeen has helped buyers and sellers across McLean,
                  Great Falls, Vienna, and nearby communities move with confidence.
                  The goal is always the same: understand what matters most to the
                  client, then build a plan around it.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Living and working in Northern Virginia means staying close to the
                  market every day—touring homes, tracking new inventory, and speaking
                  with local owners and agents. That on-the-ground experience is what
                  clients rely on when making big decisions.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {[
                { value: '$1B+', label: 'Listings Taken Volume' },
                { value: '$935,796', label: 'Average Sale Price' },
                { value: '$1B+ ', label: 'Closed Sales In 4 of the Past 6 Years' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-slate-50 rounded-2xl"
                >
                  <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661925668034-7019cd82306e?q=80"
                    alt="Luxury Home Interior"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1733259836890-a688a61866f6?q=80"
                    alt="Luxury Home Exterior"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661884424253-08db7c7758ce?q=80"
                    alt="Elegant Kitchen"
                    className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1639751787355-bbc3ed1fd639?q=80"
                    alt="Modern Living Room"
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
            {/* Decorative Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-500 to-red-700 rounded-2xl -z-10" />
          </motion.div>
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
        >
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl p-6 shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-100 to-amber-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <badge.icon className="w-7 h-7 text-amber-600" />
              </div>
              <h4 className="font-semibold text-slate-900 mb-1">{badge.title}</h4>
              <p className="text-sm text-slate-500">{badge.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-light text-slate-900">
              What Clients <span className="font-semibold">Say</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative bg-gradient-to-br from-slate-50 to-white rounded-2xl p-8 shadow-lg shadow-slate-100/50 border border-slate-100"
              >
                <Quote className="absolute top-6 right-6 w-10 h-10 text-amber-200" />
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-slate-900">{testimonial.author}</div>
                  <div className="text-sm text-slate-500">{testimonial.location}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}