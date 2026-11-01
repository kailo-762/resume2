import type { Metadata } from "next";

import { IntroFooter } from "@/app/_components/home/introFooter";
import { IntroImageSection } from "@/app/_components/home/introImageSection";
import { IntroParagraph } from "@/app/_components/home/introParagraph";

export const metadata: Metadata = {
    title: "Home",
    description: "Kai Jonas — frontend tech lead at Workwise, hiker, and amateur football player in Karlsruhe.",
};

export default function Home() {
    return (
        <section>
            <IntroParagraph />
            <IntroImageSection />
            <IntroFooter />
        </section>
    );
}
