import { AnchorHTMLAttributes } from "react";

type BadgeProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Badge = ({ target = "_blank", rel, ...props }: BadgeProps) => {
  const linkRel =
    rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);

  return (
    <a
      target={target}
      rel={linkRel}
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
      {...props}
    />
  );
};
