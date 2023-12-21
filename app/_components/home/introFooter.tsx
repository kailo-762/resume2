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
  const numberOfSocialNetworks = socialNetworks.length;

  // --- RENDER ---

  return (
    <div className="flex">
      {socialNetworks.map((socialNetwork) => (
        <a
          className={`flex w-1/${numberOfSocialNetworks} items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all`}
          rel="noopener noreferrer"
          target="_blank"
          key={socialNetwork.name}
          href={socialNetwork.link}
        >
          <ArrowIcon />

          <p className="h-7 ml-2">{socialNetwork.name}</p>
        </a>
      ))}
    </div>
  );
};
