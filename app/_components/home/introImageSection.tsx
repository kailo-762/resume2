import Image, { type StaticImageData } from "next/image";

import mafia from "@/public/images/home/mafia.jpeg";
import beer from "@/public/images/home/beer.jpg";
import sandro from "@/public/images/home/sandro.jpeg";
import climb from "@/public/images/home/climb.jpeg";
import hike from "@/public/images/home/hike.jpg";
import halbmara from "@/public/images/home/halbmara.jpeg";
import brille from "@/public/images/home/brille.jpg";
import snow from "@/public/images/home/snow.jpeg";
import luigi from "@/public/images/home/luigi.jpg";
import sven from "@/public/images/home/sven.jpg";
import komorebi from "@/public/images/home/komorebi.jpeg";

const columnImageSizes = "(max-width: 768px) 50vw, 33vw";

type GalleryImageProps = {
  alt: string;
  src: StaticImageData;
  className?: string;
  containerClassName: string;
  priority?: boolean;
};

const GalleryImage = ({
  alt,
  src,
  className = "rounded-lg object-cover",
  containerClassName,
  priority = false,
}: GalleryImageProps) => (
  <div className={containerClassName}>
    <Image
      alt={alt}
      src={src}
      fill
      sizes={columnImageSizes}
      priority={priority}
      className={className}
    />
  </div>
);

export const IntroImageSection = () => {
  return (
    <div className="columns-2 sm:columns-3 gap-4 my-8">
      <GalleryImage
        alt="Me speaking on stage at React Summit about the future of Next.js"
        src={mafia}
        containerClassName="relative h-40 mb-4"
        priority
      />
      <GalleryImage
        alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
        src={hike}
        containerClassName="relative h-80 mb-4 sm:mb-0"
        className="rounded-lg object-cover object-[-16px] sm:object-center"
      />
      <GalleryImage
        alt="Me standing on stage at Reactathon delivering the keynote"
        src={sven}
        containerClassName="relative h-40 sm:h-80 sm:mb-4"
        className="rounded-lg object-cover object-top sm:object-center"
      />
      <GalleryImage
        alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
        src={luigi}
        containerClassName="relative h-40 mb-4 sm:mb-0"
      />
      <GalleryImage
        alt="Brille"
        src={brille}
        containerClassName="relative h-40 mb-4"
      />
      <GalleryImage
        alt="My badge on top of a pile of badges from a Vercel meetup we held"
        src={snow}
        containerClassName="relative h-80"
      />
      <GalleryImage
        alt="Me speaking on stage at React Summit about the future of Next.js"
        src={beer}
        containerClassName="relative h-40 mb-4"
      />
      <GalleryImage
        alt="Sandro Big"
        src={sandro}
        containerClassName="relative h-80 mb-4 sm:mb-0"
        className="rounded-lg object-cover object-[-16px] sm:object-center"
      />
      <GalleryImage
        alt="Halbmara"
        src={halbmara}
        containerClassName="relative h-40 sm:h-80 sm:mb-4"
        className="rounded-lg object-cover object-top sm:object-center"
      />
      <GalleryImage
        alt="Komorebi"
        src={komorebi}
        containerClassName="relative h-40 sm:h-80 sm:mb-4"
      />
      <GalleryImage
        alt="Climbing"
        src={climb}
        containerClassName="relative h-80"
      />
    </div>
  );
};
