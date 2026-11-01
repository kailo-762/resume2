import type { Metadata } from "next";
import Link from "next/link";

import { BlogHeader } from "@/app/_components/blog/blogHeader";
import { getSortedMarkdownData } from "@/app/_utils/readMarkdownFiles";
import { TagIcon } from "@/app/_utils/tagNameToIconMap";

export const metadata: Metadata = {
    title: "Blog",
    description: "Articles on frontend development, Redux, and related topics.",
};

const Blog = () => {
    const markdownData = getSortedMarkdownData();

    return (
        <section>
            <BlogHeader />
            <ul className="space-y-4">
                {markdownData.map(({ id, matterResultData }) => {
                    const tags = matterResultData.tags ? (matterResultData.tags as string[]) : undefined;

                    return (
                        <li key={id} className="mb-4 mt-4 flex list-none items-center gap-8">
                            <Link href={`/blog/${id}`} className="cursor-pointer text-blue-500 hover:text-blue-700">
                                {matterResultData.title}
                            </Link>

                            {tags?.map((tag) => (
                                <TagIcon key={tag} tag={tag} />
                            ))}
                        </li>
                    );
                })}
            </ul>
        </section>
    );
};

export default Blog;
