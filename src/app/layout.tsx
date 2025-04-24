import type { Metadata } from "next";
import { Poppins } from "next/font/google"; 
import "./globals.css";
import { Toaster } from 'sonner';

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Admass International Group",
  description: "Powering the Future of Investment in Saudi Arabia and Beyond.",
  icons:{
    icon: "/favicon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}> 
      <body>{children}</body>
      <Toaster position="top-center" richColors />
    </html>
  );
}
