"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

const INITIAL_COUNT = 6;
const LOAD_MORE_COUNT = 9;

type TripPhotoGridProps = {
    images: string[];
    sectionLabel: string;
};

export const TripPhotoGrid = ({ images, sectionLabel }: TripPhotoGridProps) => {
    const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const visibleImages = images.slice(0, visibleCount);
    const hasMore = visibleCount < images.length;
    const selectedImage = selectedIndex === null ? null : images[selectedIndex];

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

    useEffect(() => {
        if (selectedIndex === null) {
            return;
        }

        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeLightbox();
            }
            if (event.key === "ArrowLeft") {
                showPrevious();
            }
            if (event.key === "ArrowRight") {
                showNext();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [selectedIndex, closeLightbox, showPrevious, showNext]);

    return (
        <div className="mb-8">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {visibleImages.map((src, index) => (
                    <button
                        key={src}
                        type="button"
                        className="relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-400"
                        onClick={() => setSelectedIndex(index)}
                        aria-label={`${sectionLabel} — Foto ${index + 1} vergrößern`}
                    >
                        <Image
                            src={src}
                            alt={`${sectionLabel} — photo ${index + 1}`}
                            fill
                            sizes="(max-width: 640px) 45vw, (max-width: 768px) 30vw, 240px"
                            className="object-cover transition-opacity hover:opacity-90"
                        />
                    </button>
                ))}
            </div>

            {hasMore ? (
                <button
                    type="button"
                    className="mt-4 text-sm text-neutral-600 underline-offset-2 hover:text-neutral-900 hover:underline dark:text-neutral-400 dark:hover:text-neutral-100"
                    onClick={() => setVisibleCount((count) => Math.min(count + LOAD_MORE_COUNT, images.length))}
                >
                    Load more photos ({images.length - visibleCount} remaining)
                </button>
            ) : null}

            {selectedImage !== null && selectedIndex !== null ? (
                <div
                    role="dialog"
                    aria-modal="true"
                    aria-label={`${sectionLabel} — Foto ${selectedIndex + 1}`}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
                    onClick={closeLightbox}
                >
                    <button
                        type="button"
                        className="absolute right-4 top-4 z-10 rounded-md px-3 py-1 text-sm text-white/90 hover:bg-white/10 hover:text-white"
                        onClick={closeLightbox}
                        aria-label="Schließen"
                    >
                        Schließen
                    </button>

                    <button
                        type="button"
                        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-white/90 hover:bg-white/10 hover:text-white sm:left-4"
                        onClick={(event) => {
                            event.stopPropagation();
                            showPrevious();
                        }}
                        aria-label="Vorheriges Foto"
                    >
                        ‹
                    </button>

                    <button
                        type="button"
                        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-2 text-white/90 hover:bg-white/10 hover:text-white sm:right-4"
                        onClick={(event) => {
                            event.stopPropagation();
                            showNext();
                        }}
                        aria-label="Nächstes Foto"
                    >
                        ›
                    </button>

                    <div
                        className="relative h-[min(85vh,900px)] w-full max-w-5xl"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt={`${sectionLabel} — photo ${selectedIndex + 1}`}
                            fill
                            sizes="(max-width: 1280px) 100vw, 1280px"
                            className="object-contain"
                            priority
                        />
                    </div>

                    <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/70">
                        {selectedIndex + 1} / {images.length}
                    </p>
                </div>
            ) : null}
        </div>
    );
};
