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
    <html 
      lang="en" 
      style={{
        backgroundColor: '#1b1d1e',
        height: '100%',
        overflow: 'auto',
      }}
      className="js dark wf-roboto-n3-active wf-roboto-n4-active wf-roboto-i4-active wf-roboto-n5-active wf-roboto-n7-active wf-active"
    >
      <body 
        className={`${openSans.className} controller-events action-show theme-dark show-searchbar`} 
        style={{ backgroundColor: '#1b1d1e', height: '100%' }}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

