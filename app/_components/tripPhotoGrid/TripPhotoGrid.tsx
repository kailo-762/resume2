"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

import {
    TRIP_PHOTO_INITIAL_COUNT,
    TRIP_PHOTO_LOAD_MORE_COUNT,
    TRIP_THUMBNAIL_SIZES,
} from "@/app/_components/tripPhotoGrid/constants";
import { TripPhotoLightbox } from "@/app/_components/tripPhotoGrid/TripPhotoLightbox";

type TripPhotoGridProps = {
    images: string[];
    sectionLabel: string;
};

export const TripPhotoGrid = ({ images, sectionLabel }: TripPhotoGridProps) => {
    const [visibleCount, setVisibleCount] = useState(TRIP_PHOTO_INITIAL_COUNT);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const visibleImages = images.slice(0, visibleCount);
    const hasMore = visibleCount < images.length;

    const closeLightbox = useCallback(() => setSelectedIndex(null), []);

    const showPrevious = useCallback(() => {
        setSelectedIndex((index) => {
            if (index === null) {
                return null;
            }
            return (index - 1 + images.length) % images.length;
        });
    }, [images.length]);

    const showNext = useCallback(() => {
        setSelectedIndex((index) => {
            if (index === null) {
                return null;
            }
            return (index + 1) % images.length;
        });
    }, [images.length]);

    return (
        <div className="mb-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {visibleImages.map((src, index) => (
                    <button
                        key={`${src}-${index}`}
                        type="button"
                        className="relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
                        onClick={() => setSelectedIndex(index)}
                        aria-label={`${sectionLabel} — Foto ${index + 1} vergrößern`}
                    >
                        <Image
                            src={src}
                            alt={`${sectionLabel} — photo ${index + 1}`}
                            fill
                            sizes={TRIP_THUMBNAIL_SIZES}
                            className="object-cover transition-opacity hover:opacity-90"
                        />
                    </button>
                ))}
            </div>

            {hasMore ? (
                <button
                    type="button"
                    className="mt-4 text-sm text-neutral-600 underline-offset-2 hover:text-neutral-900 hover:underline dark:text-neutral-400 dark:hover:text-neutral-100"
                    onClick={() =>
                        setVisibleCount((count) => Math.min(count + TRIP_PHOTO_LOAD_MORE_COUNT, images.length))
                    }
                >
                    Load more photos ({images.length - visibleCount} remaining)
                </button>
            ) : null}

            {selectedIndex !== null ? (
                <TripPhotoLightbox
                    sectionLabel={sectionLabel}
                    images={images}
                    selectedIndex={selectedIndex}
                    onClose={closeLightbox}
                    onPrevious={showPrevious}
                    onNext={showNext}
                />
            ) : null}
        </div>
    );
};
