import Image from "next/image";

type TripPhotoGridProps = {
  images: string[] | null;
  sectionLabel: string;
};

export const TripPhotoGrid = ({ images, sectionLabel }: TripPhotoGridProps) => {
  if (!images?.length) {
    return null;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
      {images.map((src, index) => (
        <div
          key={src}
          className="relative aspect-[4/3] w-full overflow-hidden rounded-lg"
        >
          <Image
            src={src}
            alt={`${sectionLabel} — photo ${index + 1}`}
            fill
            sizes="(max-width: 640px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
};
