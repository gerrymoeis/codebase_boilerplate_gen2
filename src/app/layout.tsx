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
  title: "Next.js Boilerplate Gen2 - Project Starter",
  description: "A feature-rich Next.js boilerplate with TypeScript, Tailwind CSS, ESLint, Prettier, Supabase integration, and more. Get your project up and running quickly!",
  // Anda bisa menambahkan metadata lain di sini seperti openGraph, icons, dll.
  // openGraph: {
  //   title: 'Next.js Boilerplate Gen2',
  //   description: 'Kickstart your Next.js projects.',
  //   images: ['/og-image.png'], // Pastikan Anda memiliki gambar ini di public/
  // },
  // icons: {
  //   icon: '/favicon.ico', // Pastikan Anda memiliki favicon ini di public/
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
