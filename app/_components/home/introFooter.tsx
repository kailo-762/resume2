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
        <div className="flex">
            {socialNetworks.map((socialNetwork) => (
                <a
                    className="flex flex-1 items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    key={socialNetwork.name}
                    href={socialNetwork.link}
                >
                    <ArrowIcon />

                    <p className="ml-2 h-7">{socialNetwork.name}</p>
                </a>
            ))}
        </div>
    );
};
