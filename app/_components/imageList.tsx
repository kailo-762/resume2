import Image from "next/image";
import React from "react";

type ImageListProps = {
  images: string[];
  borderColor?: string;
};

export const ImageList = ({
  images,
  borderColor = "border-red-500",
}: ImageListProps) => {
  const numOfImages = images.length;

  return (
    <div className="flex flex-wrap">
      {images.map((image, index) => (
        <div key={index} className={`w-1/3 p-1`}>
          <div
            className={`relative h-40 mb-4 w-${numOfImages} border-4 rounded-lg ${borderColor}`}
          >
            <Image
              loading="lazy"
              src={image}
              fill
              sizes="(max-width: 768px) 213px, 100vw"
              alt={"img"}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
