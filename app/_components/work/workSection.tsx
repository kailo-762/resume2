export type WorkSectionProps = {
  companyName: string;
  headingColor: string;
  position: string;
  introText: string;
  listElements: string[];
  outroText?: string;
};

export const WorkSection = ({
  companyName,
  headingColor,
  introText,
  listElements,
  position,
  outroText,
}: WorkSectionProps) => {
  return (
    <div key={companyName}>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />

      <h2 className={`font-medium text-xl mb-1 tracking-tighter text-blue-700`}>
        {companyName}
      </h2>

      <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
        {position}
      </p>
      <p className="text-sm mb-4">{introText}</p>

      <div className="mt-4">
        <h3 className="text-md font-bold mb-2">typical days include:</h3>

        <p className="text-sm mb-4">
          {listElements.map((element) => (
            <li key={`${companyName}-${element}`}>{element}</li>
          ))}
        </p>
      </div>

      <p className="text-sm mt-4">{outroText}</p>
    </div>
  );
};
