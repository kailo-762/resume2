import { AnchorHTMLAttributes } from "react";

type BadgeProps = AnchorHTMLAttributes<HTMLAnchorElement>;

export const Badge = ({ target = "_blank", rel, ...props }: BadgeProps) => {
    const linkRel = rel ?? (target === "_blank" ? "noopener noreferrer" : undefined);

    return (
        <a
            target={target}
            rel={linkRel}
            className="inline-flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 text-sm leading-4 text-neutral-900 no-underline dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100"
            {...props}
        />
    );
};
