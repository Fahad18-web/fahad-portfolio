import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Muhammad Fahad — Frontend & MERN Developer",
    template: "%s | Muhammad Fahad",
  },
  description:
    "Software Engineering student and developer building modern, high-performing web experiences. Landing pages, React apps, UI redesigns, and MERN stack applications. Based in Lahore, Pakistan.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "MERN Stack",
    "Landing Page",
    "Web Development",
    "Lahore",
    "Pakistan",
    "Muhammad Fahad",
  ],
  authors: [{ name: "Muhammad Fahad" }],
  creator: "Muhammad Fahad",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Muhammad Fahad — Frontend & MERN Developer",
    description:
      "Building modern, high-performing web experiences. Landing pages, React, UI improvements, and MERN applications.",
    siteName: "Muhammad Fahad Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Fahad — Frontend & MERN Developer",
    description:
      "Building modern, high-performing web experiences with React and the MERN stack.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-[#F5F5F5]">
        {children}
      </body>
    </html>
  );
}
