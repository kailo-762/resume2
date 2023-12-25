"use client";

import komorebi from "@/public/images/home/komorebi.jpeg";
import Image from "next/image";

const images = [
  "https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1682686581312-506a8b53190e?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const Morocco23 = () => {
  return (
    <>
      <div className="py-6">
        <h1 className="text-4xl mb-4 font-bold text-white-500">Marokko 2023</h1>

        <p className="mb-4 text-base text-white-600">
          Am 01.10 war es endlich soweit, der lange geplante und ausgiebig
          diskutierte Trip nach Marokko begann. Die sieben Freunde Nicolai,
          Sebastian, Simon, Stephen, Jakob, Felix und Kai traten die Reise vom
          Flughafen in Baden-Baden an. Ankunft in Marokko war gegen 0:30Uhr
          Ortszeit und nachdem ein freundlicher Taxi Fahrer uns in unsere
          Unterkunft in Fes fuhr, nebenbei noch beim Öffnen der Tür half, die
          ersten Shotguns auf Schlafmöglichkeiten ausgingen, sich 1l Wasser zu
          7. geteilt wurde, waren alle Freunde erschöpft, aber glücklich
          angekommen.
        </p>

        <div className="relative h-80 mb-4">
          <Image
            alt="Komorebi"
            src={komorebi}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <p className="mb-4 text-base text-white-600 font-bold">
          Tag 1: 02.10.: Ankommen im Marroc Land
        </p>

        <p className="mb-4 text-base text-white-600">BLABLABLA</p>

        <div className="relative h-80 mb-4">
          <Image
            alt="Komorebi"
            src={komorebi}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        <h2 className="text-2xl mb-4 font-bold  text-white-500">Tag 1</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative h-32 sm:h-40">
              <Image
                loading="lazy"
                src={image}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
                alt={`image-${index}`}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Morocco23;
