import type { Metadata } from "next";

import { WORK_DATA } from "@/app/_components/work/workData";
import { WorkHeader } from "@/app/_components/work/workHeader";
import { WorkSection } from "@/app/_components/work/workSection";

export const metadata: Metadata = {
    title: "Work",
    description: "Work experience at Workwise, OBI next, and Cybex.",
};

const Work = () => {
    return (
        <section>
            <WorkHeader />

            {WORK_DATA.map((sectionData) => (
                <WorkSection key={sectionData.companyName} {...sectionData} />
            ))}
        </section>
    );
};

export default Work;
