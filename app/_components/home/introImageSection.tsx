import Image from "next/image";

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

export const IntroImageSection = () => {
  // --- RENDER ---

  return (
    <div className="columns-2 sm:columns-3 gap-4 my-8">
      <div className="relative h-40 mb-4">
        <Image
          alt="Me speaking on stage at React Summit about the future of Next.js"
          src={mafia}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative h-80 mb-4 sm:mb-0">
        <Image
          alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
          src={hike}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover object-[-16px] sm:object-center"
        />
      </div>
      <div className="relative h-40 sm:h-80 sm:mb-4">
        <Image
          alt="Me standing on stage at Reactathon delivering the keynote"
          src={sven}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover object-top sm:object-center"
        />
      </div>
      <div className="relative h-40 mb-4 sm:mb-0">
        <Image
          alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
          src={luigi}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative h-40 mb-4">
        <Image
          alt="Brille"
          src={brille}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative h-80">
        <Image
          alt="My badge on top of a pile of badges from a Vercel meetup we held"
          src={snow}
          fill
          sizes="(min-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>

      <div className="relative h-40 mb-4">
        <Image
          alt="Me speaking on stage at React Summit about the future of Next.js"
          src={beer}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative h-80 mb-4 sm:mb-0">
        <Image
          alt="Sandro Big"
          src={sandro}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover object-[-16px] sm:object-center"
        />
      </div>
      <div className="relative h-40 sm:h-80 sm:mb-4">
        <Image
          alt="Halbmara"
          src={halbmara}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover object-top sm:object-center"
        />
      </div>
      {/* <div className="relative h-40 mb-4 sm:mb-0">
        <Image
          alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
          src={sandro}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div> */}
      <div className="relative h-40 sm:h-80 sm:mb-4">
        <Image
          alt="Komorebi"
          src={komorebi}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>

      {/* before: 58.1kb, 566ms */}
      <div className="relative h-80">
        <Image
          alt="My badge on top of a pile of badges from a Vercel meetup we held"
          src={climb}
          fill
          sizes="(min-width: 768px) 23px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};
