import type { Metadata } from "next";

import { MoroccoBeginning } from "@/app/trips/morocco23/beginning";

export const metadata: Metadata = {
  title: "Marokko 2023",
  description: "Trip photos and notes from Morocco, October 2023.",
};

const Morocco23 = () => {
  return (
    <div className="py-6">
      <h1 className="text-4xl mb-4 font-bold">Marokko 2023</h1>

      <h2 className="text-2xl mb-4 font-bold">
        Ankommen im Marroc Land (02.10. – 04.10.2023)
      </h2>

      <MoroccoBeginning />
    </div>
  );
};

export default Morocco23;
