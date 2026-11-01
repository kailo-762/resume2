import Image from "next/image";

type ImageListProps = {
    images: string[];
    borderColor?: string;
};

export const ImageList = ({ images, borderColor = "border-red-500" }: ImageListProps) => {
    return (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            {images.map((image, index) => (
                <div key={image} className={`relative aspect-[4/3] overflow-hidden rounded-lg border-4 ${borderColor}`}>
                    <Image
                        src={image}
                        fill
                        sizes="(max-width: 640px) 50vw, 33vw"
                        alt={`Gallery photo ${index + 1}`}
                        className="object-cover"
                    />
                </div>
            ))}
        </div>
    );
};
