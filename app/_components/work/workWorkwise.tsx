import { Badge } from "@/app/_components/badge";
import { WorkIntro } from "@/app/_components/work/workIntro";
import Link from "next/link";

export const WorkWorkwise = () => {
  return (
    <div className="rounded-md shadow-md">
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      <h2 className="font-medium text-xl mb-1 tracking-tighter">Workwise</h2>

      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
        Frontend Techlead
      </p>
      <p className="text-sm mb-4">
        In 2019, I joined Workwise as an intern, knowing nothing about tech (and
        a slight aversion of PowerPoint). This journey brought me from intern to
        Frontend Techlead. Now we are on a mission to help fill{" "}
        <span className="font-bold underline text-blue-500">1.000.000</span>{" "}
        jobs.
      </p>

      <div className="mt-4">
        <h3 className="text-lg font-bold mb-2">Typical Days include:</h3>

        <p className="text-sm mb-4">
          <li>
            Building features with TypeScript, NextJS, React, Redux, xState and
            more.
          </li>

          <li>
            Working closely with designers and product managers in discovery
            meetings.
          </li>

          <li>Embracing agile methodologies for efficient development. </li>

          <li>
            Assisting other engineers, through mentoring, pair programming and
            code reviews.
          </li>

          <li>Starting A/B tests through GrowthBook.</li>

          <li>Interviewing exciting new talent to build our dream team.</li>
        </p>
      </div>

      <p className="text-sm mt-4">
        Workwise has been a wild ride, from clueless intern to leading the
        frontend team. Excited for what's next!
      </p>
    </div>
  );
};
