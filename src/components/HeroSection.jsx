import React from "react";
import { FaRocket, FaUsers, FaGlobe, FaArrowRight } from "react-icons/fa";

export default function HeroSection() {
    return (
        <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Hero Content */}
                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center bg-blue-800/50 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-blue-400/30">
                            <span className="text-blue-200 text-sm font-medium">🇳🇬 Nigeria's Digital Innovation Hub</span>
                        </div>

                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                            Accelerating
                            <span className="block bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                                Nigeria's Digital Future
                            </span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed max-w-2xl">
                            Empowering entrepreneurs, fostering innovation, and building the foundation for Nigeria's digital transformation through strategic partnerships and world-class programs.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <a
                                href="/opportunities#open-calls"
                                className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                            >
                                <FaRocket className="text-xl" />
                                Join Our Programs
                            </a>

                            <a
                                href="/directory"
                                className="inline-flex items-center gap-3 border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200"
                            >
                                <FaGlobe className="text-xl" />
                                Explore Ecosystem
                            </a>

                            <a
                                href="/about"
                                className="inline-flex items-center gap-3 text-blue-200 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-200"
                            >
                                Learn More
                                <FaArrowRight className="text-lg" />
                            </a>
                        </div>
                    </div>

                    {/* Hero Visual/Stats */}
                    <div className="relative">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <h3 className="text-2xl font-bold mb-6 text-center">Our Impact</h3>
                            <div className="grid grid-cols-2 gap-6">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-green-400 mb-2">1,200+</div>
                                    <div className="text-blue-100 text-sm">Startups Supported</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-yellow-400 mb-2">₦2B+</div>
                                    <div className="text-blue-100 text-sm">Funds Mobilized</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-purple-400 mb-2">150+</div>
                                    <div className="text-blue-100 text-sm">Partners</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-orange-400 mb-2">25+</div>
                                    <div className="text-blue-100 text-sm">Innovation Hubs</div>
                                </div>
                            </div>

                            {/* Featured Success Story */}
                            <div className="mt-8 pt-6 border-t border-white/20">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                                        P
                                    </div>
                                    <div>
                                        <h4 className="font-bold">Paystack Success</h4>
                                        <p className="text-blue-200 text-sm">From ONDI accelerator to unicorn status</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg className="w-full h-16 text-white fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
                </svg>
            </div>
        </section>
    );
}
