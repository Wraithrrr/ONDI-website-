
import React, { useState } from "react";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);

    const navLinks = [
        { href: "/", label: "Home" },
        {
            href: "/about",
            label: "About ONDI",
            dropdown: [
                { href: "/about#leadership", label: "Meet the NC" },
                { href: "/about#mandate", label: "Our Mandate" },
                { href: "/about#mission", label: "Mission & Vision" },
                { href: "/about#focus-areas", label: "What We Do" }
            ]
        },
        {
            href: "/programmes",
            label: "Programmes",
            dropdown: [
                { href: "/programmes#startup-support", label: "Startup Support" },
                { href: "/programmes#accelerators", label: "Accelerator Programmes" },
                { href: "/programmes#regulatory-sandbox", label: "Regulatory Sandbox" },
                { href: "/programmes#funding", label: "Funding & Incentives" },
                { href: "/programmes#infrastructure", label: "Innovation Infrastructure" },
                { href: "/programmes#talent", label: "Talent Development" }
            ]
        },
        { href: "/directory", label: "Innovation Directory" },
        {
            href: "/opportunities",
            label: "Opportunities",
            dropdown: [
                { href: "/opportunities#open-calls", label: "Open Calls" },
                { href: "/opportunities#partnerships", label: "Partnerships" },
                { href: "/opportunities#startups", label: "For Startups" },
                { href: "/opportunities#investors", label: "For Investors" }
            ]
        },
        { href: "/impact", label: "Impact & Stories" },
        {
            href: "/news",
            label: "News & Media",
            dropdown: [
                { href: "/news#articles", label: "Articles & Blog" },
                { href: "/news#press", label: "Press Releases" },
                { href: "/news#media-gallery", label: "Media Gallery" },
                { href: "/news#newsletter", label: "Newsletter" }
            ]
        },
        {
            href: "/resources",
            label: "Resources",
            dropdown: [
                { href: "/resources#policies", label: "Policy Documents" },
                { href: "/resources#guides", label: "Innovation Guides" },
                { href: "/resources#toolkits", label: "Toolkits & Templates" },
                { href: "/resources#faqs", label: "FAQs" }
            ]
        },
        { href: "/contact", label: "Contact" },
    ];
    return (
        <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Brand */}
                    <a href="/" className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1 transition-all duration-200 hover:bg-gray-50">
                        <div className="h-10 w-10 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center shadow-md">
                            <span className="text-white text-lg font-bold">O</span>
                        </div>
                        <span className="text-xl font-bold text-gray-900 tracking-tight select-none">ONDI</span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex items-center flex-1 justify-center">
                        <ul className="flex items-center gap-0">
                            {navLinks.map((link) => (
                                <li key={link.href} className="relative group">
                                    <a
                                        href={link.href}
                                        className="flex items-center gap-1 px-4 py-2 text-gray-700 font-medium text-sm hover:text-blue-600 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md"
                                        onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                                        onMouseLeave={() => setActiveDropdown(null)}
                                    >
                                        {link.label}
                                        {link.dropdown && <FaChevronDown className="text-xs text-gray-500 ml-1" />}
                                    </a>

                                    {/* Dropdown Menu */}
                                    {link.dropdown && (
                                        <div
                                            className={`absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 transition-all duration-200 ${activeDropdown === link.label ? 'opacity-100 visible transform translate-y-0' : 'opacity-0 invisible transform -translate-y-2'
                                                }`}
                                            onMouseEnter={() => setActiveDropdown(link.label)}
                                            onMouseLeave={() => setActiveDropdown(null)}
                                        >
                                            {link.dropdown.map((dropdownLink) => (
                                                <a
                                                    key={dropdownLink.href}
                                                    href={dropdownLink.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
                                                >
                                                    {dropdownLink.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* CTA Buttons */}
                    <div className="hidden xl:flex items-center gap-3">
                        <a
                            href="/opportunities/open-calls"
                            className="px-4 py-2 text-blue-600 font-medium text-sm border border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Apply Now
                        </a>
                        <a
                            href="/contact"
                            className="px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Partner with Us
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                        onClick={() => setMobileMenuOpen((open) => !open)}
                        className="xl:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {mobileMenuOpen ? <FaTimes className="text-xl text-gray-700" /> : <FaBars className="text-xl text-gray-700" />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 xl:hidden">
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
                    <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl overflow-y-auto">
                        <div className="flex flex-col h-full">
                            {/* Mobile Header */}
                            <div className="flex items-center justify-between p-6 border-b border-gray-200">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 bg-gradient-to-br from-blue-600 to-green-600 rounded-xl flex items-center justify-center">
                                        <span className="text-white text-sm font-bold">O</span>
                                    </div>
                                    <span className="text-lg font-bold text-gray-900">ONDI</span>
                                </div>
                                <button
                                    aria-label="Close menu"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <FaTimes className="text-lg text-gray-600" />
                                </button>
                            </div>

                            {/* Mobile Navigation Links */}
                            <div className="flex-1 py-4">
                                <ul className="px-4 space-y-1">
                                    {navLinks.map((link) => (
                                        <li key={link.href}>
                                            {link.dropdown ? (
                                                <div>
                                                    <div className="px-4 py-2 text-gray-900 font-medium text-sm border-b border-gray-100">
                                                        {link.label}
                                                    </div>
                                                    {link.dropdown.map((dropdownLink) => (
                                                        <a
                                                            key={dropdownLink.href}
                                                            href={dropdownLink.href}
                                                            className="block px-6 py-2 text-gray-600 text-sm hover:bg-gray-100 hover:text-blue-600 transition-all duration-200"
                                                            onClick={() => setMobileMenuOpen(false)}
                                                        >
                                                            {dropdownLink.label}
                                                        </a>
                                                    ))}
                                                </div>
                                            ) : (
                                                <a
                                                    href={link.href}
                                                    className="block px-4 py-2 text-gray-700 font-medium text-sm hover:bg-gray-100 hover:text-blue-600 transition-all duration-200 rounded-lg"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {link.label}
                                                </a>
                                            )}
                                        </li>
                                    ))}
                                </ul>

                                {/* Mobile CTAs */}
                                <div className="px-4 mt-6 space-y-3">
                                    <a
                                        href="/opportunities/open-calls"
                                        className="block w-full text-center px-4 py-2 text-blue-600 font-medium text-sm border border-blue-600 rounded-lg hover:bg-blue-50 transition-all duration-200"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Apply Now
                                    </a>
                                    <a
                                        href="/contact"
                                        className="block w-full text-center px-4 py-2 bg-blue-600 text-white font-medium text-sm rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        Partner with Us
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
