import React from "react";
import { FaBullhorn, FaHandshake, FaRocket, FaMoneyBillWave, FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Opportunities() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Opportunities</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Discover funding, partnerships, and growth opportunities in Nigeria's innovation ecosystem
                    </p>
                </div>
            </section>

            {/* Open Calls */}
            <section id="open-calls" className="py-16 bg-background">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <FaBullhorn className="text-4xl text-accent mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-primary mb-4">Open Calls</h2>
                        <p className="text-lg text-neutral max-w-3xl mx-auto">
                            Current funding opportunities, accelerator programs, and innovation challenges
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Featured Opportunity */}
                        <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-accent">
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-primary mb-2">iHatch Accelerator 2025</h3>
                                    <div className="flex items-center gap-4 text-sm text-neutral">
                                        <span className="flex items-center gap-1">
                                            <FaCalendarAlt />
                                            Deadline: March 15, 2025
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <FaMapMarkerAlt />
                                            Lagos, Nigeria
                                        </span>
                                    </div>
                                </div>
                                <div className="mt-4 md:mt-0">
                                    <span className="bg-accent text-white px-4 py-2 rounded-full text-sm font-medium">
                                        Funding: Up to ₦5M
                                    </span>
                                </div>
                            </div>
                            <p className="text-neutral mb-6">
                                Our flagship 12-week accelerator program for early-stage startups. Get mentorship, funding, and access to our innovation hubs across Nigeria.
                            </p>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded">FinTech</span>
                                <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded">HealthTech</span>
                                <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded">EdTech</span>
                                <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded">AgriTech</span>
                            </div>
                            <div className="flex gap-4">
                                <button className="bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-primary transition-colors">
                                    Apply Now
                                </button>
                                <button className="border border-accent text-accent px-6 py-3 rounded-lg font-medium hover:bg-accent hover:text-white transition-colors">
                                    Learn More
                                </button>
                            </div>
                        </div>

                        {/* Other Opportunities */}
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h3 className="text-xl font-bold text-primary mb-2">Digital Innovation Grant</h3>
                                <p className="text-sm text-neutral mb-4">Grant funding for innovative digital solutions addressing social challenges</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-accent font-medium">₦2M - ₦10M</span>
                                    <span className="text-sm text-neutral">Deadline: April 30</span>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg shadow-lg p-6">
                                <h3 className="text-xl font-bold text-primary mb-2">AI/ML Challenge</h3>
                                <p className="text-sm text-neutral mb-4">Competition for AI and machine learning solutions in agriculture</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-accent font-medium">₦1M Prize Pool</span>
                                    <span className="text-sm text-neutral">Deadline: May 15</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partnerships */}
            <section id="partnerships" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <FaHandshake className="text-4xl text-accent mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-primary mb-4">Partnership Opportunities</h2>
                        <p className="text-lg text-neutral max-w-3xl mx-auto">
                            Collaborate with ONDI to drive innovation across Nigeria
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-background rounded-lg p-6 text-center">
                            <div className="text-3xl mb-4">🏢</div>
                            <h3 className="text-xl font-bold text-primary mb-3">Corporate Partnerships</h3>
                            <p className="text-neutral mb-6">Partner with us to access innovation talent, pilot new technologies, and drive digital transformation</p>
                            <ul className="text-sm text-neutral space-y-2 mb-6">
                                <li>• Innovation pilots and proof of concepts</li>
                                <li>• Access to startup ecosystem</li>
                                <li>• Technology scouting</li>
                                <li>• Corporate accelerator programs</li>
                            </ul>
                            <button className="bg-accent text-white px-6 py-2 rounded-lg font-medium hover:bg-primary transition-colors">
                                Partner with Us
                            </button>
                        </div>

                        <div className="bg-background rounded-lg p-6 text-center">
                            <div className="text-3xl mb-4">🏛️</div>
                            <h3 className="text-xl font-bold text-primary mb-3">Public Sector</h3>
                            <p className="text-neutral mb-6">Collaborate with government agencies to implement digital innovation initiatives</p>
                            <ul className="text-sm text-neutral space-y-2 mb-6">
                                <li>• Policy development and implementation</li>
                                <li>• Digital government initiatives</li>
                                <li>• Public-private partnerships</li>
                                <li>• Capacity building programs</li>
                            </ul>
                            <button className="bg-accent text-white px-6 py-2 rounded-lg font-medium hover:bg-primary transition-colors">
                                Collaborate
                            </button>
                        </div>

                        <div className="bg-background rounded-lg p-6 text-center">
                            <div className="text-3xl mb-4">🌍</div>
                            <h3 className="text-xl font-bold text-primary mb-3">Development Partners</h3>
                            <p className="text-neutral mb-6">Work with international organizations to scale impact across Africa</p>
                            <ul className="text-sm text-neutral space-y-2 mb-6">
                                <li>• Multi-country innovation programs</li>
                                <li>• Technical assistance projects</li>
                                <li>• Knowledge sharing initiatives</li>
                                <li>• Capacity development programs</li>
                            </ul>
                            <button className="bg-accent text-white px-6 py-2 rounded-lg font-medium hover:bg-primary transition-colors">
                                Get Involved
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* For Startups */}
            <section id="startups" className="py-16 bg-background">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <FaRocket className="text-4xl text-accent mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-primary mb-4">For Startups</h2>
                        <p className="text-lg text-neutral max-w-3xl mx-auto">
                            Multiple pathways to engage with ONDI and accelerate your startup journey
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Join Our Ecosystem</h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">1</div>
                                    <div>
                                        <h4 className="font-medium text-primary">Register in Our Directory</h4>
                                        <p className="text-sm text-neutral">Get visibility and access to our network</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">2</div>
                                    <div>
                                        <h4 className="font-medium text-primary">Access Resources</h4>
                                        <p className="text-sm text-neutral">Utilize our guides, templates, and toolkits</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5">3</div>
                                    <div>
                                        <h4 className="font-medium text-primary">Apply for Programs</h4>
                                        <p className="text-sm text-neutral">Join our accelerators and funding programs</p>
                                    </div>
                                </div>
                            </div>
                            <button className="w-full bg-accent text-white py-3 rounded-lg font-medium hover:bg-primary transition-colors mt-6">
                                Get Started
                            </button>
                        </div>

                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Support Available</h3>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="text-accent">💰</div>
                                    <span className="text-neutral">Funding opportunities up to ₦50M</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-accent">👥</div>
                                    <span className="text-neutral">Mentorship from industry experts</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-accent">🏢</div>
                                    <span className="text-neutral">Access to innovation hubs</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-accent">🤝</div>
                                    <span className="text-neutral">Partnership and networking opportunities</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="text-accent">📈</div>
                                    <span className="text-neutral">Market access and scaling support</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* For Investors */}
            <section id="investors" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <FaMoneyBillWave className="text-4xl text-accent mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-primary mb-4">For Investors</h2>
                        <p className="text-lg text-neutral max-w-3xl mx-auto">
                            Access curated deal flow and investment opportunities in Nigeria's startup ecosystem
                        </p>
                    </div>

                    <div className="bg-background rounded-lg p-8">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-6">Investment Pipeline Access</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                                        <span className="text-neutral">Curated startup deal flow</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                                        <span className="text-neutral">Due diligence support</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                                        <span className="text-neutral">Investment readiness programs</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-2 h-2 bg-accent rounded-full"></div>
                                        <span className="text-neutral">Co-investment opportunities</span>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-primary mb-6">Portfolio Statistics</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold text-accent">800+</div>
                                        <div className="text-sm text-neutral">Startups in Pipeline</div>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold text-accent">₦2B+</div>
                                        <div className="text-sm text-neutral">Total Funding Raised</div>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold text-accent">150+</div>
                                        <div className="text-sm text-neutral">Active Investors</div>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 text-center">
                                        <div className="text-2xl font-bold text-accent">85%</div>
                                        <div className="text-sm text-neutral">Success Rate</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center mt-8">
                            <button className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors">
                                Join Investor Network
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
