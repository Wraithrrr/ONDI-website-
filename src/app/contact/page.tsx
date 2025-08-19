'use client';

import { motion } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  BuildingOffice2Icon,
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  CalendarDaysIcon
} from '@heroicons/react/24/outline';

const contactInfo = [
  {
    title: 'Main Office',
    address: 'NCAIR Building, Plot 1475, Cadastral Zone B09, Wuye District, Abuja, FCT',
    phone: '+234 803 XXX XXXX',
    email: 'info@ondi.gov.ng',
    hours: 'Mon - Fri: 8:00 AM - 6:00 PM',
    icon: BuildingOffice2Icon
  }
];

const departments = [
  {
    name: 'Program Applications',
    email: 'programs@ondi.gov.ng',
    phone: '+234 803 XXX XXXX',
    description: 'Apply to accelerator programs, grants, and competitions',
    icon: UserGroupIcon
  },
  {
    name: 'Partnership Opportunities',
    email: 'partnerships@ondi.gov.ng',
    phone: '+234 803 XXX XXXX',
    description: 'Corporate partnerships and strategic collaborations',
    icon: ChatBubbleLeftRightIcon
  },
  {
    name: 'Media & Communications',
    email: 'media@ondi.gov.ng',
    phone: '+234 803 XXX XXXX',
    description: 'Press inquiries, interviews, and media relations',
    icon: CalendarDaysIcon
  }
];

const officeHours = [
  { day: 'Monday - Thursday', hours: '8:00 AM - 6:00 PM' },
  { day: 'Friday', hours: '8:00 AM - 5:00 PM' },
  { day: 'Saturday', hours: 'Closed' },
  { day: 'Sunday', hours: 'Closed' }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-nitda-900 to-nitda-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
              Contact <span className="text-nitda-400">Us</span>
            </h1>
            <p className="text-xl text-nitda-100 max-w-3xl mx-auto mb-8">
              Ready to transform your innovation ideas into reality? Get in touch with our team
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-nitda-400 text-nitda-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-nitda-300 transition-colors">
                Schedule a Meeting
              </button>
              <button className="border-2 border-nitda-400 text-nitda-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-nitda-400 hover:text-nitda-900 transition-colors">
                Call Us Now
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nitda-500 focus:border-nitda-500"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nitda-500 focus:border-nitda-500"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nitda-500 focus:border-nitda-500"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nitda-500 focus:border-nitda-500"
                    placeholder="+234 XXX XXX XXXX"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Organization/Company
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nitda-500 focus:border-nitda-500"
                    placeholder="Enter your organization name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nitda-500 focus:border-nitda-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="program-inquiry">Program Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="media">Media Inquiry</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="general">General Question</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nitda-500 focus:border-nitda-500"
                    placeholder="Tell us about your inquiry or how we can help you..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="mr-3 h-4 w-4 text-nitda-600 focus:ring-nitda-500 border-gray-300 rounded"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-700">
                    Subscribe to our newsletter for updates on programs and opportunities
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-nitda-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-nitda-700 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  We&apos;re here to support your innovation journey. Reach out to us through any of the following channels:
                </p>
              </div>

              {/* Main Contact Info */}
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-nitda-50 rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <info.icon className="w-8 h-8 text-nitda-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">{info.title}</h3>
                  </div>
                  <div className="space-y-3 text-gray-700">
                    <div className="flex items-start">
                      <MapPinIcon className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                      <span>{info.address}</span>
                    </div>
                    <div className="flex items-center">
                      <PhoneIcon className="w-5 h-5 text-gray-400 mr-3" />
                      <span>{info.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <EnvelopeIcon className="w-5 h-5 text-gray-400 mr-3" />
                      <span>{info.email}</span>
                    </div>
                    <div className="flex items-center">
                      <ClockIcon className="w-5 h-5 text-gray-400 mr-3" />
                      <span>{info.hours}</span>
                    </div>
                  </div>
                </div>
              ))}

              {/* Department Contacts */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Department Contacts</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex items-center mb-2">
                        <dept.icon className="w-5 h-5 text-nitda-600 mr-2" />
                        <h4 className="font-semibold text-gray-900">{dept.name}</h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{dept.description}</p>
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center text-gray-700">
                          <EnvelopeIcon className="w-4 h-4 mr-2" />
                          {dept.email}
                        </div>
                        <div className="flex items-center text-gray-700">
                          <PhoneIcon className="w-4 h-4 mr-2" />
                          {dept.phone}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Office Hours */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Office Hours</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="space-y-2">
                    {officeHours.map((schedule, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-700">{schedule.day}</span>
                        <span className="font-semibold text-gray-900">{schedule.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Visit Our Office</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Located at the heart of Nigeria&apos;s innovation ecosystem in Abuja
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="aspect-[16/9]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.9999999999995!2d7.4666666666666666!3d9.06666666666667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDQnMDAuMCJOIDfCsDI4JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1641234567890!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ONDI Office Location - NCAIR Wuye, Abuja"
              ></iframe>
            </div>
            <div className="p-6 bg-white">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <MapPinIcon className="w-8 h-8 text-nitda-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-sm text-gray-600">NCAIR Building, Wuye District, Abuja</p>
                </div>
                <div className="text-center">
                  <PhoneIcon className="w-8 h-8 text-nitda-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-sm text-gray-600">+234 803 XXX XXXX</p>
                </div>
                <div className="text-center">
                  <ClockIcon className="w-8 h-8 text-nitda-600 mx-auto mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Hours</h3>
                  <p className="text-sm text-gray-600">Mon - Fri: 8:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-nitda-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Start Your Innovation Journey?
            </h2>
            <p className="text-xl text-nitda-100 mb-8">
              Choose the best way to connect with our team
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-lg font-semibold text-white mb-2">Quick Call</h3>
                <p className="text-nitda-100 text-sm mb-4">Speak directly with our team</p>
                <button className="bg-white text-nitda-600 px-4 py-2 rounded-lg font-semibold hover:bg-nitda-50 transition-colors">
                  Call Now
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <div className="text-4xl mb-4">📅</div>
                <h3 className="text-lg font-semibold text-white mb-2">Schedule Meeting</h3>
                <p className="text-nitda-100 text-sm mb-4">Book a consultation</p>
                <button className="bg-white text-nitda-600 px-4 py-2 rounded-lg font-semibold hover:bg-nitda-50 transition-colors">
                  Book Now
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-lg font-semibold text-white mb-2">Live Chat</h3>
                <p className="text-nitda-100 text-sm mb-4">Chat with our support team</p>
                <button className="bg-white text-nitda-600 px-4 py-2 rounded-lg font-semibold hover:bg-nitda-50 transition-colors">
                  Start Chat
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
