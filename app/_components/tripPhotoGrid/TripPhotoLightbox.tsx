"use client";

import Image from "next/image";
import { useEffect } from "react";

import { TRIP_LIGHTBOX_SIZES } from "@/app/_components/tripPhotoGrid/constants";

type TripPhotoLightboxProps = {
    sectionLabel: string;
    images: string[];
    selectedIndex: number;
    onClose: () => void;
    onPrevious: () => void;
    onNext: () => void;
};

const navButtonClassName =
    "absolute top-1/2 z-10 flex h-14 w-14 sm:h-16 sm:w-16 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-white/15 text-4xl sm:text-5xl leading-none text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-white/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80";

export const TripPhotoLightbox = ({
    sectionLabel,
    images,
    selectedIndex,
    onClose,
    onPrevious,
    onNext,
}: TripPhotoLightboxProps) => {
    const src = images[selectedIndex];

    useEffect(() => {
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
            if (event.key === "ArrowLeft") {
                onPrevious();
            }
            if (event.key === "ArrowRight") {
                onNext();
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [onClose, onPrevious, onNext]);

    return (
        <div
            role="dialog"
            aria-modal="true"
            aria-label={`${sectionLabel} — Foto ${selectedIndex + 1}`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 sm:p-8"
            onClick={onClose}
        >
            <button
                type="button"
                className="absolute right-4 top-4 z-10 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
                onClick={onClose}
                aria-label="Schließen"
            >
                Schließen
            </button>

            <button
                type="button"
                className={`${navButtonClassName} left-2 sm:left-6`}
                onClick={(event) => {
                    event.stopPropagation();
                    onPrevious();
                }}
                aria-label="Vorheriges Foto"
            >
                ‹
            </button>

            <button
                type="button"
                className={`${navButtonClassName} right-2 sm:right-6`}
                onClick={(event) => {
                    event.stopPropagation();
                    onNext();
                }}
                aria-label="Nächstes Foto"
            >
                ›
            </button>

            <div
                className="relative h-[min(85vh,900px)] w-full max-w-5xl px-12 sm:px-20"
                onClick={(event) => event.stopPropagation()}
            >
                <Image
                    src={src}
                    alt={`${sectionLabel} — photo ${selectedIndex + 1}`}
                    fill
                    sizes={TRIP_LIGHTBOX_SIZES}
                    className="object-contain"
                    priority
                />
            </div>

            <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-sm font-medium text-white/80">
                {selectedIndex + 1} / {images.length}
            </p>
        </div>
    );
};
