"use client";

import { Variants, motion } from "framer-motion";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
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
      className="relative h-20 w-20 mb-4 rounded-full overflow-hidden transition-transform duration-300 ease-in-out"
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
        sizes="(max-width: 768px) 213px, 33vw"
        priority
        className="object-cover w-full h-full rounded-full"
      />
    </motion.div>
  );
};
