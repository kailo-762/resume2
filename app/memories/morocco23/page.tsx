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
        <h1 className="text-4xl mb-4 font-bold text-red-500">
          MAROOOOOKKKKO 2023
        </h1>
        <p className="mb-4 text-base text-gray-600">
          Im Jahre 2023 begaben sich 7 Typen auf den Weg die Wüste zu
          durchqueren. Im Jahre 2023 begaben sich 7 Typen auf den Weg die Wüste
          zu durchqueren. Im Jahre 2023 begaben sich 7 Typen auf den Weg die
          Wüste zu durchqueren. Im Jahre 2023 begaben sich 7 Typen auf den Weg
          die Wüste zu durchqueren. Im Jahre 2023 begaben sich 7 Typen auf den
          Weg die Wüste zu durchqueren.
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
