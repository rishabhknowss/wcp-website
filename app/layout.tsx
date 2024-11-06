import type { Metadata } from "next";

import localFont from "next/font/local";
import "./globals.css";
import { LayoutProps } from "@/.next/types/app/layout";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Wedding clicks Photography",
  description: "Best wedding photography in town",
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
     
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
