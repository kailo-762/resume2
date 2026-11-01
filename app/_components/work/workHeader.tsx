import { RotatingImage } from "@/app/_components/rotatingImage";
import kai from "@/public/images/home/KaiBW.jpg";

export const WorkHeader = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="font-medium text-2xl mb-8 tracking-tighter mr-4">
        my work
      </h1>

      <RotatingImage src={kai} />
    </div>
  );
};
