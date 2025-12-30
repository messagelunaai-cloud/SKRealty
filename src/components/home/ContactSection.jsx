import { useForm, ValidationError } from '@formspree/react';
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react'

export default function ContactSection() {
  const [state, handleSubmit] = useForm("xaqykjpl");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  // Reset form data when submission succeeds
  React.useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: '', email: '', phone: '', message: '' })
    }
  }, [state.succeeded])

  const contactInfo = [
    {
      icon: Phone,
      label: 'Mobile',
      value: '571-663-3911',
      href: 'tel:5716633911',
    },
    {
      icon: Phone,
      label: 'Office',
      value: '703-636-7300',
      href: 'tel:7036367300',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'Sabeen3911@gmail.com',
      href: 'mailto:Sabeen3911@gmail.com',
    },
  ]

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-[#B40101] font-semibold tracking-wide uppercase text-sm">Get In Touch</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 mb-6">
            Let&apos;s Start Your Journey
          </h2>
          <p className="text-lg text-gray-600">
            Ready to buy, sell, or explore your options? Reach out today for a free consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-gray-50 rounded-3xl p-8 lg:p-10">
              {state.succeeded ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">I&apos;ll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                      <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Smith"
                        className="h-12 rounded-xl border-gray-200 focus:border-[#B40101] focus:ring-[#B40101]"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@example.com"
                        className="h-12 rounded-xl border-gray-200 focus:border-[#B40101] focus:ring-[#B40101]"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 123-4567"
                      className="h-12 rounded-xl border-gray-200 focus:border-[#B40101] focus:ring-[#B40101]"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your real estate goals..."
                      className="min-h-[140px] rounded-xl border-gray-200 focus:border-[#B40101] focus:ring-[#B40101] resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={state.submitting}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white h-14 rounded-xl text-lg shadow-lg shadow-orange-500/25 transition-all duration-300 hover:shadow-xl disabled:opacity-50"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {state.submitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h3>

              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-5 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                    <item.icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="font-semibold text-gray-900">{item.value}</p>
                  </div>
                </motion.a>
              ))}

              <div className="mt-8 p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl text-white">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold mb-2">Keller Williams McLean/Great Falls</p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      6820 Elm Street, Ste. 100
                      <br />
                      McLean, VA 22101
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
