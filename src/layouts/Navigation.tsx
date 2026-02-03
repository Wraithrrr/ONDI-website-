import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const ONDI_LOGO_SRC =
  'https://ondi.nitda.gov.ng/wp-content/uploads/2015/12/cropped-ONDI-favicon-1.jpg';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goToHash = (newHash: string) => {
    if (typeof window === 'undefined') return;
    window.location.hash = newHash;
    window.scrollTo({ top: 0, behavior: 'auto' });
    setMobileOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-[#FFFFFC]/95 backdrop-blur transition-all duration-300 ${
        isScrolled ? 'shadow-md' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 md:py-4">
        <div className="flex items-center gap-4">
          {/* Logo */}
          <button
            type="button"
            onClick={() => goToHash('#/')}
            className="flex items-center gap-3"
          >
            <div className="h-12 w-12 md:h-14 md:w-14 rounded-xl overflow-hidden border border-[#E2E5E0] bg-white shadow-sm flex items-center justify-center">
              <img
                src={ONDI_LOGO_SRC}
                alt="ONDI Logo"
                className="h-full w-full object-cover"
              />
            </div>
          </button>

          {/* Desktop Navigation (centered group) */}
          <div className="hidden lg:flex flex-1 ml-auto items-center justify-center gap-10 text-base">
            <button
              type="button"
              onClick={() => goToHash('#/')}
              className="relative text-[#284A26] hover:text-[#134C28] font-medium transition-colors"
            >
              Home
            </button>

            <button
              type="button"
              onClick={() => goToHash('#/about')}
              className="relative text-[#284A26] hover:text-[#134C28] font-medium transition-colors"
            >
              About
            </button>
            <button
              type="button"
              onClick={() => goToHash('#/programs')}
              className="relative text-[#284A26] hover:text-[#134C28] font-medium transition-colors"
            >
              Our Programs
            </button>
             
            {/* More dropdown */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 text-[#284A26] hover:text-[#134C28] font-medium transition-colors"
              >
                More
                <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-200 absolute top-full right-0 mt-2 w-72 rounded-lg shadow-xl py-3 bg-white border border-gray-100 z-50">
                {[
                  { label: 'More News', hash: '#/news' },
                  { label: 'Contact Us', hash: '#/contact' },
                  { label: 'Our Impact ', hash: '#/impact' },
                  { label: 'Resources', hash: '#/resources' },
                ].map((item) => (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => goToHash(item.hash)}
                    className="w-full text-left block px-6 py-3 text-sm text-gray-700 cursor-pointer transition-colors hover:bg-[#FFF8E5] hover:text-[#134C28]"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* CTA Button */}
           
          </div>

          {/* Mobile Menu Icon */}
          <button
            className="ml-auto lg:hidden p-2 rounded-md bg-white/80 border border-transparent hover:border-[#D1D5DB] shadow-sm"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-[#284A26]" />
            ) : (
              <Menu className="w-6 h-6 text-[#284A26]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden border-t border-gray-200 bg-[#FFFFFC]/98 backdrop-blur-sm transition-all duration-200 ${
          mobileOpen ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-6 py-4 space-y-3 text-base">
          <button
            type="button"
            onClick={() => goToHash('#/')}
            className="block w-full text-left py-2 text-[#284A26] hover:text-[#134C28]"
          >
            Home
          </button>
          <button
            type="button"
            onClick={() => goToHash('#/about')}
            className="block w-full text-left py-2 text-[#284A26] hover:text-[#134C28]"
          >
            About
          </button>
          <button
            type="button"
            onClick={() => goToHash('#/news')}
            className="block w-full text-left py-2 text-[#284A26] hover:text-[#134C28]"
          >
            News
          </button>
          <button
            type="button"
            onClick={() => goToHash('#/impact')}
            className="block w-full text-left py-2 text-[#284A26] hover:text-[#134C28]"
          >
            Impact
          </button>
          <button
            type="button"
            onClick={() => goToHash('#/directory')}
            className="block w-full text-left py-2 text-[#284A26] hover:text-[#134C28]"
          >
            Innovation Directory
          </button>
          <button
            type="button"
            onClick={() => goToHash('#/programs')}
            className="block w-full text-left py-2 text-[#284A26] hover:text-[#134C28]"
          >
            Our Programs
          </button>
          <button
            type="button"
            onClick={() => goToHash('#/resources')}
            className="block w-full text-left py-2 text-[#284A26] hover:text-[#134C28]"
          >
            Resources
          </button>
          <button
            type="button"
            onClick={() => goToHash('#/contact')}
            className="mt-2 w-full px-4 py-2.5 rounded-lg bg-gradient-to-r from-[#E8B923] to-[#D4A520] text-white text-sm font-semibold hover:from-[#F5C842] hover:to-[#E8B923] transition-all shadow-md shadow-[#E8B923]/30"
          >
            Partner with Us
          </button>
        </div>
      </div>
    </nav>
  );
}
