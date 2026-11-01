import { FaReact } from "react-icons/fa";
import { SiNextdotjs, SiRedux, SiTypescript } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";

const TAG_NAME_TO_ICON = {
    typescript: SiTypescript,
    react: FaReact,
    javascript: TbBrandJavascript,
    next: SiNextdotjs,
    redux: SiRedux,
} as const;

type KnownTag = keyof typeof TAG_NAME_TO_ICON;

export const TagIcon = ({ tag }: { tag: string }) => {
    const Icon = TAG_NAME_TO_ICON[tag as KnownTag];
    if (!Icon) {
        return null;
    }

    return <Icon size={20} aria-hidden />;
};
