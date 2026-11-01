import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";

import { TagIcon } from "@/app/_utils/tagNameToIconMap";

type BlogStickyHeaderProps = {
    title: string;
    tags?: string[];
    date: string;
};

export const BlogStickyHeader = ({ title, tags, date }: BlogStickyHeaderProps) => {
    return (
        <div className="sticky top-0 z-10 rounded-t bg-neutral-900 p-2 md:rounded md:p-4">
            <div className="mb-4 mt-4 flex items-center gap-8">
                <Link href="/blog">
                    <IoIosArrowBack size={30} className="sm:20" />
                </Link>

                <h1 className="md:truncate-20 line-clamp-2 flex-1 overflow-hidden text-3xl font-bold md:line-clamp-none">
                    {title}
                </h1>

                <div className="hidden items-center gap-8 md:flex">
                    {tags?.map((tag) => (
                        <TagIcon key={tag} tag={tag} />
                    ))}
                </div>
            </div>

            <div className="mb-2 hidden justify-end md:flex">
                <p className="text-gray-600">{date}</p>
            </div>

            <hr className="border-t-2 border-green-500" />
        </div>
    );
};
