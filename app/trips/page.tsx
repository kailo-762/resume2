import type { Metadata } from "next";

import { Card } from "@/app/_components/card";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Trips",
    description: "Travel photo albums and trip notes.",
};

const Trips = () => {
    return (
        <div className="flex flex-wrap gap-8">
            <Link href="/trips/morocco23">
                <Card
                    imageUrl="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFyb2Njb3xlbnwwfHwwfHx8MA%3D%3D"
                    title="Marokko"
                    description="Morocco 2023 — Fes, oasis, and desert."
                />
            </Link>

            <div className="cursor-not-allowed opacity-60" aria-disabled="true">
                <Card
                    imageUrl="https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWV4aWNvfGVufDB8fDB8fHww"
                    title="Mexico (coming soon)"
                    description="Album not published yet."
                />
            </div>
        </div>
    );
};

export default Trips;
