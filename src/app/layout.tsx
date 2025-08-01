import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "./test.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "ONDI - Office for Nigerian Digital Innovation",
  description: "Empowering Nigeria's digital future through innovation, talent development, and strategic partnerships. A special purpose vehicle of NITDA.",
  keywords: "Nigeria, digital innovation, NITDA, ONDI, startups, technology, innovation hub, government",
  authors: [{ name: "Office for Nigerian Digital Innovation" }],
  creator: "ONDI",
  publisher: "Federal Republic of Nigeria",
  robots: "index, follow",
  openGraph: {
    title: "ONDI - Office for Nigerian Digital Innovation",
    description: "Empowering Nigeria's digital future through innovation, talent development, and strategic partnerships.",
    type: "website",
    locale: "en_NG",
    siteName: "ONDI",
  },
  twitter: {
    card: "summary_large_image",
    title: "ONDI - Office for Nigerian Digital Innovation",
    description: "Empowering Nigeria's digital future through innovation, talent development, and strategic partnerships.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <Navigation />
        <div className="pt-24">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
