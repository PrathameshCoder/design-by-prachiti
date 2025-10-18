import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-nunito-sans",
});


export const metadata: Metadata = {
  title: "Design by Prachiti",
  description: "Welcome to Design by Prachiti - Discovering design in every detail.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${nunito.variable} antialiased`}
      >
        <Navbar />
        {children}
        
      </body>
    </html>
  );
}
