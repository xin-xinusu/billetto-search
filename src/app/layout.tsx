import type { Metadata } from "next";
import localFont from "next/font/local";
import { Open_Sans } from 'next/font/google';

import "./globals.css";
import Header from "@/components/Layout/Header";

const openSans = Open_Sans({
  subsets: ['latin'], // Adjust subsets based on your needs
  weight: ['400', '600', '700'], // Specify weights if needed
  display: 'swap', // Ensures font is displayed properly while loading
});

export const metadata: Metadata = {
  title: "Billetto Search",
  description: "Technical Task for Billetto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{backgroundColor: '#1b1d1e'}}>
      <body className={`${openSans.className}`} style={{backgroundColor: '#1b1d1e'}}>
        <Header />
        {children}
      </body>
    </html>
  );
}

