"use client";

import Image from "next/image";
import { useState } from "react";

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 9;

type TripPhotoGridProps = {
  images: string[];
  sectionLabel: string;
};

export const TripPhotoGrid = ({ images, sectionLabel }: TripPhotoGridProps) => {
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const visibleImages = images.slice(0, visibleCount);
  const hasMore = visibleCount < images.length;

  return (
    <div className="mb-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {visibleImages.map((src, index) => (
          <div
            key={src}
            className="relative aspect-[4/3] w-full overflow-hidden rounded-lg"
          >
            <Image
              src={src}
              alt={`${sectionLabel} — photo ${index + 1}`}
              fill
              sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 240px"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {hasMore ? (
        <button
          type="button"
          className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 underline-offset-2 hover:underline"
          onClick={() =>
            setVisibleCount((count) =>
              Math.min(count + LOAD_MORE_COUNT, images.length)
            )
          }
        >
          Load more photos ({images.length - visibleCount} remaining)
        </button>
      ) : null}
    </div>
  );
};
