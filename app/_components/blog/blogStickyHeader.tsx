import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

import { TagIcon } from "@/app/_utils/tagNameToIconMap";

type BlogStickyHeaderProps = {
  title: string;
  tags?: string[];
  date: string;
};

export const BlogStickyHeader = ({
  title,
  tags,
  date,
}: BlogStickyHeaderProps) => {
  return (
    <div className="p-2 sticky top-0 z-10 bg-neutral-900 rounded-t md:p-4 md:rounded">
      <div className="flex items-center gap-8 mt-4 mb-4">
        <Link href="/blog">
          <IoIosArrowBack size={30} className="sm:20" />
        </Link>

        <h1 className="flex-1 text-3xl font-bold overflow-hidden line-clamp-2 md:line-clamp-none md:truncate-20">
          {title}
        </h1>

        <div className="hidden md:flex items-center gap-8">
          {tags?.map((tag) => (
            <TagIcon key={tag} tag={tag} />
          ))}
        </div>
      </div>

      <div className="hidden md:flex justify-end mb-2">
        <p className="text-gray-600">{date}</p>
      </div>

      <hr className="border-t-2 border-green-500" />
    </div>
  );
};
