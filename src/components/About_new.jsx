import React from "react";
import { FaUser, FaFlag, FaEye, FaBullseye, FaLightbulb } from "react-icons/fa";

export default function About() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">About ONDI</h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        The Office for Nigerian Digital Innovation - Empowering Nigeria's digital future through innovation, talent, and partnerships.
                    </p>
                </div>
            </section>

            {/* Meet the NC */}
            <section id="leadership" className="py-16 bg-background">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <FaUser className="text-4xl text-accent mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-primary mb-4">Meet the National Coordinator</h2>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-primary mb-2">Dr. Yakubu Musa</h3>
                            <p className="text-accent font-medium mb-4">National Coordinator, ONDI</p>
                            <blockquote className="text-lg text-neutral italic leading-relaxed">
                                "At ONDI, we are committed to building a thriving digital innovation ecosystem for Nigeria's future. Our mission is to empower entrepreneurs, foster partnerships, and accelerate the digital transformation of our great nation."
                            </blockquote>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mandate */}
            <section id="mandate" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <FaFlag className="text-4xl text-accent mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-primary mb-4">Our Mandate</h2>
                    </div>
                    <div className="bg-background rounded-lg p-8 max-w-4xl mx-auto">
                        <p className="text-lg text-neutral leading-relaxed text-center">
                            To coordinate, implement, and accelerate digital innovation policy, capacity building, and startup support across Nigeria. We serve as the central hub for Nigeria's digital innovation ecosystem, bridging the gap between policy and implementation.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section id="mission" className="py-16 bg-background">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <FaEye className="text-4xl text-accent mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-primary mb-4">Mission & Vision</h2>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="text-center mb-6">
                                <FaBullseye className="text-3xl text-accent mx-auto mb-3" />
                                <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                            </div>
                            <p className="text-neutral leading-relaxed text-center">
                                Empower Nigeria's digital future through innovation, talent, and partnerships. We foster an ecosystem where entrepreneurs can thrive and contribute to national development.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-8">
                            <div className="text-center mb-6">
                                <FaEye className="text-3xl text-accent mx-auto mb-3" />
                                <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                            </div>
                            <p className="text-neutral leading-relaxed text-center">
                                To be Africa's leading digital innovation hub, setting the standard for innovation excellence and driving technological advancement across the continent.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Do */}
            <section id="focus-areas" className="py-16 bg-white">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-12">
                        <FaLightbulb className="text-4xl text-accent mx-auto mb-4" />
                        <h2 className="text-3xl font-bold text-primary mb-4">What We Do</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="bg-background rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                            <div className="text-2xl text-accent mb-3">🚀</div>
                            <h3 className="font-bold text-primary mb-2">Startup Support</h3>
                            <p className="text-sm text-neutral">Comprehensive acceleration and mentorship programs</p>
                        </div>
                        <div className="bg-background rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                            <div className="text-2xl text-accent mb-3">📋</div>
                            <h3 className="font-bold text-primary mb-2">Policy Implementation</h3>
                            <p className="text-sm text-neutral">Driving digital innovation policy and advocacy</p>
                        </div>
                        <div className="bg-background rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                            <div className="text-2xl text-accent mb-3">👥</div>
                            <h3 className="font-bold text-primary mb-2">Capacity Building</h3>
                            <p className="text-sm text-neutral">Developing Nigeria's digital talent pipeline</p>
                        </div>
                        <div className="bg-background rounded-lg p-6 text-center hover:shadow-lg transition-shadow">
                            <div className="text-2xl text-accent mb-3">🤝</div>
                            <h3 className="font-bold text-primary mb-2">Partnership Facilitation</h3>
                            <p className="text-sm text-neutral">Connecting stakeholders and enabling collaboration</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
