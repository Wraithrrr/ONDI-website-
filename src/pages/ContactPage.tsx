// components/ContactPage.tsx
import { WaveBackground } from '../components/WaveBackground';
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  ArrowRight,
} from 'lucide-react';

const SOCIAL_LINKS = {
  twitter: 'https://twitter.com/ONDINigeria',
  facebook: 'https://facebook.com/ONDINigeria',
  linkedin: 'https://www.linkedin.com/company/ondi-nigeria',
  instagram: 'https://www.instagram.com/ondinigeria',
};

export function ContactPage() {
  return (
    <main className="bg-white">
      {/* HERO / HEADER */}
      <section className="relative pt-32 pb-16 px-6 bg-gradient-to-br from-[#081F11] via-[#0F3A20] to-[#134C28] overflow-hidden">
        <WaveBackground />

        {/* soft glows */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-[-4rem] w-72 h-72 bg-[#32965B]/25 rounded-full blur-3xl" />
          <div className="absolute bottom-[-4rem] left-[-2rem] w-80 h-80 bg-[#3EBF75]/20 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-green-100/80 mb-3">
            Contact ONDI
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            We&apos;re here to support Nigeria&apos;s innovators.
          </h1>
          <p className="text-sm md:text-base text-green-50/90 max-w-2xl mx-auto leading-relaxed">
            Reach out to the Office for Nigerian Digital Innovation (ONDI) for partnerships,
            programme enquiries, and ecosystem collaborations.
          </p>
        </div>
      </section>

      {/* MAIN CONTACT CONTENT */}
      <section className="relative -mt-10 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl bg-white shadow-[0_20px_55px_rgba(0,0,0,0.25)] border border-[#D6E3D4] overflow-hidden">
            <div className="w-1.5 md:w-2 bg-gradient-to-b from-[#E8B923] via-[#F5C842] to-[#134C28]" />

            <div className="flex-1 px-6 py-7 md:px-8 md:py-8">
              {/* header inside card */}
              <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
                <div>
                  <p className="text-xs md:text-sm font-semibold tracking-[0.25em] uppercase text-[#134C28] mb-2">
                    
                  </p>
                  <h2 className="text-xl md:text-2xl font-bold text-[#081F11]">
                    Contact Us.
                  </h2>
                </div>
                <p className="text-xs md:text-sm text-gray-600 max-w-sm">
                  Use the form to send us a message or connect via our official channels below.
                </p>
              </div>

              {/* GRID: left = form, right = compact info + map */}
              <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
                {/* LEFT – message form (compact) */}
                <div className="space-y-4">
                  <h3 className="text-sm md:text-base font-semibold text-[#081F11] mb-1">
                    Send us a message
                  </h3>
                  <form className="space-y-3">
                    <div>
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#134C28]/30 focus:border-[#134C28]"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#134C28]/30 focus:border-[#134C28]"
                        placeholder="you@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        className="w-full rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#134C28]/30 focus:border-[#134C28]"
                        placeholder="How can ONDI support you?"
                      />
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        className="w-full min-h-[120px] rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-[#134C28]/30 focus:border-[#134C28]"
                        placeholder="Share a brief description of your enquiry or proposal."
                      />
                    </div>

                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#E8B923] to-[#D4A520] text-white text-sm font-semibold hover:from-[#F5C842] hover:to-[#E8B923] transition-all shadow-md shadow-[#E8B923]/30 hover:shadow-lg hover:shadow-[#E8B923]/40"
                    >
                      Submit enquiry
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>

                {/* RIGHT – address, hours, contacts + map in ONE compact block */}
                <div className="space-y-4">
                  {/* contact details */}
                  <div className="rounded-xl border border-[#D6E3D4] bg-[#F7FBF8] p-4 space-y-3">
                    {/* address */}
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#FB7185] to-[#F97373] flex items-center justify-center flex-shrink-0 shadow-sm">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h4 className="text-xs md:text-sm font-semibold text-[#081F11] mb-1">
                          Office Address
                        </h4>
                        <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                          4th Floor, National Center for Artificial Intelligence and Robotics
                          (NCAIR) Building, Wuye, Ankuru 900108, Federal Capital Territory, Nigeria.
                        </p>
                      </div>
                    </div>

                    {/* email + phone in one row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#DC2626] to-[#F97373] flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Mail className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-[#081F11] mb-0.5">Email</h4>
                          <p className="text-xs text-gray-700">info@ondi.gov.ng</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#1D4ED8] flex items-center justify-center flex-shrink-0 shadow-sm">
                          <Phone className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-[#081F11] mb-0.5">Phone</h4>
                          <p className="text-xs text-gray-700">+234 813 738 37890</p>
                        </div>
                      </div>
                    </div>

                    {/* office hours */}
                    <div className="pt-2 border-t border-[#D6E3D4]/70">
                      <p className="text-[11px] font-semibold text-gray-700 mb-1">
                        Office Hours
                      </p>
                      <p className="text-[11px] text-gray-600">
                        Monday – Friday, 9:00am – 5:00pm (WAT) • Excluding public holidays.
                      </p>
                    </div>
                  </div>

                  {/* map preview */}
                  <div className="rounded-xl border border-[#D6E3D4] overflow-hidden bg-white shadow-sm">
                    <div className="h-32 md:h-40 relative">
                      <iframe
                        title="NCAIR Location Map"
                        src="https://www.google.com/maps?q=National+Centre+for+Artificial+Intelligence+and+Robotics,+Wuye,+Abuja,+Nigeria&output=embed"
                        className="w-full h-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      />
                    </div>
                    <div className="px-4 py-3 flex items-center justify-between gap-3">
                      <span className="text-[10px] md:text-xs text-gray-600">
                        View directions to the NCAIR building on Google Maps.
                      </span>
                      <a
                        href="https://www.google.com/maps/place/National+Centre+for+Artificial+Intelligence+and+Robotics,+Wuye,+Abuja,+Nigeria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] md:text-xs font-semibold text-[#134C28] hover:text-[#0b3017]"
                      >
                        Open in Maps →
                      </a>
                    </div>
                  </div>

                  {/* socials with real links */}
                  <div className="flex flex-wrap items-center justify-start gap-3">
                    <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
                      Connect
                    </span>
                    <div className="flex gap-2">
                      <a
                        href={SOCIAL_LINKS.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-[#0F172A] flex items-center justify-center hover:scale-105 transition-transform"
                        aria-label="ONDI on X (Twitter)"
                      >
                        <Twitter className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={SOCIAL_LINKS.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-[#1D4ED8] flex items-center justify-center hover:scale-105 transition-transform"
                        aria-label="ONDI on Facebook"
                      >
                        <Facebook className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={SOCIAL_LINKS.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-[#0A66C2] flex items-center justify-center hover:scale-105 transition-transform"
                        aria-label="ONDI on LinkedIn"
                      >
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                      <a
                        href={SOCIAL_LINKS.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-[#F97316] via-[#DB2777] to-[#2563EB] flex items-center justify-center hover:scale-105 transition-transform"
                        aria-label="ONDI on Instagram"
                      >
                        <Instagram className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
