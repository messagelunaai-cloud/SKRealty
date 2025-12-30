import React from 'react';
import { motion } from 'framer-motion';
import {
  Key, Search, MapPin, FileText,
  Camera, Palette, Target, Megaphone,
  ArrowRight, CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const buyerServices = [
  { icon: Search, title: 'Private Tours', desc: 'Exclusive access to luxury properties before they hit the market' },
  { icon: Key, title: 'Off-Market Opportunities', desc: 'Access to exclusive pocket listings and private sales' },
  { icon: MapPin, title: 'Neighborhood Insights', desc: 'Clear information on schools, amenities, and lifestyle' },
  { icon: FileText, title: 'Contract Support', desc: 'Step-by-step guidance through every document' },
];

const sellerServices = [
  { icon: Palette, title: 'Professional Staging', desc: 'Present your home at its best for buyers' },
  { icon: Camera, title: 'Premium Photography', desc: 'High-quality photos, video, and optional drone media' },
  { icon: Target, title: 'Pricing Strategy', desc: 'Data-based pricing and negotiation support' },
  { icon: Megaphone, title: 'Marketing Plan', desc: 'Online, social, and local exposure to qualified buyers' },
];

export default function ServicesSection() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-slate-50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-amber-50 to-transparent rounded-full blur-3xl" />

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
              Premium Services
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-slate-900 mb-6">
            Tailored <span className="font-semibold">Real Estate Services</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Buying or selling, the process is designed to be organized, clear, and
            focused on what matters most to you.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Buyer Services */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-slate-100 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center shadow-lg">
                  <Key className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">Buyer Services</h3>
                  <p className="text-slate-500">Support at every step</p>
                </div>
              </div>

              {/* Services List */}
              <div className="space-y-6">
                {buyerServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 group/item"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center group-hover/item:bg-amber-50 transition-colors">
                      <service.icon className="w-6 h-6 text-slate-600 group-hover/item:text-amber-600 transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{service.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-8 border-t border-slate-100">
                <Button
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 rounded-xl group/btn"
                  onClick={scrollToContact}
                >
                  Start Your Home Search
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Seller Services */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-amber-50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative bg-white rounded-3xl p-8 lg:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-100">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/25">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">Seller Services</h3>
                  <p className="text-slate-500">Strong, simple marketing</p>
                </div>
              </div>

              {/* Services List */}
              <div className="space-y-6">
                {sellerServices.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4 group/item"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center group-hover/item:bg-amber-100 transition-colors">
                      <service.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-1">{service.title}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{service.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-8 pt-8 border-t border-slate-100">
                <Button
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-6 rounded-xl shadow-lg shadow-amber-500/20 group/btn"
                  onClick={scrollToContact}
                >
                  Get Your Home Valuation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 lg:p-12"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-6">
              <div className="hidden sm:flex items-center gap-3">
                {[CheckCircle, CheckCircle, CheckCircle].map((Icon, index) => (
                  <div key={index} className="flex items-center gap-2 text-slate-300">
                    <Icon className="w-5 h-5 text-amber-500" />
                    <span className="text-sm">
                      {['Complimentary Consultation', 'Flexible Scheduling', 'No Pressure'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <Button
              size="lg"
              className="bg-white text-slate-900 hover:bg-amber-500 hover:text-white px-8 py-6 rounded-full font-semibold transition-all duration-300"
              onClick={scrollToContact}
            >
              Schedule Your Consultation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}