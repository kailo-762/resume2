import { RotatingImage } from "@/app/_components/rotatingImage";
import kai from "@/public/images/home/KaiBW.jpg";

export const WorkHeader = () => {
    return (
        <div className="flex items-center justify-between">
            <h1 className="mb-8 mr-4 text-2xl font-medium tracking-tighter">my work</h1>

            <RotatingImage src={kai} />
        </div>
    );
};
