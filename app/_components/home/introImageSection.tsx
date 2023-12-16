import Image from "next/image";

import mafia from "@/public/images/home/mafia.jpeg";
import mountain1 from "@/public/images/home/moutain1.jpg";
import mountain2 from "@/public/images/home/mountain2.jpg";
import mountain3 from "@/public/images/home/mountain3.jpg";
import halbmara from "@/public/images/home/halbmara.jpeg";
import brille from "@/public/images/home/brille.jpg";

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
          src={mountain1}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover object-[-16px] sm:object-center"
        />
      </div>
      <div className="relative h-40 sm:h-80 sm:mb-4">
        <Image
          alt="Me standing on stage at Reactathon delivering the keynote"
          src={halbmara}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover object-top sm:object-center"
        />
      </div>
      <div className="relative h-40 mb-4 sm:mb-0">
        <Image
          alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
          src={mountain2}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative h-40 mb-4">
        <Image
          alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
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
          src={mountain3}
          fill
          sizes="(min-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>

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
          src={mountain1}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover object-[-16px] sm:object-center"
        />
      </div>
      <div className="relative h-40 sm:h-80 sm:mb-4">
        <Image
          alt="Me standing on stage at Reactathon delivering the keynote"
          src={halbmara}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover object-top sm:object-center"
        />
      </div>
      <div className="relative h-40 mb-4 sm:mb-0">
        <Image
          alt="Me standing on stage at SmashingConf giving a talk about my optimism for the web"
          src={mountain2}
          fill
          sizes="(max-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
      <div className="relative h-40 mb-4">
        <Image
          alt="Me and Guillermo Rauch on stage for Vercel Ship, answering questions from the Next.js community"
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
          src={mountain3}
          fill
          sizes="(min-width: 768px) 213px, 33vw"
          priority
          className="rounded-lg object-cover"
        />
      </div>
    </div>
  );
};
