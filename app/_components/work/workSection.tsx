const HEADING_COLOR_CLASS: Record<string, string> = {
    blue: "text-blue-700",
    green: "text-green-700",
    purple: "text-purple-700",
};

export type WorkSectionProps = {
    companyName: string;
    headingColor: string;
    borderClassName: string;
    position: string;
    introText: string;
    listElements: string[];
    outroText?: string;
};

export const WorkSection = ({
    companyName,
    borderClassName,
    headingColor,
    introText,
    listElements,
    position,
    outroText,
}: WorkSectionProps) => {
    const headingClassName = HEADING_COLOR_CLASS[headingColor] ?? "text-neutral-700 dark:text-neutral-300";

    return (
        <div>
            <hr className={borderClassName} />

            <h2 className={`mb-1 text-xl font-medium tracking-tighter ${headingClassName}`}>{companyName}</h2>

            <p className="mb-4 text-sm text-neutral-600 dark:text-neutral-400">{position}</p>
            <p className="mb-4 text-sm">{introText}</p>

            <div className="mt-4">
                <h3 className="text-md mb-2 font-bold">typical days include:</h3>

                <ul className="mb-4 list-disc space-y-1 pl-5 text-sm">
                    {listElements.map((element) => (
                        <li key={`${companyName}-${element}`}>{element}</li>
                    ))}
                </ul>
            </div>

            {outroText ? <p className="mt-4 text-sm">{outroText}</p> : null}
        </div>
    );
};
