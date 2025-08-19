import React, { useState } from "react";
import { FaSearch, FaRocket, FaHandshake, FaBuilding, FaMoneyBillWave, FaTrophy } from "react-icons/fa";

export default function Directory() {
    const [activeFilter, setActiveFilter] = useState("all");

    const categories = [
        { id: "all", label: "All", icon: "🌍", count: "1200+" },
        { id: "startups", label: "Startups", icon: "🚀", count: "800+" },
        { id: "partners", label: "Partners", icon: "🤝", count: "150+" },
        { id: "hubs", label: "Hubs & Accelerators", icon: "🏢", count: "50+" },
        { id: "investors", label: "Investors", icon: "💰", count: "100+" },
        { id: "success", label: "Success Stories", icon: "🏆", count: "200+" }
    ];

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">Innovation Directory</h1>
                    <p className="text-xl max-w-3xl mx-auto mb-8">
                        A comprehensive database of Nigeria's digital innovation ecosystem
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-2xl mx-auto relative">
                        <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search startups, partners, investors..."
                            className="w-full pl-12 pr-4 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-cta"
                        />
                        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-cta hover:bg-orange text-white px-6 py-2 rounded-lg font-medium transition-colors">
                            Search
                        </button>
                    </div>
                </div>
            </section>

            {/* Filter Categories */}
            <section className="py-12 bg-background">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setActiveFilter(category.id)}
                                className={`p-6 rounded-lg text-center transition-all duration-200 ${activeFilter === category.id
                                        ? 'bg-accent text-white shadow-lg transform scale-105'
                                        : 'bg-white hover:bg-gray-50 text-gray-700 hover:shadow-md'
                                    }`}
                            >
                                <div className="text-2xl mb-2">{category.icon}</div>
                                <h3 className="font-bold text-sm mb-1">{category.label}</h3>
                                <p className="text-xs opacity-75">{category.count}</p>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Directory Content */}
            <section className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    {/* Startups Section */}
                    {(activeFilter === "all" || activeFilter === "startups") && (
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-8">
                                <FaRocket className="text-2xl text-accent" />
                                <h2 className="text-3xl font-bold text-primary">Startups</h2>
                            </div>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {/* Sample startup cards */}
                                <div className="bg-background rounded-lg p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white font-bold">P</div>
                                        <div>
                                            <h3 className="font-bold text-primary">Paystack</h3>
                                            <p className="text-sm text-neutral">FinTech</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-neutral mb-4">Payment infrastructure for businesses in Africa</p>
                                    <div className="flex gap-2">
                                        <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">Series A</span>
                                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Lagos</span>
                                    </div>
                                </div>

                                <div className="bg-background rounded-lg p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold">F</div>
                                        <div>
                                            <h3 className="font-bold text-primary">Flutterwave</h3>
                                            <p className="text-sm text-neutral">FinTech</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-neutral mb-4">Global payment technology company</p>
                                    <div className="flex gap-2">
                                        <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">Unicorn</span>
                                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Lagos</span>
                                    </div>
                                </div>

                                <div className="bg-background rounded-lg p-6 hover:shadow-lg transition-shadow">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-12 h-12 bg-cta rounded-lg flex items-center justify-center text-white font-bold">A</div>
                                        <div>
                                            <h3 className="font-bold text-primary">Andela</h3>
                                            <p className="text-sm text-neutral">EdTech</p>
                                        </div>
                                    </div>
                                    <p className="text-sm text-neutral mb-4">Global talent accelerator for developers</p>
                                    <div className="flex gap-2">
                                        <span className="px-2 py-1 bg-accent/10 text-accent text-xs rounded">Growth</span>
                                        <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">Lagos</span>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-8">
                                <button className="bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-primary transition-colors">
                                    View All Startups (800+)
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Partners Section */}
                    {(activeFilter === "all" || activeFilter === "partners") && (
                        <div className="mb-16">
                            <div className="flex items-center gap-3 mb-8">
                                <FaHandshake className="text-2xl text-accent" />
                                <h2 className="text-3xl font-bold text-primary">Partners</h2>
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                                {/* Partner logos */}
                                <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow text-center">
                                    <div className="h-16 bg-gray-100 rounded mb-2 flex items-center justify-center text-gray-500 font-bold">NITDA</div>
                                    <p className="text-xs text-neutral">Government</p>
                                </div>
                                <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow text-center">
                                    <div className="h-16 bg-gray-100 rounded mb-2 flex items-center justify-center text-gray-500 font-bold">Microsoft</div>
                                    <p className="text-xs text-neutral">Technology</p>
                                </div>
                                <div className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow text-center">
                                    <div className="h-16 bg-gray-100 rounded mb-2 flex items-center justify-center text-gray-500 font-bold">Google</div>
                                    <p className="text-xs text-neutral">Technology</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Add similar sections for other categories */}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-primary text-white">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-3xl font-bold mb-4">Join Our Innovation Directory</h2>
                    <p className="text-xl mb-8">Be part of Nigeria's largest innovation ecosystem</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/contact" className="bg-cta hover:bg-orange text-white px-8 py-3 rounded-lg font-medium transition-colors">
                            Submit Your Startup
                        </a>
                        <a href="/opportunities#partnerships" className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors">
                            Become a Partner
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
