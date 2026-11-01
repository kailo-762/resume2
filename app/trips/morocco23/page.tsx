import { MoroccoBeginning } from "@/app/trips/morocco23/beginning";

const Morocco23 = () => {
  // --- RENDER ---

  return (
    <>
      <div className="py-6">
        <h1 className="text-4xl mb-4 font-bold text-white-500">Marokko 2023</h1>

        <h2 className="text-2xl mb-4 font-bold text-white-500">
          Ankommen im Marroc Land (02.10. - 04.10.2023)
        </h2>

        <MoroccoBeginning />

        {/* <p className="mb-4 text-base text-white-600">BLABLABLA</p> */}

        {/* <div className="relative h-80 mb-4">
          <Image
            alt="Komorebi"
            src={komorebi}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div> */}
      </div>
    </>
  );
};

export default Morocco23;
