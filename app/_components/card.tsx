import React from "react";
import Image from "next/image";

type CardProps = {
    imageUrl: string;
    title: string;
    description: string;
};

export const Card = ({ imageUrl, title, description }: CardProps) => (
    <div className="h-90 w-60 cursor-pointer overflow-hidden rounded-lg shadow-lg md:w-80">
        <div className="relative h-32 sm:h-40">
            <Image
                loading="lazy"
                src={imageUrl}
                fill
                sizes="(max-width: 640px) 45vw, 320px"
                className="rounded-t-lg object-cover"
                alt={title}
            />
        </div>

        <div className="w-full bg-white p-4 dark:bg-gray-800">
            <p className="mb-2 text-xl font-medium text-gray-800 dark:text-white">{title}</p>

            <p className="text-md font-light text-gray-600 dark:text-gray-300">{description}</p>
        </div>
    </div>
);
