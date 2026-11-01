import { getImagesInDirectory } from "@/app/_utils/imageUtils";
import { BeginningHeading } from "@/app/trips/morocco23/_components/beginningHeading";

const IMG_DIRECTORY_AIRPORT = "trips/morocco23/beginning/airport";
const IMG_DIRECTORY_TO_OASE = "trips/morocco23/beginning/toOase";
const IMG_DIRECTORY_OASE = "trips/morocco23/beginning/oase";
const IMG_DIRECTORY_AFTER_OASE = "trips/morocco23/beginning/afterOase";

export const MoroccoBeginning = () => {
  // --- HELPERS ---

  const airportImages = getImagesInDirectory(IMG_DIRECTORY_AIRPORT);
  const toOaseImages = getImagesInDirectory(IMG_DIRECTORY_TO_OASE);
  const oaseImages = getImagesInDirectory(IMG_DIRECTORY_OASE);
  const afterOaseImages = getImagesInDirectory(IMG_DIRECTORY_AFTER_OASE);

  // --- RENDER ---

  return (
    <div>
      {/* <BeginningHeading /> */}

      <div className="mb-8 border-t-2 border-gray-300"></div>
      <h3 className="text-2xl mb-4 font-bold text-white-500">Zum Flughafen</h3>

      <p className="mb-4 text-base text-white-600">
        Am 01.10 war es endlich soweit, der lange geplante und ausgiebig
        diskutierte Trip nach Marokko begann. Die sieben Freunde Nicolai,
        Sebastian, Simon, Stephen, Jakob, Felix und Kai traten die Reise vom
        Flughafen in Baden-Baden an. Ankunft in Marokko war gegen 0:30Uhr
        Ortszeit und nachdem ein freundlicher Taxi Fahrer uns in unsere
        Unterkunft in Fes fuhr, nebenbei noch beim Öffnen der Tür half, die
        ersten Shotguns auf Schlafmöglichkeiten ausgingen, sich 1l Wasser zu 7.
        geteilt wurde, waren alle Freunde erschöpft, aber glücklich angekommen.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        {airportImages?.map((image, index) => (
          <div key={index} className="relative">
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <div className="mb-8 border-t-2 border-gray-300"></div>
      <h3 className="text-2xl mb-4 font-bold text-white-500">
        Auf dem Weg zur Oase
      </h3>

      <p className="mb-4 text-base text-white-600">
        Am 01.10 war es endlich soweit, der lange geplante und ausgiebig
        diskutierte Trip nach Marokko begann. Die sieben Freunde Nicolai,
        Sebastian, Simon, Stephen, Jakob, Felix und Kai traten die Reise vom
        Flughafen in Baden-Baden an. Ankunft in Marokko war gegen 0:30Uhr
        Ortszeit und nachdem ein freundlicher Taxi Fahrer uns in unsere
        Unterkunft in Fes fuhr, nebenbei noch beim Öffnen der Tür half, die
        ersten Shotguns auf Schlafmöglichkeiten ausgingen, sich 1l Wasser zu 7.
        geteilt wurde, waren alle Freunde erschöpft, aber glücklich angekommen.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        {toOaseImages?.map((image, index) => (
          <div key={index} className="relative">
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <div className="mb-8 border-t-2 border-gray-300"></div>
      <h3 className="text-2xl mb-4 font-bold  text-white-500">
        Oase Seele baumeln lassen
      </h3>

      <p className="mb-4 text-base text-white-600">
        Am 01.10 war es endlich soweit, der lange geplante und ausgiebig
        diskutierte Trip nach Marokko begann. Die sieben Freunde Nicolai,
        Sebastian, Simon, Stephen, Jakob, Felix und Kai traten die Reise vom
        Flughafen in Baden-Baden an. Ankunft in Marokko war gegen 0:30Uhr
        Ortszeit und nachdem ein freundlicher Taxi Fahrer uns in unsere
        Unterkunft in Fes fuhr, nebenbei noch beim Öffnen der Tür half, die
        ersten Shotguns auf Schlafmöglichkeiten ausgingen, sich 1l Wasser zu 7.
        geteilt wurde, waren alle Freunde erschöpft, aber glücklich angekommen.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        {oaseImages?.map((image, index) => (
          <div key={index} className="relative">
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <div className="mb-8 border-t-2 border-gray-300"></div>
      <h3 className="text-2xl mb-4 font-bold  text-white-500">
        Auf dem Weg in die Wüschde
      </h3>

      <p className="mb-4 text-base text-white-600">
        Am 01.10 war es endlich soweit, der lange geplante und ausgiebig
        diskutierte Trip nach Marokko begann. Die sieben Freunde Nicolai,
        Sebastian, Simon, Stephen, Jakob, Felix und Kai traten die Reise vom
        Flughafen in Baden-Baden an. Ankunft in Marokko war gegen 0:30Uhr
        Ortszeit und nachdem ein freundlicher Taxi Fahrer uns in unsere
        Unterkunft in Fes fuhr, nebenbei noch beim Öffnen der Tür half, die
        ersten Shotguns auf Schlafmöglichkeiten ausgingen, sich 1l Wasser zu 7.
        geteilt wurde, waren alle Freunde erschöpft, aber glücklich angekommen.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
        {afterOaseImages?.map((image, index) => (
          <div key={index} className="relative">
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
