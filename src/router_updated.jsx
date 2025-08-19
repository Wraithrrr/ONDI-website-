import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import NewsletterBanner from "./components/NewsletterBanner";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Programmes from "./components/Programmes";
import Directory from "./components/Directory";
import Opportunities from "./components/Opportunities";
import Impact from "./components/Impact";
import News from "./components/News";
import Resources from "./components/Resources";
import Contact from "./components/Contact";

// Layout component to wrap all pages
const Layout = ({ children }) => (
    <div className="font-sans bg-background min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
            {children}
        </main>
        <Footer />
    </div>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Layout>
                <HeroSection />
                <Home />
                <NewsletterBanner />
            </Layout>
        )
    },
    {
        path: "/about",
        element: (
            <Layout>
                <About />
            </Layout>
        )
    },
    {
        path: "/programmes",
        element: (
            <Layout>
                <Programmes />
            </Layout>
        )
    },
    {
        path: "/directory",
        element: (
            <Layout>
                <Directory />
            </Layout>
        )
    },
    {
        path: "/opportunities",
        element: (
            <Layout>
                <Opportunities />
            </Layout>
        )
    },
    {
        path: "/impact",
        element: (
            <Layout>
                <Impact />
            </Layout>
        )
    },
    {
        path: "/news",
        element: (
            <Layout>
                <News />
            </Layout>
        )
    },
    {
        path: "/resources",
        element: (
            <Layout>
                <Resources />
            </Layout>
        )
    },
    {
        path: "/contact",
        element: (
            <Layout>
                <Contact />
            </Layout>
        )
    }
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
