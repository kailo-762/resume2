import { ArrowIcon } from "@/app/_components/home/arrowIcon";

const socialNetworks = [
  {
    name: "github",
    link: "https://github.com/kailogin",
  },
  {
    name: "linkedin",
    link: "https://www.linkedin.com/in/kai-jonas-rauenbuehler/",
  },
  {
    name: "instagram",
    link: "https://www.instagram.com/kailojonas/",
  },
];

export const IntroFooter = () => {
  return (
    <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
      {socialNetworks.map((socialNetwork) => (
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href={socialNetwork.link}
          >
            <ArrowIcon />
            <p className="h-7 ml-2">{socialNetwork.name}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};
