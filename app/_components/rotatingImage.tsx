"use client";

import { Variants, motion } from "framer-motion";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { useState } from "react";

type RotatingImageProps = {
    src: string | StaticImport;
};

export const RotatingImage = ({ src }: RotatingImageProps) => {
    // --- STATE ---

    const [interactionCount, setInteractionCount] = useState(0);

    // --- HELPERS ---

    const containerVariants: Variants = {
        initial: { rotate: 0 },
        hover: { rotate: interactionCount % 2 === 0 ? -360 : 360 },
    };

    const handleInteraction = () => {
        setInteractionCount((prevCount) => prevCount + 1);
    };

    // --- RENDER ---

    return (
        <motion.div
            className="relative mb-4 h-20 w-20 overflow-hidden rounded-full transition-transform duration-300 ease-in-out"
            whileHover="hover"
            whileTap="hover"
            variants={containerVariants}
            onHoverStart={handleInteraction}
            onTap={handleInteraction}
        >
            <Image
                alt="A rotating image"
                src={src}
                fill
                sizes="80px"
                className="h-full w-full rounded-full object-cover"
            />
        </motion.div>
    );
};
