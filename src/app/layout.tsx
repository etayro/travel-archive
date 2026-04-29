import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import I18nProvider from "@/components/layout/I18nProvider";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel Archive",
  description: "A personal travel archive — countries, trips, and memories.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-950 text-white">
        <I18nProvider>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
        </I18nProvider>
      </body>
    </html>
  );
}
