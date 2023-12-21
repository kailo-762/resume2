import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ReactNode } from "react";
import "./globals.css";

import { Navbar } from "@/app/_components/navbar";

export const metadata: Metadata = {
  title: "Kai Jonas",
  description: "Just a fish",
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  // --- RENDER ---

  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-3xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />

          {children}
        </main>
      </body>
    </html>
  );
}
