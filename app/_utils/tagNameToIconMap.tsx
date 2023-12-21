import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";

export const getIconFromTagName = (tag: string) => {
  const TAG_NAME_TO_ICON_MAP: Record<string, any> = {
    typescript: <SiTypescript size={20} />,
    react: <FaReact size={20} />,
    javascript: <TbBrandJavascript size={20} />,
    next: <SiNextdotjs size={20} />,
    redux: <SiRedux size={20} />,
  };
  return TAG_NAME_TO_ICON_MAP[tag];
};
