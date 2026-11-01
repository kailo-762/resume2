import { TripPhotoGrid } from "@/app/_components/tripPhotoGrid";
import { getImagesInDirectory } from "@/app/_utils/imageUtils";

const IMG_DIRECTORY_AIRPORT = "trips/morocco23/beginning/airport";
const IMG_DIRECTORY_TO_OASE = "trips/morocco23/beginning/toOase";
const IMG_DIRECTORY_OASE = "trips/morocco23/beginning/oase";
const IMG_DIRECTORY_AFTER_OASE = "trips/morocco23/beginning/afterOase";

const SECTION_COPY = `Am 01.10 war es endlich soweit, der lange geplante und ausgiebig
diskutierte Trip nach Marokko begann. Die sieben Freunde Nicolai,
Sebastian, Simon, Stephen, Jakob, Felix und Kai traten die Reise vom
Flughafen in Baden-Baden an. Ankunft in Marokko war gegen 0:30Uhr
Ortszeit und nachdem ein freundlicher Taxi Fahrer uns in unsere
Unterkunft in Fes fuhr, nebenbei noch beim Öffnen der Tür half, die
ersten Shotguns auf Schlafmöglichkeiten ausgingen, sich 1l Wasser zu 7.
geteilt wurde, waren alle Freunde erschöpft, aber glücklich angekommen.`;

type TripSectionProps = {
  title: string;
  sectionLabel: string;
  images: string[] | null;
};

const TripSection = ({ title, sectionLabel, images }: TripSectionProps) => (
  <>
    <div className="mb-8 border-t-2 border-gray-300" />
    <h3 className="text-2xl mb-4 font-bold text-white-500">{title}</h3>
    <p className="mb-4 text-base text-white-600">{SECTION_COPY}</p>
    {images?.length ? (
      <TripPhotoGrid images={images} sectionLabel={sectionLabel} />
    ) : null}
  </>
);

export const MoroccoBeginning = () => {
  const airportImages = getImagesInDirectory(IMG_DIRECTORY_AIRPORT);
  const toOaseImages = getImagesInDirectory(IMG_DIRECTORY_TO_OASE);
  const oaseImages = getImagesInDirectory(IMG_DIRECTORY_OASE);
  const afterOaseImages = getImagesInDirectory(IMG_DIRECTORY_AFTER_OASE);

  return (
    <div>
      <TripSection
        title="Zum Flughafen"
        sectionLabel="Zum Flughafen"
        images={airportImages}
      />
      <TripSection
        title="Auf dem Weg zur Oase"
        sectionLabel="Auf dem Weg zur Oase"
        images={toOaseImages}
      />
      <TripSection
        title="Oase Seele baumeln lassen"
        sectionLabel="Oase"
        images={oaseImages}
      />
      <TripSection
        title="Auf dem Weg in die Wüschde"
        sectionLabel="Wüste"
        images={afterOaseImages}
      />
    </div>
  );
};
