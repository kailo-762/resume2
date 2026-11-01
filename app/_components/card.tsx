import React from "react";
import Image from "next/image";

type CardProps = {
  imageUrl: string;
  title: string;
  description: string;
};

export const Card = ({ imageUrl, title, description }: CardProps) => (
  <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer">
    <div className="relative h-32 sm:h-40">
      <Image
        loading="lazy"
        src={imageUrl}
        fill
        sizes="(max-width: 768px) 240px, 320px"
        className="rounded-t-lg object-cover"
        alt={title}
      />
    </div>

    <div className="bg-white dark:bg-gray-800 w-full p-4">
      <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
        {title}
      </p>

      <p className="text-gray-600 dark:text-gray-300 font-light text-md">
        {description}
      </p>
    </div>
  </div>
);
