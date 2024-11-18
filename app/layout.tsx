import type { Metadata } from "next";
//import localFont from "next/font/local";
import "./globals.css";
import {inter } from '@/app/fonts/fonts';

/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
 */
export const metadata: Metadata = {
  title: "Learning Database",
  description: "My learning database",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={ `${inter.className} antialiased`}
      >  
        {children}
       
      </body>
    </html>
  );
}
