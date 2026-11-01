import { WORK_DATA } from "@/app/_components/work/workData";
import { WorkHeader } from "@/app/_components/work/workHeader";
import { WorkSection } from "@/app/_components/work/workSection";

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
