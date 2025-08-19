import React from "react";
import { FaRocket, FaFlask, FaUsers, FaMoneyBillWave, FaBuilding, FaGraduationCap } from "react-icons/fa";

export default function Programmes() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Programmes</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Comprehensive support programs designed to accelerate Nigeria's digital innovation ecosystem
                    </p>
                </div>
            </section>

            {/* Startup Support */}
            <section id="startup-support" className="py-16 bg-background">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <FaRocket className="text-4xl text-accent mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-primary mb-4">Startup Support</h2>
                        <p className="text-lg text-neutral max-w-3xl mx-auto">
                            End-to-end support for startups at every stage of their journey
                        </p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold text-primary mb-3">Early Stage Support</h3>
                            <p className="text-neutral mb-4">Idea validation, market research, and business model development</p>
                            <ul className="text-sm text-neutral space-y-1">
                                <li>• Business model canvas workshops</li>
                                <li>• Market research assistance</li>
                                <li>• Prototype development support</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold text-primary mb-3">Growth Stage</h3>
                            <p className="text-neutral mb-4">Scaling operations, team building, and market expansion</p>
                            <ul className="text-sm text-neutral space-y-1">
                                <li>• Operations optimization</li>
                                <li>• Team scaling strategies</li>
                                <li>• Market expansion planning</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                            <h3 className="text-xl font-bold text-primary mb-3">Scale Stage</h3>
                            <p className="text-neutral mb-4">Investment readiness, partnerships, and international expansion</p>
                            <ul className="text-sm text-neutral space-y-1">
                                <li>• Investment readiness programs</li>
                                <li>• Strategic partnerships</li>
                                <li>• International market entry</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Accelerator Programmes */}
            <section id="accelerators" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <FaFlask className="text-4xl text-accent mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-primary mb-4">Accelerator Programmes</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-background rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">iHatch Accelerator</h3>
                            <p className="text-neutral mb-6">Our flagship 12-week intensive accelerator program for high-potential startups</p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    <span className="text-sm">Mentorship from industry experts</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    <span className="text-sm">Up to ₦5M funding opportunity</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    <span className="text-sm">Access to ONDI innovation hubs</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-background rounded-lg p-8">
                            <h3 className="text-2xl font-bold text-primary mb-4">Sector-Specific Programs</h3>
                            <p className="text-neutral mb-6">Specialized accelerator tracks for key sectors</p>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    <span className="text-sm">FinTech Accelerator</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    <span className="text-sm">HealthTech Innovation Program</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                                    <span className="text-sm">AgriTech Development Track</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Regulatory Sandbox */}
            <section id="regulatory-sandbox" className="py-16 bg-background">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <FaFlask className="text-4xl text-accent mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-primary mb-4">Regulatory Sandbox</h2>
                        <p className="text-lg text-neutral max-w-3xl mx-auto">
                            A safe space for startups to test innovative solutions with regulatory support and guidance
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-8">
                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="text-center">
                                <div className="text-3xl mb-3">🔬</div>
                                <h3 className="font-bold text-primary mb-2">Test Environment</h3>
                                <p className="text-sm text-neutral">Controlled environment for testing new products and services</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-3">📋</div>
                                <h3 className="font-bold text-primary mb-2">Regulatory Support</h3>
                                <p className="text-sm text-neutral">Direct guidance from regulatory bodies and policy makers</p>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl mb-3">⚡</div>
                                <h3 className="font-bold text-primary mb-2">Fast-Track Approval</h3>
                                <p className="text-sm text-neutral">Accelerated approval processes for validated solutions</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Other sections continue with similar structure... */}

            {/* CTA Section */}
            <section className="py-16 bg-primary text-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Ready to Join Our Programs?</h2>
                    <p className="text-xl mb-8">Take the next step in your innovation journey</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/opportunities#open-calls" className="bg-cta hover:bg-orange text-white px-8 py-3 rounded-lg font-medium transition-colors">
                            Apply Now
                        </a>
                        <a href="/contact" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
                            Learn More
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
