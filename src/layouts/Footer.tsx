import ondiLogo from '/f6991c91763ebb8cb799949ee0cb356bdb7928ad.png';

export function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 border-t border-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          
          {/* Logo + Description */}
          <div>
            <div className="mb-4">
              <img src={ondiLogo} alt="ONDI Logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 text-sm mb-6 text-justify">
              Office for Nigerian Digital Innovation - Empowering Nigeria's digital future 
              through innovation, collaboration, and excellence.
            </p>
            <div className="flex gap-2">
              <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-gray-700 transition-all cursor-pointer">
                <span className="text-sm text-white">X</span>
              </div>
              <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center hover:bg-gray-700 transition-all cursor-pointer">
                <span className="text-sm text-white">in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#E8B923] transition-colors">About</a></li>
              <li><a href="#programs" className="hover:text-[#E8B923] transition-colors">Programs</a></li>
              <li><a href="#" className="hover:text-[#E8B923] transition-colors">News</a></li>
              <li><a href="#contact" className="hover:text-[#E8B923] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-[#E8B923] transition-colors">Innovation Directory</a></li>
              <li><a href="#" className="hover:text-[#E8B923] transition-colors">Impact Stories</a></li>
              <li><a href="#" className="hover:text-[#E8B923] transition-colors">Resources</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                4th Floor, National Center for Artificial Intelligence and Robotics Building, Wuye, Ankuru <br /> Abuja, Nigeria
              </li>
              <li>+234 813 738 37890</li>
              <li>info@ondi.gov.ng</li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>© 2025 Office for Nigerian Digital Innovation. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
