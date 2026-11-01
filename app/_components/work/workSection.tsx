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
  const headingClassName =
    HEADING_COLOR_CLASS[headingColor] ?? "text-neutral-700 dark:text-neutral-300";

  return (
    <div>
      <hr className={borderClassName} />

      <h2
        className={`font-medium text-xl mb-1 tracking-tighter ${headingClassName}`}
      >
        {companyName}
      </h2>

      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
        {position}
      </p>
      <p className="text-sm mb-4">{introText}</p>

      <div className="mt-4">
        <h3 className="text-md font-bold mb-2">typical days include:</h3>

        <ul className="text-sm mb-4 list-disc pl-5 space-y-1">
          {listElements.map((element) => (
            <li key={`${companyName}-${element}`}>{element}</li>
          ))}
        </ul>
      </div>

      {outroText ? <p className="text-sm mt-4">{outroText}</p> : null}
    </div>
  );
};
