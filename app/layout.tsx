import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const dynamic = 'force-static';

export const metadata: Metadata = {
  metadataBase: new URL("https://manik-dingra.in"),
  title: {
    default: "Daniel Merchan",
    template: "%s | Daniel Merchan",
  },
  description: "Full-stack software engineer specializing in building exceptional digital experiences. Explore my projects, skills, and journey in web development.",
  keywords: [
    "Daniel Merchan",
    "Software Engineer",
    "Full Stack Developer",
    "Web Development",
    "Frontend Development",
    "Backend Development",
    "React Developer",
    "Next.js Developer",
    "Daniel Merchan Portfolio",
    "Daniel Merchan's Portfolio",
    "Daniel Merchan's Website",
    "Daniel Merchan's Personal Website",
    "Daniel Merchan's Personal Portfolio",
    "Daniel Merchan's Personal Projects",
    "Daniel Merchan's Personal Experience",
    "Personal Portfolio",
    "Personal Projects",
    "Portfolio",
  ],
  authors: [{ name: "Daniel Merchan" }],
  creator: "Daniel Merchan",
  publisher: "Daniel Merchan",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manik-dingra.in",
    siteName: "Daniel Merchan Portfolio",
    title: "Daniel Merchan | Full-stack Developer",
    description: "Full-stack software engineer crafting exceptional digital experiences",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Daniel Merchan - Full-stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Merchan | Software Engineer",
    description: "Full-stack software engineer crafting exceptional digital experiences",
    images: ["/og-image.png"],
    creator: "@manik_dingra",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#2E6160" }, // green light
    { media: "(prefers-color-scheme: dark)", color: "#122727" }, // green dark
  ],
  category: "portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable}`}>
      <body className={`${manrope.variable}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}