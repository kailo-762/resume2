import { WorkSectionProps } from "@/app/_components/work/workSection";

export const WORK_DATA: WorkSectionProps[] = [
  {
    companyName: "Workwise",
    headingColor: "blue",
    introText:
      "In 2018, I joined OBI next to plan a new flagship store in Cologne.",
    listElements: [
      "Building features with TypeScript, NextJS, React, Redux, xState and more.",
      "Working closely with designers and product managers in discovery meetings.",
      "Embracing agile methodologies for efficient development.",
      "Assisting other engineers, through mentoring, pair programming and code reviews.",
      "Managing A/B tests through GrowthBook.",
      "Interviewing exciting new talent to build our dream team.",
    ],
    position: "frontend techlead",
    outroText:
      "Workwise has been a wild ride, from clueless intern to leading the frontend team. Excited for what's next!",
  },
  {
    companyName: "OBI next",
    headingColor: "green",
    introText:
      "In 2019, I joined Workwise as an intern, with an interest in frontend development (and a slight aversion of PowerPoint). This journey brought me from intern to frontend techlead. Now, at Workwise, are on a mission to help fill 1.000.000 jobs.",
    listElements: [
      "Developing of innovative and new offers.",
      "Preparing of presentations for various target groups: store employee to executive board.",
      "Simulating of customer use cases and customer journeys.",
    ],
    position: "intern retail experience transformation",
  },
  {
    companyName: "Cybex",
    headingColor: "purple",
    introText: "In 2017, I joined Cybex GmbH to support the sales team",
    listElements: [
      "Aiding with after-sales processes.",
      "Creating data bases in Excel.",
      "Entering purchase orders in SAP.",
    ],
    position: "working student in sales",
  },
];
