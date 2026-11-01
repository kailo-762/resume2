import Link from "next/link";

import { Badge } from "@/app/_components/badge";

export const IntroParagraph = () => {
    return (
        <div className="w-full">
            <h1 className="mb-8 text-2xl font-medium tracking-tighter">hey, I'm kai jonas 👋</h1>

            <p className="prose prose-neutral dark:prose-invert">
                I am a frontend developer, hiker, and amateur football{" "}
                <a
                    className="underline"
                    href="https://www.fupa.net/player/kai-rauenbuehler-1707550"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    player
                </a>
                . I currently{" "}
                <Link className="underline" href="/work">
                    work
                </Link>
                {` as frontend tech lead at `}
                <span className="not-prose">
                    <Badge href="https://workwise.io">Workwise</Badge>
                </span>{" "}
                in{" "}
                <a
                    className="underline"
                    href="https://www.google.com/maps/place/Karlsruhe"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Karlsruhe
                </a>
                , where I help people in finding jobs.
            </p>
        </div>
    );
};
