import React from "react";
import { FaRocket, FaHandshake, FaMoneyBillWave, FaLightbulb, FaFlask, FaUsers, FaArrowRight, FaPlay } from "react-icons/fa";

export default function Home() {
    return (
        <div className="bg-white">
            {/* Impact Stats Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Driving Nigeria's Digital Transformation</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            ONDI is accelerating innovation across Nigeria through strategic partnerships, funding, and world-class programs
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 mb-2">1,200+</div>
                            <div className="text-gray-600">Startups Supported</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-green-600 mb-2">₦2B+</div>
                            <div className="text-gray-600">Funds Mobilized</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-purple-600 mb-2">150+</div>
                            <div className="text-gray-600">Strategic Partners</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-orange-600 mb-2">25+</div>
                            <div className="text-gray-600">Innovation Hubs</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Programs */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Key Programs</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Comprehensive support ecosystem designed to accelerate innovation at every stage
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white rounded-xl shadow-lg p-8 border hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                                <FaRocket className="text-2xl text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">iHatch Accelerator</h3>
                            <p className="text-gray-600 mb-6">
                                12-week intensive program providing mentorship, funding up to ₦5M, and access to our innovation network.
                            </p>
                            <a href="/programmes#accelerators" className="text-blue-600 font-medium flex items-center gap-2 hover:text-blue-700">
                                Learn More <FaArrowRight className="text-sm" />
                            </a>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8 border hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                                <FaFlask className="text-2xl text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Regulatory Sandbox</h3>
                            <p className="text-gray-600 mb-6">
                                Safe environment to test innovative solutions with regulatory support and fast-track approval processes.
                            </p>
                            <a href="/programmes#regulatory-sandbox" className="text-green-600 font-medium flex items-center gap-2 hover:text-green-700">
                                Learn More <FaArrowRight className="text-sm" />
                            </a>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8 border hover:shadow-xl transition-shadow duration-300">
                            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                                <FaUsers className="text-2xl text-purple-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Talent Development</h3>
                            <p className="text-gray-600 mb-6">
                                Comprehensive training programs, fellowships, and bootcamps to build Nigeria's digital workforce.
                            </p>
                            <a href="/programmes#talent" className="text-purple-600 font-medium flex items-center gap-2 hover:text-purple-700">
                                Learn More <FaArrowRight className="text-sm" />
                            </a>
                        </div>
                    </div>
                    <div className="text-center">
                        <a href="/programmes" className="inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
                            View All Programs
                            <FaArrowRight />
                        </a>
                    </div>
                </div>
            </section>

            {/* Success Stories Preview */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Success Stories</h2>
                        <p className="text-lg text-gray-600">See how ONDI is transforming Nigeria's innovation landscape</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center text-white font-bold">P</div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Paystack</h3>
                                    <p className="text-sm text-gray-600">FinTech Unicorn</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">
                                From ONDI accelerator to Africa's payment infrastructure leader, processing billions in transactions.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">F</div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Flutterwave</h3>
                                    <p className="text-sm text-gray-600">Global Payments</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Scaled from Nigerian startup to global payments technology company serving millions worldwide.
                            </p>
                        </div>

                        <div className="bg-white rounded-xl p-6 shadow-lg">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center text-white font-bold">A</div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Andela</h3>
                                    <p className="text-sm text-gray-600">Talent Platform</p>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">
                                Building Africa's tech talent ecosystem, connecting developers with global opportunities.
                            </p>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <a href="/impact" className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-medium border border-blue-600 hover:bg-blue-50 transition-colors duration-200">
                            View All Success Stories
                            <FaArrowRight />
                        </a>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-blue-600">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Ready to Build the Future?</h2>
                    <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                        Join Nigeria's largest innovation ecosystem and accelerate your startup journey
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/opportunities#open-calls" className="inline-flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
                            Apply to Programs
                            <FaRocket />
                        </a>
                        <a href="/directory" className="inline-flex items-center gap-3 border-2 border-white text-white px-8 py-4 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors duration-200">
                            Explore Ecosystem
                            <FaArrowRight />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
