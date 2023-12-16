"use client";

import Image from "next/image";
import { Variants, motion } from "framer-motion";
import { useState } from "react";

import kai from "@/public/images/home/KaiBW.jpg";

const RoundRotatingImage = () => {
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
      className="relative h-40 w-40 mb-4 rounded-full overflow-hidden transition-transform duration-300 ease-in-out"
      whileHover="hover"
      whileTap="hover"
      variants={containerVariants}
      onHoverStart={handleInteraction}
      onTap={handleInteraction}
    >
      <Image
        alt="My beautiful face"
        src={kai}
        fill
        sizes="(max-width: 768px) 213px, 33vw"
        priority
        className="object-cover w-full h-full rounded-full"
      />
    </motion.div>
  );
};

export const WorkHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter mr-4">
        my work
      </h1>
      <RoundRotatingImage />
    </div>
  );
};
