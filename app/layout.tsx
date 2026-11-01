import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ReactNode } from "react";
import "./globals.css";

import { Navbar } from "@/app/_components/navbar";

export const metadata: Metadata = {
    title: {
        default: "Kai Jonas",
        template: "%s · Kai Jonas",
    },
    description: "Frontend developer in Karlsruhe — portfolio, work history, blog, and travel notes.",
};

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

type RootLayoutProps = {
    children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html
            lang="en"
            className={cx(
                "bg-white text-black dark:bg-[#111010] dark:text-white",
                GeistSans.variable,
                GeistMono.variable
            )}
        >
            <body className="mx-4 mb-40 mt-8 flex max-w-3xl flex-col antialiased md:flex-row lg:mx-auto">
                <main className="mt-6 flex min-w-0 flex-auto flex-col px-2 md:px-0">
                    <Navbar />

                    {children}
                </main>
            </body>
        </html>
    );
}
